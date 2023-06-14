import React, {useContext} from 'react'
import { Text, View, Button } from 'react-native';
import Station from '../models/Station';
import ContextManager from '../data/contextManager';


export default FavoritesAdd = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();

  const testButtonHandler = () => {
    myContextManager.addFavorite(new Station({"city": "Hammah", "combinedName": "Bf. Hammah", "coordinate": {"x": 9.36721, "y": 53.61269}, "globalId": "de:03359:34802", "hasStationInformation": false, "id": "Master:34802", "name": "Bf. Hammah", "serviceTypes": ["bus", "r"], "type": "STATION"}))
  }

  return (
    <View>
      
      <Button
        title="Add Station"
        onPress={() => testButtonHandler()}
      />

      <Button
        title="Back"
        onPress={()=>{navigation.goBack()}}
      />

    </View>
  )
}