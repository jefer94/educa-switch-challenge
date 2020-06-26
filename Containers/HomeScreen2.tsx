import * as React from 'react'
import { View, Text } from 'react-native'
import { ReactElement } from 'react'

/**
 * Home screen container.
 *
 * @returns {object} Home screen container.
 */
export default function HomeScreen2(): ReactElement {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen 2</Text>
    </View>
  )
}
