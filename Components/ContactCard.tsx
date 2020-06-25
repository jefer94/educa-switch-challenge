import React, { ReactElement } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon'

/**
 * @typedef {object} Props
 * @property {string} title - Contact card title.
 * @property {string} icon - Contact card icon.
 */

type Props = {
  readonly title: string
  readonly icon: IconSource
}

/**
 * Contact card.
 *
 * @param {Props} props - Props.
 * @returns {object} Contact card.
 */
export default function ContactCard({ title, icon }: Props): ReactElement {
  return (
    <Card.Title
      title={title}
      // subtitle="Card Subtitle"
      left={(props) => <Avatar.Icon {...props} icon={icon} />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
    />
  )
}
