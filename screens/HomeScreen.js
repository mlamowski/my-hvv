import React, { Fragment } from 'react'
import { Text, View, Button } from 'react-native';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';

export default HomeScreen = ({ navigation }) => {
  
  const clickHandler = (stationObject) => {
    navigation.navigate("LineDetails", { stationObject: stationObject })
  };
  return (
    //WTF?!
    <Fragment>
        <MySearchBar navigation={navigation} clickHandler={clickHandler}/>
        <HomeTopTabNavigator/>
    </Fragment>
  )
}
