import { React, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';


// gets a station as a station object 
// and a clickhandler for clicking in that station
export default PageTitle = ({ title }) => {

    return (
        <View style={styles.whiteBackground}>
            <View style={styles.container}>
                <Text>
                    {title}
                </Text>
            </View>
        </View>
    );
};

    const styles = StyleSheet.create({
        whiteBackground: {
            backgroundColor: Colors.textLight,
            width: "100%",
            alignItems:"center",
        },
        container: {
            maxWidth: 550,
            width: "100%",
        },
        text: {
            fontSize: 16,
            color: Colors.textLight
        },
});