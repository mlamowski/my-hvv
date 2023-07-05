import React, {useContext, useEffect} from 'react'
import { Text, View, Button, Alert, StyleSheet } from 'react-native';
import StationList from '../components/StationList';
import ContextManager from '../data/contextManager';
import AddButton from '../components/AddButton';
import Colors from '../constants/Colors';
import PageTitle from '../components/PageTitle';
import { storeData } from '../data/AppStorage';
import Style from '../constants/Style';


export default FavoritesList = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();
  appData = myContextManager.getAppData();

  //useEffect for saving 
  useEffect(() => {
    storeData(appData);
  }, [appData])


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
    //myContextManager.deleteRecents();
    navigation.navigate("FavAdd");
  }

  return (
    <View style={styles.container}>

      <PageTitle smallTitle={"Deine"} bigTitle={"Favoriten"}/>

      <StationList stationsData={appData.favorites} clickHandler={clickHandler}/>
      <View style={styles.addButton}>
        <AddButton clickHandler={addButtonHandler} text={"+"}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBackground,  
    alignItems: "center",
  }, 
  addButton: {
    margin: Style.standartMargin,
  }
});