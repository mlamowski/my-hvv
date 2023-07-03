import React from 'react'
import { View, Pressable,StyleSheet, Text } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';

export default ButtonQRCodeScanner = ({clickHandler}) => {

  return (
    <View>
        <Pressable 
            
            onPress={() => clickHandler()}
            unstable_pressDelay={50}
            style={ ({ pressed }) => [
              styles.container,
              { opacity: pressed ? 0.5 : 1 },
            ]}
        >
            <Text style={styles.text}>Scan!</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: Style.standartPadding,
        marginBottom: Style.standartMargin,
        backgroundColor: Colors.accent,
        borderRadius: Style.listItemRadius,
        
    },
    text: {
        fontSize: 16,
        color: Colors.textLight
    },
});

