import React, {useContext} from 'react'
import { Text, View, Button } from 'react-native';
import Station from '../models/Station';
import ContextManager from '../data/contextManager';
import MySearchBar from '../components/MySearchBar';


export default FavoritesAdd = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();

  const testButtonHandler = () => {
    myContextManager.addFavorite(new Station({"city": "Hammah", "combinedName": "Bf. Hammah", "coordinate": {"x": 9.36721, "y": 53.61269}, "globalId": "de:03359:34802", "hasStationInformation": false, "id": "Master:34802", "name": "Bf. Hammah", "serviceTypes": ["bus", "r"], "type": "STATION"}));
    myContextManager.addFavorite(new Station({"city": "Bälau", "combinedName": "Bälau", "coordinate": {"x": 10.621685, "y": 53.617678}, "globalId": "de:01053:37664", "hasStationInformation": false, "id": "Master:37664", "name": "Bälau", "serviceTypes": ["bus"], "type": "STATION"}));
    myContextManager.addFavorite(new Station({"city": "Hamburg", "combinedName": "Barmbek", "coordinate": {"x": 10.04445, "y": 53.587397}, "globalId": "de:02000:70950", "hasStationInformation": true, "id": "Master:70950", "name": "Barmbek", "serviceTypes": ["bus", "u", "s"], "type": "STATION"}));
  }

  //onlickhandler for clicking on a searched station - gets a station object 
  const clickHandler = (stationObject) => {
    //add station to favs 
    console.log("add station");
    myContextManager.addFavorite(stationObject)
  };

  return (
    <View>
      
      <MySearchBar clickHandler={clickHandler}/>

    </View>
  )
}