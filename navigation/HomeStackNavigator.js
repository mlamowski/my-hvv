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
    <Stack.Navigator
      screenOptions={{
        //hide the very thin line under the header 
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen 
        name="LineDetails" 
        component={LineDetails} 
        options={{
          title: "Abfahrten",
        }}
      />
      <Stack.Screen 
        name="StationDepartures" 
        component={StationDepartures} 
        options={{
          title: "Abfahrten",
        }}
      />

    </Stack.Navigator>
  )
}
