import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen'; // Ensure the file exists at this path or update the path if necessary
import type { RootStackParamList } from '../navigation/RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const user = null; // Acá más adelante vas a chequear si el usuario está logueado (con Supabase)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
