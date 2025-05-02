// navigation/StackNavigation.tsx
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { RootMainStackParamList } from '../types';
import Login from '../screens/auth/login'
import Register from '../screens/auth/signup'
import Dashboard from '../screens/auth/dashboard'

const Stack = createStackNavigator<RootMainStackParamList>();

const StackNavigation = () => {
  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  const MainScreens: {
    [key in keyof RootMainStackParamList]: React.ComponentType<any>;
  } = {
    Login: Login,
    Register: Register,
    Dashboard: Dashboard,
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries(MainScreens).map(([name, Component]) => (
          <Stack.Screen
            key={name}
            name={name as keyof RootMainStackParamList}
            component={Component}
            options={{gestureEnabled: true}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
