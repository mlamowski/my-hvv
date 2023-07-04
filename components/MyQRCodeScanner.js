import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Pressable, Modal, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { getOneCheckName } from '../api/checkName';

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
    <Modal visible={visible} animationType='slide'>
        {hasPermission === null &&  <Text> Requesting for camera permission</Text>}
        {hasPermission === false &&  <Text> No access to camera </Text>}
        {hasPermission === true && scanned === false &&

        
        <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        >
            <Pressable   
              onPress={() => {clickHandler(), setScanned(false)}}
              unstable_pressDelay={50}
              style={ ({ pressed }) => [
              styles.container,
              { opacity: pressed ? 0.5 : 1 },
              ]}
            >
              <Text style={styles.text}>Close</Text>
            </Pressable>
        </BarCodeScanner> }
    </Modal>

  )
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    backgroundColor: "white",  

  }
})

