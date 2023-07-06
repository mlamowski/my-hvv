import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import StationList from '../components/StationList';
import ContextManager from '../data/contextManager';
import Colors from '../constants/Colors';


export default HomeRecentList = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();
  appData = myContextManager.getAppData();

  //myContextManager.deleteRecents();

  //clickhandler for clicking on a station 
  const clickHandler = (stationObject) => {
    //station wieder nach oben in die recents enfügen 
    myContextManager.addRecent(stationObject);
    navigation.navigate("LineDetails", { stationObject: stationObject })
  };

  const longClickHandler = (stationObject) => {
    myContextManager.deleteRecent(stationObject);
  };

  return (
    <View style={styles.container}>
      {/* recent list is reversed so the latest entry is at the top */}
      <StationList style={styles.list} stationsData={appData.recents} clickHandler={clickHandler} longClickHandler={longClickHandler}/>
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