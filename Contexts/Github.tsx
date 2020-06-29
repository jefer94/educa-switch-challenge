import React, { createContext, ReactElement, useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session'
import axios from 'axios'
import { Platform } from 'react-native'
import { githubId, githubSecret, githubTokenProvider } from '../env'

/** @module contexts */
/** @todo Logout from Github. */

WebBrowser.maybeCompleteAuthSession()

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: `https://github.com/settings/connections/applications/${githubId}`
}

export const GithubContext = createContext({ token: '', ready: false })

/**
 * @constant
 * @type {string}
 * @default
 */
export const githubLocalStorageKey = '__G_C_T__'

type TokenResponse = {
  // eslint-disable-next-line camelcase
  readonly access_token: string
}

/**
 * @typedef {object} GithubContextProviderProps
 * @property {object} children - Github context children.
 */

type GithubContextProviderProps = {
  readonly children: ReactElement
}

/**
 * Github context.
 *
 * @param {GithubContextProviderProps} Props - Props.
 * @returns {object} Github context.
 */
export function GithubContextProvider({ children }: GithubContextProviderProps): ReactElement {
  const [token, setToken] = useState<string>(localStorage.getItem(githubLocalStorageKey) || '')
  const [ready, setReady] = useState<boolean>(false)
  const redirectUri = makeRedirectUri({
    path: 'auth',
    // For usage in bare and standalone
    native: 'educa.switch://redirect'
  })
  const [request, response, promptAsync] = useAuthRequest(
    {
      // responseType: ResponseType.Token,
      clientId: githubId,
      scopes: ['identity', 'repo', 'public_repo', 'admin:org'],
      extraParams: {
        // Use `popup` on web for a better experience
        display: Platform.select({ web: 'popup' }),
        // Optionally you can use this to rerequest declined permissions
        auth_type: 'rerequest'
      },
      // For usage in managed apps using the proxy
      redirectUri
    },
    discovery
  )

  useEffect(() => {
    if (response?.type === 'success') {
      const { code, state } = response.params
      axios.post<TokenResponse>(githubTokenProvider, {
        githubId,
        githubSecret,
        redirectUri,
        code,
        state
      }).then(({ data }) => {
        console.log('response', data.access_token)
        setToken(data.access_token)
        localStorage.setItem(githubLocalStorageKey, data.access_token)
        setReady(true)
      })
    }
  }, [response])

  useEffect(() => {
    if (request && !token) promptAsync()
  }, [promptAsync, request, token])

  return (
    <GithubContext.Provider value={{ token, ready }}>
      {children}
    </GithubContext.Provider>
  )
}

export const GithubContextConsumer = GithubContext.Consumer
