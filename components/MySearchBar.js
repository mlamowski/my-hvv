import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View, Button, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { getInit } from '../api/init'
import { getCheckName } from '../api/checkName';
import { getDepartureList } from '../api/departureList';
import Station from '../models/Station';
import StationList from '../components/StationList';
import { Platform } from 'react-native';
import Style from '../constants/Style';
import Colors from '../constants/Colors';

export default MySearchBar = ({ clickHandler }) => {

  //states
  const [isReady, setReady] = useState(false);
  const [stationsData, setStationsData] = useState([]);
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);


  //Wird ausgeführt, sobald der State stationsData geändert wird
  useEffect(() => {
    if (stationsData.results) {
      setReady(true);
      //Erstelle neues Objekt Statiosn mit unseren stationsData Array
      setStations((stationsData.results).map((item, index) => new Station(item)))
    } else {
      setReady(false)
    }
  }, [stationsData])

  //Wird ausgeführt, wenn Searchbar upgedatet wird
  const updateSearch = async (search) => {
    setSearch(search);
    setStationsData(await getCheckName(search))
  };

  return (
    <View style={styles.container}>
      
      <SearchBar
        containerStyle={styles.searchbar}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform={"ios"}
      />
      

      {isReady ? (
        <StationList stationsData={stations} clickHandler={clickHandler}/>
      ) : (
        null
      )}
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    //alignItems: "center",
    backgroundColor: "white",  

  }, 
  searchbar: {
    //width: "100%",
    //maxWidth: 600,
    backgroundColor: "white",
    //paddingHorizontal: 5,
  }
})