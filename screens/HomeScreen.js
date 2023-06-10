import React, { Fragment } from 'react'
import { Text, View, Button } from 'react-native';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';

export default HomeScreen = ({ navigation }) => {
  return (
    //WTF?!
    <Fragment>
        <MySearchBar navigation={navigation}/>
        <HomeTopTabNavigator/>
    </Fragment>
  )
}
