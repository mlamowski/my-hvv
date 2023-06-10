import React from 'react'
import { Text, View, Button } from 'react-native';


export default FavoritesEdit = ({ route, navigation }) => {

  console.log("on fav edit screen load");

  const {itemID} = route.params;

  return (
    <View>
        <Text> Ich bin FavEdit für Item mit id: {itemID} </Text>
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