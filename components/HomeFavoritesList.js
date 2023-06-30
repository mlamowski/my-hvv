import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import StationList from '../components/StationList';
import ContextManager from '../data/contextManager';
import Colors from '../constants/Colors';

export default HomeFavoritesList = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();
  appData = myContextManager.getAppData();

  //clickhandler for clicking on a station 
  const clickHandler = (stationObject) => {
    navigation.navigate("LineDetails", { stationObject: stationObject })
  };

  return (
    <View style={styles.container}>
      <StationList style={styles.list} stationsData={appData.favorites} clickHandler={clickHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.lightBackground,  
    alignItems: "center",
  }
});