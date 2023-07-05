import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StationListItem from './StationListItem';
import Style from '../constants/Style';

export default StationList = ({ stationsData, clickHandler }) => {

    const renderItem = ({ item }) => (
        <StationListItem
        myStation={item}
        clickHandler={clickHandler}
        />
    );

    return (
        <FlatList
            style={styles.list}
            data={stationsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id  + (Math.floor(Math.random() * 1000) + 1)}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        //flex: 1,
        padding: Style.standartMargin,
        width: "100%",
        
        maxWidth: 500,
    }
  });