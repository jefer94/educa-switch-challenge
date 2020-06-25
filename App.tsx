import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Components/HomeScreen'
import HomeScreen2 from './Components/HomeScreen2'

const Stack = createStackNavigator()

/**
 * App route.
 *
 * @returns {object} App route.
 */
function Route(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
