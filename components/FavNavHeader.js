import { React, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default FavNavHeader = ({ title, leftButton, style }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
};

const styles = StyleSheet.create({
    whiteBackground: {
        backgroundColor: Colors.textLight,
        width: "100%",
        alignItems:"center",
    },
    containerlalal: {
        maxWidth: 550,
        width: "100%",
        paddingHorizontal: Style.standartMargin,
        paddingBottom: Style.standartMargin
    },
    smallTitle: {
        fontSize: Style.fontSizeText,
        fontFamily: Style.fontFamilyRegular,
        color: Colors.textDark
    },
    bigTitle: {
        fontSize: Style.fontSizeHeader,
        fontFamily: Style.fontFamilyRegular,
        color: Colors.textDark,
        //lineHeight: 5,
    },
    container: {
        backgroundColor: 'lightblue',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    },

});