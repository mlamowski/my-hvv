import React, { Fragment, useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import ContextManager from '../data/contextManager';
import { storeData } from '../data/AppStorage';
import ButtonQRCodeScanner from '../components/ButtonQRCodeScanner';
import MyQRCodeScanner from '../components/MyQRCodeScanner';
import Style from '../constants/Style';

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
    console.log("station object");
    console.log(stationObject);
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
      
      <View style={styles.header}>
        <View style={styles.topBar}>
          <View style={styles.searchBar}>
            <MySearchBar navigation={navigation} clickHandler={clickHandler}/>
          </View>
          <View>
            <ButtonQRCodeScanner clickHandler={openQRCodeScannerClickHandler}/>
          </View>
        </View>
      </View>

      
      <MyQRCodeScanner visible={QRScannerIsVisible} clickHandlerCloseModal={closeQRCodeScannerClickHandler} clickHandlerToNav={clickHandler}/>
      
      <HomeTopTabNavigator/>

    </Fragment>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    maxWidth: 600,
    //paddingHorizontal: Style.standartMargin,
  },
  searchBar: {
    flex: 1,
  },
  qrButton: {

  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
  }
});