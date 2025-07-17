import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const EnterScreenPin = ({navigation}) => {
    const [pin, setPin] = useState("")

    const handleSubmitVerifyPin = async ()=>{
        const app_pin = await AsyncStorage.getItem("app_pin");
        app_pin === pin ? navigation.navigate("Home") : alert("Invalid Pin entered");
    }

    return (
        <View style={styles.body}>
            <Text>Enter Pin Screen</Text>
            <TextInput
                style={styles.userInput}
                placeholder='Enter your security pin'
                value={pin}
                onChangeText={(pin) => setPin(pin)} />
        
            <Pressable onPress={handleSubmitVerifyPin} style={styles.btn}>
                <Text>Submit</Text>
            </Pressable>
        </View>
    )
}

export default EnterScreenPin

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: 50,
        padding: 20
    },
    userInput: {
        borderWidth: 2,
        padding: 5,
        borderColor: "black",
    },
    btn : {
        padding : 5,
        margin : 5,
        backgroundColor : "blue",
        width : "30%",
        display : "flex",
        flexDirection : "row",
        justifyContent : "center",
        alignSelf : "center"
    }
})