import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import FavAdd from '../screens/FavoritesAdd';
import FavList from '../screens/FavoritesList';

const Stack = createStackNavigator();

import { getHeaderTitle } from '@react-navigation/elements';
import FavNavHeader from '../components/FavNavHeader';

customHeader: ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <MyHeader
      title={title}
      leftButton={
        back ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    />
  );
};

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="FavList"
      
      screenOptions={{
        //headerShown: false,
        //hide the very thin line under the header 
        headerShadowVisible: false,
        //customHeader: {customHeader},
      }}
    >
      <Stack.Screen 
        name="FavList" 
        component={FavList} 
        options={{
          title: "Favoriten",
          //headerShown: false,
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
