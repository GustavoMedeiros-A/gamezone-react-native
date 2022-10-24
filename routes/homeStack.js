import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import About from '../screens/about'
import ReviewDetails from '../screens/reviewDetails'

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen 
      name='GameZone' 
      component={Home}  
      options={{title: 'GameZone'}}
      headerStyle={{backgroundColor: "#eee"}}/>

      <Stack.Screen name='About' 
      component={About} 
      headerStyle={{backgroundColor: "#eee"}}/>

      <Stack.Screen name='reviewDetails' 
      component={ReviewDetails} 
      headerStyle={{backgroundColor: "#eee"}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}