import React, { Fragment } from 'react'
import { Text, View, Button } from 'react-native';
import ContextManager from '../data/contextManager';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';

export default HomeScreen = ({ navigation }) => {

  //get context manager to add recents 
  const myContextManager = new ContextManager();
  
  const clickHandler = (stationObject) => {
    navigation.navigate("LineDetails", { stationObject: stationObject })
    //add station the recents 
    myContextManager.addRecent(stationObject)
  };
  return (
    //WTF?!
    <Fragment>
        <MySearchBar navigation={navigation} clickHandler={clickHandler}/>
        <HomeTopTabNavigator/>
    </Fragment>
  )
}
