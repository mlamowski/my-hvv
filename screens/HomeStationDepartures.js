import React from 'react'
import { Text, View, Button } from 'react-native';


export default HomeStationDepartures = ({ navigation }) => {
  return (
    <View>
        <Text> Ich bin StationDepartures </Text>
        <Button
            title="To HomeScreen"
            onPress={() => navigation.navigate("HomeScreen") }
        />
        <Button
            title="To LineDet"
            onPress={() => navigation.navigate("LineDetails") }
        />
        <Button
            title="Go Back"
            onPress={() => navigation.goBack() }
        />
    </View>
  )
}
