import React from 'react';
import { View, FlatList } from 'react-native';
import StationListItem from './StationListItem';

export default StationList = ({ stationsData, clickHandler }) => {

    const renderItem = ({ item }) => (
        <StationListItem
        myStation={item}
        clickHandler={clickHandler}
        />
    );

    return (
        <FlatList
        data={stationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    );
};