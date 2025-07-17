import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.body}>
            <Text>App Locker</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: 50,
        padding : 20
    },
})