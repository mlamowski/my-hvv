import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default LineDetailsListItem = ({ myLine, clickHandler }) => {

    //console.log("station item mystation: ", myStation);

    console.log(myLine)
    return (
        <TouchableOpacity 
        style={styles.container} >
            <Text>
                {myLine.timeOffset + " min,  serviceID: " + myLine.serviceId + (Math.floor(Math.random() * 1000) + 1)}
            </Text>
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
        fontSize: Style.fontSizeText,
        color: Colors.textLight

    },
});