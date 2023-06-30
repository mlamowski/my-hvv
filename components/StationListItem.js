import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';


// gets a station as a station object 
// and a clickhandler for clicking in that station
export default StationListItem = ({ myStation, clickHandler }) => {

    //console.log("station item mystation: ", myStation);

    return (
        <Pressable 
            style={styles.container} 
            onPress={() => clickHandler(myStation)}
        >
            <Text style={styles.text}>{myStation.station}</Text>
        </Pressable>
    );
    };

    const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: Style.standartPadding,
        backgroundColor: Colors.accent,
        borderRadius: 10,
        
    },
    text: {
        fontSize: 16,
        color: Colors.textLight
    },
});