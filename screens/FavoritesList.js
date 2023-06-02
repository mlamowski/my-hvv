import React from 'react'
import { Text, View, Button } from 'react-native';


export default FavoritesList = ({ navigation }) => {
  return (
    <View>
        <Text> Ich bin FavList </Text>
        <Button
            title="To FavEdit"
            onPress={() => navigation.navigate("FavEdit") }
        />
        <Button
            title="Go Back"
            onPress={() => navigation.goBack() }
        />
    </View>
  )
}
