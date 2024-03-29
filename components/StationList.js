import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StationListItem from './StationListItem';
import Style from '../constants/Style';

export default StationList = ({ stationsData, clickHandler, longClickHandler }) => {

    const renderItem = ({ item }) => (
        <StationListItem
        myStation={item}
        clickHandler={clickHandler}
        longClickHandler={longClickHandler}
        />
    );

    return (
        <FlatList
            style={styles.list}
            data={stationsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id  + (Math.floor(Math.random() * 1000) + 1)}
            ListHeaderComponent={()=><View style={{height: Style.standartMargin}}></View>}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: Style.standartMargin,
        width: "100%",
        maxWidth: 500,
    }
});