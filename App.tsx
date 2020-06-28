import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as WebBrowser from 'expo-web-browser'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
// import { Provider as PaperProvider } from 'react-native-paper'
import SearchRepositories from './Containers/SearchRepositories'
import Repository from './Containers/Repository'
import { env, loadEnv } from './lib/env'

loadEnv()

WebBrowser.maybeCompleteAuthSession()

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>'
}

const token = 'd82c2510a97b848999844c599da16099877d221a'

const Stack = createStackNavigator()

// GET https://github.com/login/oauth/authorize

/**
 * App route.
 *
 * @returns {object} App route.
 */
function Route(): ReactElement {
  console.log('bb', env('HOST'))

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: env('GITHUB_ID'),
      scopes: ['identity'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'educa.switch://redirect'
      })
    },
    discovery
  )
  console.log('aa', request)
  console.log('aa', response)
  console.log('aa', promptAsync)

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
    }
  }, [response])

  // React.useEffect(() => {
  //   if (request) console.log('aa', promptAsync())
  // }, [request])

  const linking = {
    prefixes: [env('HOST')]
  }

  const screenOptions = {
    headerShown: false
  }

  return (
    <NavigationContainer linking={linking} fallback="Loading...">
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="SearchRepositories" component={SearchRepositories} />
        <Stack.Screen name="Repository" component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
