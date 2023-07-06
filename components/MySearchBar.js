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
import ButtonQRCodeScanner from './ButtonQRCodeScanner';

export default MySearchBar = ({ clickHandler, qrButtonClickHandler, showTopTabNavigator, hideTopTabNavigator }) => {

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

    if(search.length > 0) {
      hideTopTabNavigator()
    } else {
      showTopTabNavigator()

    }

    console.log("updatesearch");
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

  const myClickHandler = (stationObject) => {
    //clear searchbar 
    this.search.clear();
    clickHandler(stationObject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SearchBar
          containerStyle={styles.searchbar}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          platform={"ios"}
          ref={search => this.search = search}
        />

        <ButtonQRCodeScanner clickHandler={qrButtonClickHandler}/>
      </View>

      {isReady ? (
        <StationList stationsData={stations} clickHandler={myClickHandler} longClickHandler={clickHandler}/>
      ) : (
        null
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center"
  }, 
  searchbar: {
    backgroundColor: "white",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    maxWidth: 600,
  },
})


{/*
import React, {useEffect, useState, useContext} from 'react'
import {ActivityIndicator, Text, View, Button, StyleSheet, Modal } from 'react-native';
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
import ButtonQRCodeScanner from './ButtonQRCodeScanner';

export default MySearchBar = ({ clickHandler, qrButtonClickHandler }) => {

  //useEffect for saving 
  const myContextManager = new ContextManager();

  //states
  const [modalIsVisible, setModalVisible] = useState(false);
  const [isReady, setReady] = useState(false);
  const [stationsDataFromAPI, setStationsDataFromAPI] = useState([]);
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);
  const [stationsFromAppData, setStationsFromAppData] = useState([])


  //Wird ausgeführt, sobald der State stationsData geändert wird
  useEffect(() => {

    console.log("useeffect stationsDataFromAPI");
    if (stationsDataFromAPI.results && search.length > 0) {
      console.log("setready true");
      console.log(stations);
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
      console.log("setready false");
    }
  }, [stationsDataFromAPI])

  //Wird ausgeführt, wenn Searchbar upgedatet wird
  const updateSearch = async (search) => {
    
    if(search.length > 0) {
      setModalVisible(true)
    } else {
      setModalVisible(false)

    }

    //console.log("updatesearch");
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

  testClickHandler = () => {
    console.log("test");
  }

  return (
    <View style={styles.container}>
        {modalIsVisible ? (
          <Modal animationType='slide'>

          <View style={styles.topBar}>
            <SearchBar
              containerStyle={styles.searchbar}
              placeholder="Type Here..."
              onChangeText={updateSearch}
              value={search}
              platform={"ios"}
            />
  
            <ButtonQRCodeScanner clickHandler={qrButtonClickHandler}/>
          </View>
          {isReady === true &&
  
  
                <StationList stationsData={stations} clickHandler={clickHandler}/>
              }
        </Modal> 
      ) : (
        <View style={styles.topBar}>
        <SearchBar
          containerStyle={styles.searchbar}
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          platform={"ios"}
        />

        <ButtonQRCodeScanner clickHandler={qrButtonClickHandler}/>
      </View>
      )}

              
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center"
  }, 
  searchbar: {
    backgroundColor: "white",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    maxWidth: 600,
  },
})
*/}