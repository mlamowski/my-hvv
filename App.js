import React, { useEffect, useState } from 'react';
import MainNavigator from './navigation/MainBottomTabNavigator';
import { myHvvContext } from './data/myHvvContext';
import { Stations } from './data/Dummy-data';
import { getData } from './data/AppStorage';

export default function App() {

  const [appData, setAppData] = useState({
    favorites: [],
    recents: [],
  })

  //load data from AsyncStorage 
  useEffect(() => {
    getData()
      .then((returnedValue) => {
        setAppData(JSON.parse(returnedValue));
      })
      .catch(() => console.log("Got an error loading asyncData"));
  }, []);

  return (
    <myHvvContext.Provider value={[appData, setAppData]}>
      <MainNavigator/>
    </myHvvContext.Provider>
  );
}