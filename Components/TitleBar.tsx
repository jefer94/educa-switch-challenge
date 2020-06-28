import React, { ReactElement } from 'react'
import { Appbar } from 'react-native-paper'

/**
 * @typedef {object} Props
 * @property {boolean} title - Title bar title.
 */

type Props = {
  readonly title: string
}

/**
 * Title bar component.
 *
 * @param {Props} props - Props.
 * @returns {object} Title bar component.
 */
export default function TitleBar({ title }: Props): ReactElement {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}
