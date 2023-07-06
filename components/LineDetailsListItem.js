import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default LineDetailsListItem = ({ myLine, clickHandler }) => {

    //console.log("station item mystation: ", myStation);
    //console.log("myline");
    //console.log(myLine)

    //function to calc the time when something arrives from the delay is has
    const getDapartureTime = ( minutesToAdd, secondsToAdd ) => {
        now = new Date();
        dateObject = new Date( now.getTime() + (minutesToAdd * 60000) + (secondsToAdd * 1000) );
        const formattedTime = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        return formattedTime;
    }

    //calculate departure
    departure = "";
    if (myLine.delay != undefined && myLine.delay > 0) {
        departure = myLine.timeOffset + " + " + (myLine.delay/60)
        departure = getDapartureTime(myLine.timeOffset, myLine.delay);
    } else {
        departure = myLine.timeOffset
        departure = getDapartureTime(myLine.timeOffset, 0);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{departure + " min - Bis " + myLine.line.direction}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //padding: Style.standartPadding,
        marginBottom: Style.standartMargin,
    },
    text: {
        fontSize: Style.fontSizeText,
        fontFamily: Style.fontFamilyRegular,
        color: Colors.textLight

    },
});