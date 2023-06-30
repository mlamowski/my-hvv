/*
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';
import Crypto from 'crypto-browserify';
import { getInit } from './api/init';
import { getCheckName } from './api/checkName';



export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);



 //t3kabWOB7OTkhj4ZN4x0z+Lb+d0=

 const letsGo = async () => { 
  setData(await getInit())
  setData2(await getCheckName("daimler"))

  setLoading(false)//
  console.log(data2);


 }


useEffect(() => {
  letsGo();
  
}, []);

  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {isLoading ? (
      <ActivityIndicator />
    ) : (
      <Text>
        {data2.returnCode} {"\n"}
        {data2.results[0].combinedName } {"\n"}
        {data.returnCode} {"\n"}
        {data.dataId} {"\n"}
        {data.beginOfService} {"\n"}
        {data.endOfService} {"\n"}
        {data.id} {"\n"}
        {data.buildDate} {"\n"}
        {data.buildTime} {"\n"}
        {data.buildText} {"\n"}
        {data.version} {"\n"}
      </Text>


      
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

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
