import React, {useContext} from 'react'
import { Text, View, Button } from 'react-native';
import Station from '../models/Station';
import ContextManager from '../data/contextManager';
import MySearchBar from '../components/MySearchBar';
import Colors from '../constants/Colors';


export default FavoritesAdd = ({ navigation }) => {

  //get global context
  const myContextManager = new ContextManager();

  //onlickhandler for clicking on a searched station - gets a station object 
  const clickHandler = (stationObject) => {
    //add station to favs 
    console.log("add station");
    myContextManager.addFavorite(stationObject)
  };

  return (
    <View style={{backgroundColor: Colors.lightBackground, flex: 1}}>
      
      <MySearchBar clickHandler={clickHandler}/>

    </View>
  )
}