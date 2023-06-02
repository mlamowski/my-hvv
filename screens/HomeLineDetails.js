import React from 'react'
import { Text, View, Button } from 'react-native';


export default HomeLineDetails = ({ navigation }) => {
  return (
    <View>
        <Text> Ich bin LineDetails </Text>
        <Button
            title="To HomeScreen"
            onPress={() => navigation.navigate("HomeScreen") }
        />
        <Button
            title="To StationDep"
            onPress={() => navigation.navigate("StationDepartures") }
        />
        <Button
            title="Go Back"
            onPress={() => navigation.goBack() }
        />
    </View>
  )
}
