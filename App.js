import React, { useState } from 'react';
import MainNavigator from './navigation/MainBottomTabNavigator';
import { myHvvContext } from './data/myHvvContext';
import { Stations } from './data/Dummy-data';

export default function App() {
  const [appData, setAppData] = useState({
    favorites: Stations,
    recents: [],
  })
  return (
    <myHvvContext.Provider value={[appData, setAppData]}>
      <MainNavigator/>
    </myHvvContext.Provider>
  );
}