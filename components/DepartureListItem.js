import React, { useRef } from 'react';
import { TouchableOpacity, View,ScrollView, Text, StyleSheet, Dimensions  } from 'react-native';
import Colors from "../constants/Colors"

export default DepartureListItem = ({ myStation, clickHandler }) => {

    const scrollViewRef = useRef(null);

    const handleLayout = () => {
        const screenWidth = Dimensions.get('window').width;
        scrollViewRef.current.scrollTo({ x: screenWidth, animated: false });
    };
  

    return (
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
            <TouchableOpacity style={{ width: Dimensions.get('window').width }}>
                <Text style={styles.text}>
                        Vorwärts: 
                </Text >
                {myStation.vorwaerts.map((element, index) => (
                <Text key={index} style={styles.text}>{element.timeOffset + " min "} 
                </Text>
                ))}
            </TouchableOpacity>
            <TouchableOpacity style={{ width: Dimensions.get('window').width }}>
                <Text style={styles.text}>
                    Rückwärts: 
                </Text>
                    {myStation.rueckwaerts.map((element, index) => (
                    <Text key={index}  style={styles.text}>{element.timeOffset + " min "} 
                </Text>
                ))}
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        backgroundColor: Colors.accent,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: Colors.textLight,
    },
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