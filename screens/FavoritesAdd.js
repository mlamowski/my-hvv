import React, {useContext, useEffect, useState} from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import Station from '../models/Station';
import ContextManager from '../data/contextManager';
import MySearchBar from '../components/MySearchBar';
import Colors from '../constants/Colors';
import { storeData } from '../data/AppStorage';



export default FavoritesAdd = ({ navigation }) => {

  const [QRScannerIsVisible, setQRCodeScannerVisible] = useState(false);

  //useEffect for saving 
  const myContextManager = new ContextManager();
  useEffect(() => {
    storeData(myContextManager.appData);
  }, [myContextManager.getAppData])


  //onlickhandler for clicking on a searched station - gets a station object 
  const clickHandler = (stationObject) => {
    //add station to favs 
    console.log("add station");
    myContextManager.addFavorite(stationObject)
    
  };

  const openQRCodeScannerClickHandler = () => {
    setQRCodeScannerVisible(true)
  }

  const closeQRCodeScannerClickHandler = () => {
    setQRCodeScannerVisible(false)
  } 

  return (
    <View style={{backgroundColor: Colors.lightBackground, flex: 1}}>
      
      <View style={styles.header}>
        <MySearchBar clickHandler={clickHandler} qrButtonClickHandler={openQRCodeScannerClickHandler}/>
      </View>
      <MyQRCodeScanner visible={QRScannerIsVisible} clickHandlerCloseModal={closeQRCodeScannerClickHandler} clickHandlerToNav={clickHandler}/>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});