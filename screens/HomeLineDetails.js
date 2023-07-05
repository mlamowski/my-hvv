import React, { useEffect, useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { getDepartureList } from '../api/departureList';
import DepartureList from '../components/DepartureList';
import Style from '../constants/Style';
import Colors from '../constants/Colors';
import PageTitle from '../components/PageTitle';


export default HomeLineDetails = ({ route, navigation }) => {

  //TODO: 
  //Die Departures müssen geupdatet werden können
  //Infos falls keine Abfahrten verfügbar sind
  
  //Empfange Params von Seite davor
  const {stationObject} = route.params;

  console.log("Stationobject inside homelinedetail");
  console.log(stationObject);

  //States
  const [isReady, setReady] = useState(false);
  const [departures, setDepartures] = useState([]);
  const [filteredDepartures, setFilteredDepartures] = useState([]);


  //Api anfrage für alle Departures an der gewählten Haltestelle
  const onScreenLoad = async() => {
    setDepartures(await getDepartureList(stationObject.stationObject))

  }
  //Wird ausgeführt, sobald screen geladen ist
  useEffect(() => {
      onScreenLoad();
  }, [])

  //Wird ausgeführt, sobald der State departures gesetzt wurde
  useEffect(() => {
    if (departures.departures) {  
      filterDepartures()
    }
  }, [departures]);

  //Funktion, um alle Departures die unter die selbe Linie fallen gruppiert werden.
  //Außerdem wird zwischen der richtungdID der linien unterschieden. es gibt vorwärts(1) und rückwärts(6)
  const filterDepartures = () => {
    //Erstellung eines temp arrays, da durch react natives async verhalten die daten nicht direkt ins array gepusht werden
    const filteredDepsTempArray = []

    departures.departures.forEach((dep) => {
      const lineName = dep.line.name; 
      const lineID = dep.line.id; 
      console.log("dep:");
      console.log(dep);
      //Abfrage, ob sich der lineName bereits in der tempListe befindet
      if(filteredDepsTempArray.some(obj => obj.name == lineName)) {
        //Wenn ja: departure zur passenden linie zuordnen, dabei wird zwischen vorwaerts und rueckwärts unterschieden
        const directionID = dep.directionId
        //richtige stelle suchen
        const existingElement = filteredDepsTempArray.find((el) => el.name === lineName);
        
        //departure entweder zu vorwaerts oder zu rueckwaerts pushen
        if (directionID == 1) {
          existingElement.vorwaerts.push(dep);
        } else {
          existingElement.rueckwaerts.push(dep);
        }

      } else {
        //wenn nein wird ein neues element erstellt mit dem aktuellen departure object
        const newElement = {
          name: lineName,
          serviceID: lineID,
          vorwaerts: [],
          rueckwaerts: []
        };
        //departure entweder zu vorwaerts oder zu rueckwaerts pushen
        if (dep.directionId == 1) {
          newElement.vorwaerts.push(dep);
        } else {
          newElement.rueckwaerts.push(dep);
        }
        //neu erstelltes element pushen.
        filteredDepsTempArray.push(newElement);
      }
    })
    
    setFilteredDepartures(filteredDepsTempArray)
  }

  useEffect(() => {
    if (filteredDepartures) {  
      setReady(true);
    }
  }, [filteredDepartures]);

  //clickhandler der zur StationDepartures führt. Die gewählte line wird übergeben und die station an der man sich befindet
  const clickHandler = (item, direction) => {
    navigation.navigate("StationDepartures", { line: item, serviceID: item.serviceID, direction: direction, stationObject: stationObject})
  };

  return (
    <View style={styles.container}>

      <PageTitle smallTitle={"Abfahrten von"} bigTitle={stationObject.station}/>

      {isReady ? (
        <View style={styles.list}>
          <DepartureList stationsData={filteredDepartures} clickHandler={clickHandler}/>
        </View>
      ) : (
        null
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.lightBackground,
    flex: 1,
    
  }, 
  list: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  }
});