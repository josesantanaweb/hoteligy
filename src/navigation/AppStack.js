import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  )
}

export default AuthStack
