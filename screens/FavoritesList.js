import React, {useContext} from 'react'
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import StationList from '../components/StationList';
import ContextManager from '../data/contextManager';


export default FavoritesList = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();
  appData = myContextManager.getAppData();

  //delete favorite context - takes station object to delete
  const createTwoButtonAlert = (stationObject) =>
    Alert.alert('Deletion', 'Delete: ' + stationObject.station + "?", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete', 
        onPress: () => [/*console.log('Delete Pressed'), */myContextManager.deleteFavorite(stationObject)]}, //delete fav
  ]);

  //clickHandler für wenn auf eine Station in der Favlist geglickt wird
  const clickHandler = (stationObject) => {
    createTwoButtonAlert(stationObject)
  };

  const addButtonHandler = () => {
    navigation.navigate("FavAdd");
  }

  return (
    <View>

      <StationList stationsData={appData.favorites} clickHandler={clickHandler}/>

      <Button
        title="Add Station"
        onPress={() => addButtonHandler()}
      />

    </View>
  )
}