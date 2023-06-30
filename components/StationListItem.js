import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from "../constants/Colors"

// gets a station as a station object 
// and a clickhandler for clicking in that station
export default StationListItem = ({ myStation, clickHandler }) => {

    //console.log("station item mystation: ", myStation);

    return (
        <TouchableOpacity 
        style={styles.container} 
        onPress={() => clickHandler(myStation)}>
        <Text style={styles.text}>{myStation.station}</Text>
        </TouchableOpacity>
    );
    };

    const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 15,
        backgroundColor: Colors.accent,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: Colors.textLight
    },
});