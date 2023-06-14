import React from 'react'
import { Text, View, Button } from 'react-native';


export default HomeFavoritesList = ({ navigation }) => {
  return (
    <View>
      <Text>
        Hallo, Ich bin HomeFavoritesList!
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
