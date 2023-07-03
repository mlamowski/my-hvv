import React, { useRef } from 'react';
import { TouchableOpacity, View,ScrollView, Text, StyleSheet, Dimensions, Pressable  } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default DepartureListItem = ({ myStation, clickHandler }) => {

    const scrollViewRef = useRef(null);
  
    return (
        <View //einzelnes list item
            style={styles.container} 
        >
            
            <ScrollView
                ref={scrollViewRef}
                horizontal
                
                contentContainerStyle={styles.scrollview}
            >

                <View style={styles.lineNameBox}>
                    <Text style={styles.text}>  
                        {myStation.name}
                    </Text>
                </View>

                <View style={styles.vorwaertsBox}>
                    <Pressable>
                        <Text style={styles.text}>
                                Vorwärts: 
                        </Text>

                        {myStation.vorwaerts.map((element, index) => (
                            <Text 
                                key={index} style={styles.text}>{element.timeOffset + " min "} 
                            </Text>
                        ))}

                    </Pressable>
                </View>

                <View style={styles.rueckwaertsBox}>
                    <Pressable>
                        <Text style={styles.text}>
                            Rückwärts: 
                        </Text>

                        {myStation.rueckwaerts.map((element, index) => (
                            <Text 
                                key={index}  style={styles.text}>{element.timeOffset + " min "} 
                            </Text>
                        ))}
                    </Pressable>
                </View>

            </ScrollView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: Style.standartMargin,
        //width: 500.
        //height: 100,
        //backgroundColor: Colors.accent
    },
    text: {
        color: Colors.textLight,
    },
    scrollview: {
        
        minWidth: "100%",
        justifyContent: "center",
        //marginLeft: Style.standartMargin,
        
        
    }, 
    lineNameBox: {
        backgroundColor: Colors.accent,
        //padding: 20,
        marginRight: 20,
        marginLeft: Style.standartMargin,
        minHeight: 80,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Style.listItemRadius,
    },
    vorwaertsBox: {
        backgroundColor: Colors.accent,
        padding: Style.standartPadding,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        //height: 80,
        width: 200,
        borderRadius: Style.listItemRadius,
    },
    rueckwaertsBox:{
        backgroundColor: Colors.accent,
        padding: Style.standartPadding,
        justifyContent: "center",
        alignItems: "flex-start",
        //height: 80,
        width: 200,
        borderRadius: Style.listItemRadius,
        marginRight: Style.standartMargin,
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