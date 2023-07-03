import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import DepartureListItem from './DepartureListItem';
import Style from '../constants/Style';

export default DepartureList = ({ stationsData, clickHandler }) => {

    stationsData.forEach(element => {
        console.log(element.name)
        console.log(element.serviceId);
    });

    const renderItem = ({ item }) => (
        <DepartureListItem
            myStation={item}
            clickHandler={clickHandler}
        />
    );



    return (
        <View style={styles.container}>
            <FlatList
                data={stationsData}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={()=><View style={{height: Style.standartMargin}}></View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {    
        height: "100%",
        maxWidth: 600,
        width: "100%",
        flex: 1,
        paddingHorizontal: Style.standartMargin
    }
});