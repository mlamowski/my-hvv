import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import FavAdd from '../screens/FavoritesAdd';
import FavList from '../screens/FavoritesList';

const Stack = createStackNavigator();

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavList" component={FavList} />
      <Stack.Screen name="FavAdd" component={FavAdd} />
    </Stack.Navigator>
  )
}
