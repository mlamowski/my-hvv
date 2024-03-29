import React, { Fragment, useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet, useWindowDimensions } from 'react-native';
import ContextManager from '../data/contextManager';
import { storeData } from '../data/AppStorage';
import ButtonQRCodeScanner from '../components/ButtonQRCodeScanner';
import MyQRCodeScanner from '../components/MyQRCodeScanner';
import Style from '../constants/Style';

import HomeTopTabNavigator from '../navigation/HomeTopTabNavigator';

import MySearchBar from '../components/MySearchBar';

export default HomeScreen = ({ navigation }) => {

  const [QRScannerIsVisible, setQRCodeScannerVisible] = useState(false);
  const [TopTabNavIsVisible, setTopTabNavVisible] = useState(true);


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

  const windowHeight = useWindowDimensions().height;

  const hideTopTabNavigator = () => {
    setTopTabNavVisible(false)
    
  }

  const showTopTabNavigator = () => {
    setTopTabNavVisible(true)

  }

  const openQRCodeScannerClickHandler = () => {
    setQRCodeScannerVisible(true)
  }

  const closeQRCodeScannerClickHandler = () => {
    setQRCodeScannerVisible(false)
  } 	

  return (
    <Fragment >
      <View style={[{ height: "100%", backgroundColor: "white" }]}>
        <View style={styles.header}>
          <View style={styles.topBar}>
            <View style={styles.searchBar}>
              <MySearchBar navigation={navigation} clickHandler={clickHandler} hideTopTabNavigator={hideTopTabNavigator} showTopTabNavigator={showTopTabNavigator} qrButtonClickHandler={openQRCodeScannerClickHandler}/>
            </View>
            {/* <View>
              <ButtonQRCodeScanner clickHandler={openQRCodeScannerClickHandler}/>
            </View> */}
          </View>
        </View>

        
        <MyQRCodeScanner visible={QRScannerIsVisible} clickHandlerCloseModal={closeQRCodeScannerClickHandler} clickHandlerToNav={clickHandler}/>
        { TopTabNavIsVisible && 
          <HomeTopTabNavigator/>
      }
      </View>
      


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
    
  }
});