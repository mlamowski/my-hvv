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
