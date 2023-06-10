import React from 'react';
import { View, FlatList } from 'react-native';
import StationListItem from './StationListItem';

export default StationList = ({ stationsData, clickHandler }) => {

  const renderItem = ({ item }) => (
    <StationListItem
      title={item.station}
      id={item.id}
      clickHandler={clickHandler}
    />
  );

  const handleItemClick = (itemId) => {
    // Handle the item click event
    console.log('Item clicked:', itemId);

  };

  return (
    <FlatList
      data={stationsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};