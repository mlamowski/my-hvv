import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View, Button } from 'react-native';
import { SearchBar } from '@rneui/themed';
import { getInit } from '../api/init'
import { getCheckName } from '../api/checkName';

export default function MySearchBar() {

  const [isReady, setReady] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);

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
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />

      {isReady ? (

        stations.map((item, index) => (
          <Text key={index}>{item.combinedName}</Text>
        ))

    ) : (
      null


      
    )}

    </View>
  )
}
