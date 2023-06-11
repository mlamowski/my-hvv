import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native';
import { getDepartureList } from '../api/departureList';
import DepartureList from '../components/DepartureList';

export default HomeLineDetails = ({ route, navigation }) => {

  //TODO: 
  //Die Departures müssen geupdatet werden können
  //Filterung, dass S1 Richtung Wedel zb nicht doppelt aufgelistet wird. --> Line ID & Richtung?
  //Infos falls keine Abfahrten verfügbar sind
  
  //Empfange Params von Seite davor
  const {stationObject} = route.params;

  //States
  const [isReady, setReady] = useState(false);
  const [departures, setDepartures] = useState([]);
  // [displayedDepartures, setDisplayedDepartures] = useState([]);
  const [filteredDepartures, setFilteredDepartures] = useState([]);


  //Api anfrage für alle Departures an der gewählten Haltestelle
  const onScreenLoad = async() => {
    //console.log(stationObject.stationObject)
    setDepartures(await getDepartureList(stationObject.stationObject))

  }
  //Wird ausgeführt, sobald screen geladen ist
  useEffect(() => {
      onScreenLoad();
  }, [])

  //Wird ausgeführt, sobald der State departures gesetzt wurde
  useEffect(() => {
    if (departures.departures) {  
      setReady(true);
      console.log(departures.departures)
    }
  }, [departures]);

  //clickhandler der zur StationDepartures führt. Die gewählte Departure wird übergeben
  const clickHandler = (item) => {
    navigation.navigate("StationDepartures", { departure: item, stationObject: stationObject})
  };

  return (
    <View>
        {isReady ? (

        <DepartureList stationsData={departures.departures} clickHandler={clickHandler}/>

) : (
          null
        )}
    </View>
  )
}
