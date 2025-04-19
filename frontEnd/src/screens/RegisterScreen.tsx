import { TextInput, Button, View, Alert } from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStackParamList';
import { useState } from 'react';
import api from '../api/axios';

type Props = NativeStackScreenProps<RootStackParamList, 'Registro'>;

export default function RegisterScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await api.post('/auth/register', { email, password }); //
      Alert.alert('Registro exitoso', 'Verifica tu correo antes de iniciar sesión');
      navigation.navigate('Login');
    } catch (error: any) {
      console.error(error);
      Alert.alert('Error', error.response?.data?.error || 'Ocurrió un error al registrarse');
    }
  };

  return (
    <AuthLayout title="Registrate">
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
        <Button title="Registrarse" onPress={handleRegister} />
      </View>
    </AuthLayout>
  );
}
