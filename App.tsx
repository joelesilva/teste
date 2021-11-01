import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';
import { AddButton } from './src/screens/AddButton';

export default function App() {
  return (
    <View >
      
      <AddButton/>
      <StatusBar style="auto" />
    </View>
  );
}

