import React from 'react'
import { Text, View, Button } from 'react-native';


export default HomeStationDepartures = ({ route, navigation }) => {

  const {departure} = route.params;

  return (
    <View>
        <Text> Ich bin StationDepartures und zeige dir Infos über die {departure.line.name} in Richtung {departure.line.direction} </Text>
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
