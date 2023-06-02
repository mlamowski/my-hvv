import React from 'react'
import { Text, View, Button } from 'react-native';


export default HomeRecentList = ({ navigation }) => {
  return (
    <View>
      <Text>
        Hallo, Ich bin HomeRecentList!
      </Text>
      
      <Button
            title="To StationDep"
            onPress={() => navigation.navigate("StationDepartures") }
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
