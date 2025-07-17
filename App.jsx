import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SetupScreenPin from './src/screens/SetupScreenPin';
import EnterScreenPin from './src/screens/EnterScreenPin';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState("SetupScreenPin");
  useEffect(() => {
    const checkPin = async () => {
      const pin = AsyncStorage.getItem("app_pin");
      setInitialRoute(pin ? "EnterScreenPin" : "SetupScreenPin");
    }
    checkPin();
  }, [])

  const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name='SetupScreenPin' component={SetupScreenPin} />
        <Stack.Screen name='EnterScreenPin' component={EnterScreenPin} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: 50,
  },
})