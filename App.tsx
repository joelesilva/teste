import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { Home } from './src/screens/Home';
import { AddBox } from './src/screens/AddBox';
import {EditBox } from './src/screens/EditBox';





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddButton" component={AddBox} />
      <Stack.Screen name="EditButton" component={EditBox} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

