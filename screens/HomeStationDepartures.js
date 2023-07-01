import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native';
import { getFilteredDepartureList } from '../api/departureList';
import { getCheckName } from '../api/checkName';
import LineDetailsList from '../components/LineDetailsList';


export default HomeStationDepartures = ({ route, navigation }) => {

  const [filteredDepartures, setFilteredDepartures] = useState([]);
  const [isReady, setReady] = useState(false);

  const {line, stationObject} = route.params;

  useEffect(() => {
    onScreenLoad();
  }, [])

  //wenn screen geladen, wird eine gefilterte liste der haltestellen an der gewählten sation mit der konkreten line id 
  const onScreenLoad = async() => {
    const directionID = line.vorwaerts[0].directionId
    const tempLineList = await getFilteredDepartureList(stationObject.stationObject, line.vorwaerts[0].line.id)
    const departures = tempLineList.departures
    //hier werden nur die lines verwendet, die die richtige directionid ( 1 - vorwaerts oder 6 - rueckwaerts) haben
    const filteredList = departures.filter((dep) => dep.directionId == directionID);

    //als state setzen
    setFilteredDepartures(filteredList)

  }

  //wenn state gesetzt wurde setready = true --> rendering begins
  useEffect(() => {
    if (filteredDepartures) {  
      setReady(true);
    }
  }, [filteredDepartures]);


  const clickHandler = (item) => {
  };

  
  return (
    <View>
      {isReady ? (
        <LineDetailsList lineName={line.name} lineData={filteredDepartures} clickHandler={clickHandler}/>
      ) : (
        null
      )}
    </View>
  )
}