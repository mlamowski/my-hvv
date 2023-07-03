import React, {useContext, useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import Station from '../models/Station';
import ContextManager from '../data/contextManager';
import MySearchBar from '../components/MySearchBar';
import Colors from '../constants/Colors';
import { storeData } from '../data/AppStorage';



export default FavoritesAdd = ({ navigation }) => {

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

  return (
    <View style={{backgroundColor: Colors.lightBackground, flex: 1}}>
      
      <MySearchBar clickHandler={clickHandler}/>

    </View>
  )
}