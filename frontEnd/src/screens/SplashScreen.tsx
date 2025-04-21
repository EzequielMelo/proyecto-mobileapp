import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Ir a Login después de unos segundos
    }, 3000); // Cambiá el tiempo según dure tu animación
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={require('../../assets/anime-project.json')}
        autoPlay
        loop={false} // Que se reproduzca solo una vez
        style={{
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151F2E', // mismo color que tu AuthLayout
    justifyContent: 'center',
    alignItems: 'center',
  },
});
