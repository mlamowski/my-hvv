import { React, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default PageTitle = ({ smallTitle, bigTitle }) => {

    return (
        <View style={styles.whiteBackground}>

            <View style={styles.container}>

                <Text style={styles.smallTitle}>
                    {smallTitle}
                </Text>
                <Text style={styles.bigTitle}>
                    {bigTitle}
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
});