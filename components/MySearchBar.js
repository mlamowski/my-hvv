import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View, Button } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { getInit } from '../api/init'
import { getCheckName } from '../api/checkName';
import { getDepartureList } from '../api/departureList';
import Station from '../models/Station';
import StationList from '../components/StationList';


export default MySearchBar = ({ navigation, clickHandler }) => {

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

  //OnClick handler und navigation zur nächsten seite, die angeklickte station wird übergeben


  //Wird ausgeführt, wenn Searchbar upgedatet wird
  const updateSearch = async (search) => {
    setSearch(search);
    setStationsData(await getCheckName(search))
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />

      {isReady ? (

        <StationList stationsData={stations} clickHandler={clickHandler}/>


    ) : (
      null


      
    )}

    </View>
  )
}
