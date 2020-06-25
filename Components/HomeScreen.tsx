import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { ReactElement } from 'react'
import TitleBar from './TitleBar'
import SearchBar from './SearchBar'

/**
 * Home screen components.
 *
 * @returns {object} Home screen components.
 */
export default function HomeScreen({ navigation }): ReactElement {
  return (
    // <></>
    <>
      <TitleBar
        title="Home"
        navigation={navigation}
      />
      <SearchBar />
    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Home2')}
    //   />
    // </View>
  )
}
