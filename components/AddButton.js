import * as React from "react";
import { Button } from "@rneui/base";
import Colors from "../constants/Colors"
import { View, StyleSheet } from "react-native";
import Style from "../constants/Style";

export default ({ clickHandler, text }) => {
    return (
        <View style={styles.addButton}>
            <Button
                //style={styles.addButton}
                buttonStyle={{ width: 60, height: 60, borderRadius: 100, backgroundColor: Colors.accent }}
                containerStyle={{ margin: 5 }}
                linearGradientProps={null}
                iconContainerStyle={{ background: "#000" }}
                loadingProps={{ animating: true }}
                loadingStyle={{}}
                onPress={clickHandler}
                title={text}
                titleProps={{}}
                titleStyle={{ marginHorizontal: 5 }}
            />
        </View>
    ); 
}

const styles = StyleSheet.create({
    addButton: {
      //margin: Style.standartPadding,
    }
  });