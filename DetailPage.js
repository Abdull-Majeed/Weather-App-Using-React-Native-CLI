import React, { } from "react";
import { Text, View, Button } from "react-native";

function DetailPage({navigation}) {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>Detail Page</Text>
            <Button title="Home Page" onPress={()=>navigation.navigate('Home')}/>
        </View>
    );
}

export default DetailPage;