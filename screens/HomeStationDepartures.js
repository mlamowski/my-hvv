import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { getFilteredDepartureList } from '../api/departureList';
import { getCheckName } from '../api/checkName';
import LineDetailsList from '../components/LineDetailsList';
import PageTitle from '../components/PageTitle';
import Colors from '../constants/Colors';
import Style from '../constants/Style';



export default HomeStationDepartures = ({ route, navigation }) => {



  const [filteredDepartures, setFilteredDepartures] = useState([]);
  const [isReady, setReady] = useState(false);

  const {line, serviceID, direction, stationObject} = route.params;

  useEffect(() => {
    onScreenLoad();
  }, [])




  //wenn screen geladen, wird eine gefilterte liste der haltestellen an der gewählten sation mit der konkreten line id 
  const onScreenLoad = async() => {
    //const directionID = line.vorwaerts[0].directionId
    const directionID = direction
    const tempLineList = await getFilteredDepartureList(stationObject.stationObject, serviceID)
    const departures = tempLineList.departures
    //hier werden nur die lines verwendet, die die richtige directionid ( 1 - vorwaerts oder 6 - rueckwaerts) haben
    const filteredList = departures.filter((dep) => dep.directionId == directionID);

    // filteredList.forEach(element => {
    //   console.log(element);
    // });

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

    <View style={styles.container}>

      <PageTitle smallTitle={"Abfahrten"} bigTitle={line.name}/>

      
        {isReady ? (
          <View style={styles.container}>
            <LineDetailsList lineName={line.name} lineData={filteredDepartures} clickHandler={clickHandler}/>
          </View>
        ) : (
          null
        )}
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.lightBackground,  
    alignItems: "center",
  }
});