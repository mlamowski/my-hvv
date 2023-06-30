import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

import HomeFavoritesList from '../components/HomeFavoritesList';
import HomeRecentList from '../components/HomeRecentList';
import { Title } from 'react-native-paper';

export default function HomeTopTabNavigator() {
  return (
    <TopTab.Navigator /*tabBar={props => <HomeRecentList/>} */
      initialRouteName="HomeRecentList"
      screenOptions={{
        tabBarShowLabel: true,
        //tabBarLabel: "test"
      }}
    >
      <TopTab.Screen 
        name="HomeRecentList" 
        component={HomeRecentList} 
        options={{
          title: "Recents"
        }}
      />
      <TopTab.Screen 
        name="HomeFavoritesList" 
        component={HomeFavoritesList} 
        options={{
          title: "Favorites"
        }}
      />
    </TopTab.Navigator>
  );
}