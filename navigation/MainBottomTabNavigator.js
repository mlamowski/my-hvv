import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const BottomTab = createMaterialBottomTabNavigator();

import HomeNavigator from './HomeStackNavigator';
import FavoritesNavigator from './FavoritesStackNavigator';


export default function MainBottomTabNavigator() {
  return (
    <NavigationContainer>
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeNavigator} />
            <BottomTab.Screen name="Favorites" component={FavoritesNavigator} />
        </BottomTab.Navigator>
    </NavigationContainer>

  )
}
