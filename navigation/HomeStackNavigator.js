import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import LineDetails from '../screens/HomeLineDetails';
import StationDepartures from '../screens/HomeStationDepartures';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LineDetails" component={LineDetails} />
      <Stack.Screen name="StationDepartures" component={StationDepartures} />

    </Stack.Navigator>
  )
}
