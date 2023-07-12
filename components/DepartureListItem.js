import React, { useRef } from 'react';
import { View,ScrollView, Text, StyleSheet, Dimensions, Pressable  } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default DepartureListItem = ({ myStation, clickHandler }) => {

    //sort arrays by wann die kommen
    myStation.rueckwaerts.sort((a, b) => (a.timeOffset + (a.delay / 60)) - (b.timeOffset + (a.delay / 60)));
    myStation.vorwaerts.sort((a, b) => (a.timeOffset + (a.delay / 60)) - (b.timeOffset + (a.delay / 60)));
    

    //make new array with calculated departure times 
    vorwaerts = [];
    rueckwaerts = [];

    myStation.rueckwaerts.forEach(element => {
        
        if (element.delay != undefined && element.delay > 0) {
            rueckwaerts.push(element.timeOffset + (element.delay/60) + " min | Bis " + element.line.direction)
        } else {
            rueckwaerts.push(element.timeOffset + " min | Bis " + element.line.direction)
        }

    });

    myStation.vorwaerts.forEach(element => {
        
        if (element.delay != undefined && element.delay > 0) {
            vorwaerts.push(element.timeOffset + (element.delay/60) + " min | Bis " + element.line.direction)
        } else {
            vorwaerts.push(element.timeOffset + " min | Bis " + element.line.direction)
        }

    });




    return (
        <View //einzelnes list item
            style={styles.container} 
        >

            <View style={styles.lineNameBox}>
                <Text style={styles.text}>  
                    {myStation.name}
                </Text>
            </View>
            
            <View style={styles.scrollview}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    //pagingEnabled
                >

                    {vorwaerts.length > 0 ? (
                        <View>
                            <Pressable 
                                onPress={() => clickHandler(myStation, 1)}
                                style={styles.vorwaertsBox}
                            >
                                <Text style={[styles.text, styles.directionText]}>
                                        Vorwärts: 
                                </Text>

                                {vorwaerts.map((element, index) => (
                                    <Text 
                                        key={index} style={styles.text}>{element} 
                                    </Text>
                                ))}

                            </Pressable>
                        </View>
                    ) : (
                        null
                    )}


                    {rueckwaerts.length > 0 ? (
                        <View >
                            <Pressable
                                onPress={() => clickHandler(myStation, 6)}
                                style={styles.rueckwaertsBox}
                            >
                                <Text style={[styles.text, styles.directionText]}>
                                    Rückwärts: 
                                </Text>

                                {rueckwaerts.map((element, index) => (
                                    <Text 
                                        key={index}  style={styles.text}>{element}
                                    </Text>
                                ))}
                            </Pressable>
                        </View>
                    ) : (
                        null
                    )}

                </ScrollView>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        marginBottom: Style.standartMargin,
        //paddingHorizontal: Style.standartMargin
        
        
    },
    directionText: {
        fontFamily: Style.fontFamilyBold,
    },
    text: {
        color: Colors.textLight,
        
    },
    lineNameBox: {
        backgroundColor: Colors.accent,
        padding: 20,
        marginRight: Style.standartMargin,
        minHeight: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Style.listItemRadius,
    },
    scrollview: {
        flex: 1,
        backgroundColor: Colors.accent,
        borderRadius: Style.listItemRadius,
    }, 
    vorwaertsBox: {
        padding: Style.standartPadding,
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        minWidth: 200,
        //height: "100%"
    },
    rueckwaertsBox:{
        padding: Style.standartPadding,
        //justifyContent: "flex-start",
        //alignItems: "flex-start",
        minWidth: 200,
        //height: "100%",
    }
});

{/*

        <View 
        style={styles.container} >
        <Text style={styles.text}>
            {myStation.name}
        </Text>
        <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            onLayout={handleLayout}
            >
            <View style={{ width: Dimensions.get('window').width }}>
                <Text style={styles.text}>
                        Vorwärts: 
                </Text >
                {myStation.vorwaerts.map((element, index) => (
                <Text key={index} style={styles.text}>{element.timeOffset + " min "} 
                </Text>
                ))}
            </View>
            <View style={{ width: Dimensions.get('window').width }}>
                <Text style={styles.text}>
                    Rückwärts: 
                </Text>
                    {myStation.rueckwaerts.map((element, index) => (
                    <Text key={index}  style={styles.text}>{element.timeOffset + " min "} 
                </Text>
                ))}
            </View>
        </ScrollView>
        </View>


*/}