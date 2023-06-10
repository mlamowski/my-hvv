import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from "../constants/Colors"

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
        margin: 10,
        backgroundColor: Colors.accent,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: Colors.textLight
    },
});