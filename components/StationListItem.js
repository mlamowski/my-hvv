import { React, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';
import {  } from 'react';


// gets a station as a station object 
// and a clickhandler for clicking in that station
export default StationListItem = ({ myStation, clickHandler }) => {

    return (
        <Pressable 
            onPress={() => clickHandler(myStation)}
            unstable_pressDelay={50}
            style={ ({ pressed }) => [
              styles.container,
              { opacity: pressed ? 0.5 : 1 },
            ]}
        >
            <Text style={styles.text}>{myStation.station}</Text>
        </Pressable>
    );

};

const styles = StyleSheet.create({
    container: {
        padding: Style.standartPadding,
        marginBottom: Style.standartMargin,
        backgroundColor: Colors.accent,
        borderRadius: Style.listItemRadius,
        
    },
    text: {
        fontFamily: Style.fontFamilyRegular,
        fontSize: Style.fontSizeText,
        color: Colors.textLight,
        

    },
});