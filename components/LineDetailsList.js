import React from 'react';
import { Text, View, FlatList } from 'react-native';
import LineDetailsListItem from './LineDetailsListItem';

export default LineDetailsList = ({ lineName, lineData, clickHandler }) => {

    lineData.forEach(element => {
        console.log("service id ist: " + element.serviceId )
    });

    const renderItem = ({ item }) => (
        <LineDetailsListItem
            myLine={item}
            clickHandler={clickHandler}
        />
    );

    return (
        <View>
            <Text>
                {lineName}
            </Text>
            <FlatList
                data={lineData}
                renderItem={renderItem}
                keyExtractor={(item) => item.serviceId}
            />
        </View>

    );
};