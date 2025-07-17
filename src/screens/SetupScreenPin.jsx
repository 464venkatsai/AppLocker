import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetupScreenPin = ({ navigation }) => {


    const [pin, setPin] = useState("");
    const [confirmPin, setConfirmPin] = useState("");
    
    const handleSubmit = async ()=>{
        if (pin.length > 4 || pin !== confirmPin) {
            alert("Pin length is greater than 4")
            return
        }
        await AsyncStorage.setItem("app_pin",pin);
        navigation.replace("Home")

    }

    return (
        <SafeAreaView style={styles.body}>
            <Text>SetupScreenPin</Text>
            <TextInput
                style={styles.userInput}
                placeholder='Enter the pin here'
                value={pin}
                onChangeText={(pin) => setPin(pin)} />
            <TextInput
                style={styles.userInput}
                placeholder='Confirm pin here'
                value={confirmPin}
                onChangeText={(confirmPin) => setConfirmPin(confirmPin)} />
            <Button title='Save Pin' onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default SetupScreenPin

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: 50,
        padding : 20
    },
    userInput : {
        borderWidth : 2,
        padding : 5,
        borderColor : "black",
    }
})