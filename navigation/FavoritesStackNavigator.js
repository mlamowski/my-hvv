import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import FavAdd from '../screens/FavoritesAdd';
import FavList from '../screens/FavoritesList';

const Stack = createStackNavigator();

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="FavList"
      screenOptions={{
        //headerShown: false,
      }}
    >
      <Stack.Screen 
        name="FavList" 
        component={FavList} 
        options={{
          title: "Deine Favoriten",
        }}
      />
      <Stack.Screen 
        name="FavAdd" 
        component={FavAdd} 
        options={{
          title: "Favorit Hinzufügen",
        }}
      />
    </Stack.Navigator>
  )
}
