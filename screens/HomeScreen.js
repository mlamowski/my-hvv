import React, { Fragment, useState } from 'react'
import { Text, View, Button } from 'react-native';
import ContextManager from '../data/contextManager';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';
import ButtonQRCodeScanner from '../components/ButtonQRCodeScanner';
import MyQRCodeScanner from '../components/MyQRCodeScanner';

export default HomeScreen = ({ navigation }) => {
  const [QRScannerIsVisible, setQRCodeScannerVisible] = useState(false);

  //get context manager to add recents 
  const myContextManager = new ContextManager();
  
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