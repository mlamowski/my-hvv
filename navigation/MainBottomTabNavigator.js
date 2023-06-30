import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeStackNavigator';
import FavoritesNavigator from './FavoritesStackNavigator';
import Colors from '../constants/Colors';
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
export default function MainBottomTabNavigator() {
  return (
    <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Home"
          activeColor={Colors.accent}
          inactiveColor={Colors.textDark}
          screenOptions={{
            tabBarLabel: "test",
            tabBarActiveTintColor: Colors.accent,
            tabBarInactiveTintColor: Colors.textDark,
            tabBarStyle: {height: 50},
            headerShown: false,
            tabBarShowLabel: false,
          }}
          
          
        >
          <BottomTab.Screen 
            name="Home" 
            component={HomeNavigator} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={24} color={color} />
              ),
              
            }}
            
          />
          <BottomTab.Screen 
            name="Favorites" 
            component={FavoritesNavigator} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Ionicons name="bookmarks" size={24} color={color} />
              ),
              
            }}
          />

        </BottomTab.Navigator>
    </NavigationContainer>

  )
}
