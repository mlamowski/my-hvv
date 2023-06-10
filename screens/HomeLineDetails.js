import React from 'react'
import { Text, View, Button } from 'react-native';


export default HomeLineDetails = ({ route, navigation }) => {

  const {itemID} = route.params;

  return (
    <View>
        <Text> Ich bin LineDetails und gebe Infos zur ID {itemID} </Text>
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
