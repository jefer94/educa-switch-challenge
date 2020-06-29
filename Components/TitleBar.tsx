import React, { ReactElement } from 'react'
import { Appbar } from 'react-native-paper'

/** @module components */

/**
 * @typedef {object} TitleBarProps
 * @property {boolean} title - Title bar title.
 */

type TitleBarProps = {
  readonly title: string
}

/**
 * Title bar component.
 *
 * @param {TitleBarProps} props - Props.
 * @returns {object} Title bar component.
 */
export default function TitleBar({ title }: TitleBarProps): ReactElement {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}
