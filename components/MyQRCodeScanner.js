import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Pressable, Modal, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getOneCheckName } from '../api/checkName';
import AddButton from './AddButton';
import Style from '../constants/Style';

import Station from '../models/Station';



export default MyQRCodeScanner = ({visible, clickHandlerCloseModal, clickHandlerToNav}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [stations, setStations] = useState({});
  const [stationsData, setStationsData] = useState([]);
  const [scanned, setScanned] = useState(false);


  useEffect(() => {
    getBarCodeScannerPermissions();
  });

  //Permission setzen
  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  //Wird ausgeführt, wenn QR-Code gescannt wurde 
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    //Von api stationsobjekt bekommen
    setStationsData(await getOneCheckName(data))
    //alert(`Bar code with type ${type} and data ${data} has been scanned!` );
  };



  //Wird ausgeführt, sobald der State stationsData geändert wird
  useEffect(() => {
    if(stationsData.results) {
      setStations(new Station(stationsData.results[0]))
    }
  }, [stationsData])

  //Wird ausgeführt, sobald der State stationsData geändert wird
  useEffect(() => {
    if (stations.id != undefined) {
      setScanned(false);
      clickHandlerCloseModal();
      clickHandlerToNav(stations)

    }
  }, [stations])


  
  return (
    <Modal visible={visible} animationType='slide' transparent={true}>
        {hasPermission === null &&  <Text>Requesting for camera permission</Text>}
        {hasPermission === false &&  <Text>No access to camera</Text>}
        {hasPermission === true && scanned === false &&

          <View style={styles.container}>
            <View style={styles.scanner}>
              <BarCodeScanner
                  onBarCodeScanned={handleBarCodeScanned}
                  style={StyleSheet.absoluteFillObject}
              >
                <View style={styles.button}>

                  <AddButton clickHandler={() => {clickHandlerCloseModal(), setScanned(false)}} text={"x"}/>

                </View>
                  
              </BarCodeScanner> 
              
            </View>
          </View>
        
        }
    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

  },
  scanner: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  button:{
    marginTop: 20,
    marginRight: 7,
    alignSelf: "flex-end",
  }
})

