import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

import HomeFavoritesList from '../components/HomeFavoritesList';
import HomeRecentList from '../components/HomeRecentList';

export default function HomeTopTabNavigator() {
  return (
    <TopTab.Navigator /*tabBar={props => <HomeRecentList/>} */>
      <TopTab.Screen name="HomeRecentList" component={HomeRecentList} />
      <TopTab.Screen name="HomeFavoritesList" component={HomeFavoritesList} />
    </TopTab.Navigator>
  );
}