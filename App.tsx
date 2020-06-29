import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchRepositories from './Containers/SearchRepositories'
import Repository from './Containers/Repository'
import { GithubContextProvider } from './Contexts/Github'
import { host } from './env'

/** @module main */

const Stack = createStackNavigator()

// GET https://github.com/login/oauth/authorize

/**
 * App route.
 *
 * @returns {object} App route.
 */
function Route(): ReactElement {
  const linking = {
    prefixes: [host]
  }

  const screenOptions = {
    headerShown: false
  }

  return (
    <GithubContextProvider>
      <NavigationContainer linking={linking} fallback="Loading...">
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="SearchRepositories" component={SearchRepositories} />
          <Stack.Screen name="Repository" component={Repository} />
        </Stack.Navigator>
      </NavigationContainer>
    </GithubContextProvider>
  )
}

export default Route
