import React from 'react'
import { Text, View, Button } from 'react-native';


export default FavoritesEdit = ({ navigation }) => {
  return (
    <View>
        <Text> Ich bin FavEdit </Text>
        <Button
            title="To FavList"
            onPress={() => navigation.navigate("FavList") }
        />
        <Button
            title="Go Back"
            onPress={() => navigation.goBack() }
        />
    </View>
  )
}
