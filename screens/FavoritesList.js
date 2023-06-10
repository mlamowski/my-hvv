import React from 'react'
import { Text, View, Button } from 'react-native';
import StationListItem from "../components/StationListItem"
import StationList from '../components/StationList';
import { Stations } from '../data/Dummy-data';


export default FavoritesList = ({ navigation }) => {

  console.log("on fav list screen load");

  //clickHandler für wenn auf eine Station in der Favlist geglickt wird
  const clickHandler = (stationObject) => {
    //nav to edit in stacknav 
    navigation.navigate("FavEdit", { itemID: stationObject.id });
    console.log('Item clicked:', stationObject.id);
  };

  return (
    <View>
      <Text> Ich bin FavList </Text>
      <Button
          title="To FavEdit"
          onPress={() => navigation.navigate("FavEdit") }
      />
      <Button
          title="Go Back"
          onPress={() => navigation.goBack() }
      />

      <StationList stationsData={Stations} clickHandler={clickHandler}/>

    </View>
  )
}