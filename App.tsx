import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { Provider as PaperProvider } from 'react-native-paper'
import HomeScreen from './Containers/HomeScreen'
import HomeScreen2 from './Containers/HomeScreen2'

const Stack = createStackNavigator()

// GET https://github.com/login/oauth/authorize

/**
 * App route.
 *
 * @returns {object} App route.
 */
function Route(): ReactElement {
  const screenOptions = {
    headerShown: false
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
