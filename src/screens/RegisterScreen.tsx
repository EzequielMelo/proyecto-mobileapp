import { TextInput, Button, View, Alert } from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStackParamList';
import { signUp } from '../services/auth';
import { useState } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Registro'>;

export default function RegisterScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { error, data } = await signUp(email, password);

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    Alert.alert('Registro exitoso', 'Verifica tu correo electrónico antes de iniciar sesión');
    navigation.navigate('Login');
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
