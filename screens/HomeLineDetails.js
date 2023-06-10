import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native';

import { getDepartureList } from '../api/departureList';



export default HomeLineDetails = ({ route, navigation }) => {

  //TODO: Die Departures müssen geupdatet werden können

  //Empfange Params von Seite davor
  const {stationObject} = route.params;

  //States
  const [isReady, setReady] = useState(false);
  const [departures, setDepartures] = useState([]);

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
      setReady(true);
    }
  }, [departures]);



  //clickhandler der zur StationDepartures führt. Die gewählte Departure wird übergeben
  const clickHandler = (item) => {
    navigation.navigate("StationDepartures", { departure: item })
  };

  return (
    <View>
        <Text> Ich bin LineDetails und gebe Infos zur Haltestelle {stationObject.station} </Text>
        {isReady ? (

          departures.departures.map((item, index) => (

            //Hier muss noch gefiltert werden, dass S1 Richtung Wedel zb nicht doppelt aufgelistet wird. --> Line ID & Richtung?
            //Mit Line ID wird dann auch im nächsten Schritt gefiltert
            //Styling fehlt
            <Button 
              key={index}
              title={`${item.line.name}\nIn ${item.timeOffset} min\nRichtung ${item.line.direction}\nLineID: ${item.line.id}`}
              onPress={() => clickHandler(item)}
              >
              
            </Button>

          ))

) : (
          null
        )}
    </View>
  )
}
