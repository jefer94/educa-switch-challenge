import React, { ReactElement } from 'react'
import { Appbar } from 'react-native-paper'

/**
 * @typedef {object} Props
 * @property {boolean} title - Title bar title.
 * @property {object} navigation - React navigation.
 */

type Props = {
  readonly title: string
  readonly navigation: string
}

/**
 * Title bar component.
 *
 * @param {Props} props - Props.
 * @returns {object} Title bar component.
 */
export default function TitleBar({ title, navigation }: Props): ReactElement {
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction
        onPress={this._goBack}
      /> */}
      <Appbar.Content
        title={title}
        // subtitle="Subtitle"
      />
      {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={this._handleMore} /> */}
    </Appbar.Header>
  )
}
