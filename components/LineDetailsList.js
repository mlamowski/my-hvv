import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import LineDetailsListItem from './LineDetailsListItem';
import Style from '../constants/Style';
import Colors from '../constants/Colors';

export default LineDetailsList = ({ lineName, lineData, clickHandler }) => {

    //sort departures by time
    lineData.sort((a, b) => (a.timeOffset + (a.delay / 60)) - (b.timeOffset + (a.delay / 60)));

    const renderItem = ({ item }) => (
        <LineDetailsListItem
            myLine={item}
            clickHandler={clickHandler}
        />
    );

    return (

        <View style={styles.container}>
            
            <View style={styles.innerContainer}>

                <FlatList
                    style={styles.list}
                    data={lineData}
                    renderItem={renderItem}
                    keyExtractor={
                        (item) => 
                        item.serviceId == undefined ? (
                            (Math.floor(Math.random() * 1000000000) + 1)
                          ) : (
                            item.serviceId + (Math.floor(Math.random() * 1000000000) + 1)
                        ) 
                    }
                />

            </View>

        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        
        width: "100%",
        maxWidth: 500,
        //height: "100%",
        
        padding: Style.standartMargin,
        
    },
    innerContainer: {
        borderRadius: Style.listItemRadius,
        backgroundColor: Colors.accent,
        width: "100%",
        //height: "100%",
        padding: Style.standartPadding
    },
    list: {
        
    }
});

/*
<FlatList
            style={styles.list}
            data={lineData}
            renderItem={renderItem}
            keyExtractor={(item) => item.serviceId + (Math.floor(Math.random() * 1000) + 1)}
/>
*/