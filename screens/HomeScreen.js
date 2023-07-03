import React, { Fragment, useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import ContextManager from '../data/contextManager';
import { storeData } from '../data/AppStorage';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';

export default HomeScreen = ({ navigation }) => {

  //get context manager to add recents 
  const myContextManager = new ContextManager();
  appData = myContextManager.getAppData();

  //useEffect for saving 
  useEffect(() => {
    storeData(appData);
  }, [appData])
  
  const clickHandler = (stationObject) => {
    navigation.navigate("LineDetails", { stationObject: stationObject })
    //add station the recents 
    myContextManager.addRecent(stationObject)
  };
  return (
    <Fragment>
        <MySearchBar navigation={navigation} clickHandler={clickHandler}/>
        <HomeTopTabNavigator/>
    </Fragment>
  )
}