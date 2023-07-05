import React from 'react'
import { View, Pressable,StyleSheet, Text } from 'react-native';
import Colors from "../constants/Colors"
import Style from '../constants/Style';
import { Ionicons } from "@expo/vector-icons";

export default ButtonQRCodeScanner = ({clickHandler}) => {

  return (
    <View style={styles.container}>
        <Pressable 
            
          onPress={() => clickHandler()}
          unstable_pressDelay={50}
          style={ ({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.5 : 1 },
          ]}
        >

          <Ionicons name="qr-code-outline" size={32} color={Colors.darkGray}></Ionicons>

        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingRight: 8,
    backgroundColor: "white",
    height: 74,
    
      
  },
  button: {
    backgroundColor: Colors.lightGray,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
  },
  text: {
    fontSize: 16,
    color: Colors.textDark,
  },
});

