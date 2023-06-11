import React from 'react';
import { View, FlatList } from 'react-native';
import DepartureListItem from './DepartureListItem';

export default DepartureList = ({ stationsData, clickHandler }) => {

    const renderItem = ({ item }) => (
        <DepartureListItem
        myStation={item}
        clickHandler={clickHandler}
        />
    );

    return (
        <FlatList
        data={stationsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.serviceId}
        />
    );
};