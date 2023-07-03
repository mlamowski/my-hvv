import React, { Fragment, useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native';
import ContextManager from '../data/contextManager';
import { storeData } from '../data/AppStorage';
import ButtonQRCodeScanner from '../components/ButtonQRCodeScanner';
import MyQRCodeScanner from '../components/MyQRCodeScanner';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';

export default HomeScreen = ({ navigation }) => {

  const [QRScannerIsVisible, setQRCodeScannerVisible] = useState(false);

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

  const openQRCodeScannerClickHandler = () => {
    setQRCodeScannerVisible(true)
  }

  const closeQRCodeScannerClickHandler = () => {
    setQRCodeScannerVisible(false)
  } 	

  return (
    <Fragment>
        <MySearchBar navigation={navigation} clickHandler={clickHandler}/>
        <ButtonQRCodeScanner clickHandler={openQRCodeScannerClickHandler}/>
        <MyQRCodeScanner visible={QRScannerIsVisible} clickHandlerCloseModal={closeQRCodeScannerClickHandler} clickHandlerToNav={clickHandler}/>
        <HomeTopTabNavigator/>
    </Fragment>
  )
}