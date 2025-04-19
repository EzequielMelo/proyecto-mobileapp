import { TextInput, Button, View, Alert } from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStackParamList';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import api from '../api/axios';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { email, password });

      const token = response.data.session.access_token;
      const user = response.data.user;

      await login(token, user);
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      Alert.alert('Error', err.response?.data?.error || 'Error en el inicio de sesión');
    }
  };

  return (
    <AuthLayout title="Iniciar sesión">
      <View style={{ gap: 16 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 8,
          }}
        />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 8,
          }}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
        <Button
          title="¿No tenés cuenta? Registrate"
          onPress={() => navigation.navigate('Registro')}
          color="#ccc"
        />
      </View>
    </AuthLayout>
  );
}
