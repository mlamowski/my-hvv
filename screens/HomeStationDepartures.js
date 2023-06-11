import React, { useEffect, useState } from 'react'
import { Text, View, Button } from 'react-native';
import { getFilteredDepartureList } from '../api/departureList';
import { getCheckName } from '../api/checkName';
import DepartureList from '../components/DepartureList';


export default HomeStationDepartures = ({ route, navigation }) => {

  //TODOS
  //gibt probleme, wegen der endhaltestelle -->  verbindungen fehlen. Bsp: Als Endhaltestelle wedel gibt nur Verbindungen bis wedel, nicht aber bis blanke! 

  const {departure, stationObject} = route.params;

  //States
  const [isReady, setReady] = useState(false);
  const [directionName, setDirectionName] = useState([]);
  const [directionData, setDirectionData] = useState([]);
  const [filteredDepartures, setFilteredDepartures] = useState([]);


  const clickHandler = (item) => {
    //navigation.navigate("StationDepartures", { departure: item, stationObject: stationObject})
  };

  //Wird ausgeführt, sobald screen geladen ist
  useEffect(() => {
    onScreenLoad();
  }, [])

  //Zielrichtung muss gesplittet werden, da sonst strings wie Poppelbüttel / Airport probleme machen. Neue Strings dann als Array setzen
  const onScreenLoad = async() => {
    let text = departure.line.direction
    setDirectionName(text.split("/"))
  }

  //Sobald die Daten im Array gespeichertn sind directionDataFunc aufrufen --> dauert halt bissl immer ....
  useEffect(() => {
    if (directionName) {
        directionDataFunc()
    }
  }, [directionName]);

  //Den Namen der Zielrichtung checken
  //später ggf noch sagen if error: next index
  const directionDataFunc = async() => {
    setDirectionData(await getCheckName(directionName[0]))
  }
  
  //wenn daten da sind, filteresDepList func aufrufen
  useEffect(() => {
    if (directionData.results) {
        filteresDepList();
    }
  }, [directionData]);

  //jetzt wird die gefilterte liste von der api geholt und gesetzt
  const filteresDepList = async() => {
    setFilteredDepartures(await getFilteredDepartureList(stationObject.stationObject, departure.line.id, directionData.results[0].id))
  }

  //Wird ausgeführt, sobald der State filteredDepartures gesetzt wurde
  useEffect(() => {
    if (filteredDepartures.departures) {  
      setReady(true);
    }
  }, [filteredDepartures]);

  return (
    <View>
        {isReady ? (

          <DepartureList stationsData={filteredDepartures.departures} clickHandler={clickHandler}/>

        ) : (
          null
        )}
    </View>
  )
}




  {/*

    filteredDepartures.departures.map((item, index) => (

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
    */}

      {/*
      <Text> Ich bin StationDepartures und zeige dir Infos über die {departure.line.name} in Richtung {departure.line.direction} </Text>
      
      <Button
          title="To HomeScreen"
          onPress={() => navigation.navigate("HomeScreen") }
      />
      <Button
          title="To LineDet"
          onPress={() => navigation.navigate("LineDetails") }
      />
      <Button
          title="Go Back"
          onPress={() => navigation.goBack() }
      />
      */}