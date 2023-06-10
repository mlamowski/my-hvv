import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View, Button } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { getInit } from '../api/init'
import { getCheckName } from '../api/checkName';
import { getDepartureList } from '../api/departureList';
import Station from '../models/Station';




import StationList from '../components/StationList';


export default MySearchBar = ({ navigation }) => {

  const [isReady, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);
  const [stationsArray, setStationsArray] = useState([]);

  const [testArr, setTestArr] = useState([]);
  const [testStation, setTestStation] = useState([]);



  useEffect(() => {

    //console.log(testArr)
    //console.log(testStation)
    //console.log(stationsArray[0])

  })

  const clickHandler = (stationObject) => {
    //nav to edit in stacknav 
    //setDep(id)
    //console.log(id)
    //console.log(data.results[0])
    setTestStation(stationObject.stationObject)
    setDep(testStation)
    console.log(testArr.departures[0].line)

    //navigation.navigate("LineDetails", { itemID: id })

  };

  const setDep = async (id) => {
    setTestArr(await getDepartureList(id))
  }

  const updateSearch = async (search) => {
    setSearch(search);
    //setData(await getInit())

    setData(await getCheckName(search))


    if (data.results) {

      setStations(data.results);
      setReady(true);


    } else {
      setReady(false)
    }

    setStationsArray(stations.map((item, index) => new Station(item)))

  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />

      {isReady ? (

        <StationList stationsData={stationsArray} clickHandler={clickHandler}/>


    ) : (
      null


      
    )}

    </View>
  )
}
