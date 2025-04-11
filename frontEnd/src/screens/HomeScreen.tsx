import { TextInput, Button, View } from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <AuthLayout title="Iniciar sesión">
      <View style={{ gap: 16 }}>
        <TextInput
          placeholder="Email"
          style={{
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 8,
          }}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          style={{
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 8,
          }}
        />
        <Button title="Ingresar" onPress={() => {}} />
      </View>
    </AuthLayout>
  );
}
