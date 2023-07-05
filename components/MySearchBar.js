import React, {useEffect, useState, useContext} from 'react'
import {ActivityIndicator, Text, View, Button, StyleSheet } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { getInit } from '../api/init'
import { getCheckName } from '../api/checkName';
import { getDepartureList } from '../api/departureList';
import ContextManager from '../data/contextManager';
import Station from '../models/Station';
import StationList from '../components/StationList';
import { Platform } from 'react-native';
import Style from '../constants/Style';
import Colors from '../constants/Colors';

export default MySearchBar = ({ clickHandler }) => {

  //useEffect for saving 
  const myContextManager = new ContextManager();

  //states
  const [isReady, setReady] = useState(false);
  const [stationsDataFromAPI, setStationsDataFromAPI] = useState([]);
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);
  const [stationsFromAppData, setStationsFromAppData] = useState([])


  //Wird ausgeführt, sobald der State stationsData geändert wird
  useEffect(() => {
    if (stationsDataFromAPI.results && search.length > 0) {
      setReady(true);
      //erhaltende Daten von api als station object erstellen und in temp array speichern
      const stationsAsStationObjects = (stationsDataFromAPI.results).map((item, index) => new Station(item))

      //api array durchgehen und mit stations von app data vergleichen. 
      //wenn das objekt nicht in appdata vorkommt --> pushen
      stationsAsStationObjects.forEach(element => {
        if (!(stationsFromAppData.some(obj => obj.id === element.id))) {
          stationsFromAppData.push(element)
        }
      });
      //gemergde array als stations setzen. dies wird dann gerendert
      setStations(stationsFromAppData)

    } else {
      setReady(false)
    }
  }, [stationsDataFromAPI])

  //Wird ausgeführt, wenn Searchbar upgedatet wird
  const updateSearch = async (search) => {
    //sucheingabe als state setzen
    setSearch(search);

    //appdata nach sucheingabe filtern und als state setzen
    //recents und favs jeweils als array speichern
    const foundFavorites = (myContextManager.getAppData()).favorites.filter(item => item.station.startsWith(search));
    const foundRecents = (myContextManager.getAppData()).recents.filter(item => item.station.startsWith(search));

    //favs und recents mergen. darauf achten, dass keine stationen doppelt vorkommen.
    foundFavorites.forEach(element => {
      if ((foundRecents.some(obj => obj.id != element.id))) {
        foundRecents.push(element)
      }
    });
    setStationsFromAppData(foundRecents)

    //api abfrage
    setStationsDataFromAPI(await getCheckName(search))
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