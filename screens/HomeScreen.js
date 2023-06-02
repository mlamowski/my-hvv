import React, { Fragment } from 'react'
import { Text, View, Button } from 'react-native';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import SearchBar from '../components/SearchBar';

export default HomeScreen = ({ navigation }) => {
  return (
    //WTF?!
    <Fragment>
        <SearchBar/>
        <HomeTopTabNavigator/>
    </Fragment>
  )
}
