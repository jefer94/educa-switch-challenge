import React, { ReactElement } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon'
import { ViewStyle, StyleProp } from 'react-native'

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
 * Contact card component.
 *
 * @param {Props} props - Props.
 * @returns {object} Contact card component.
 */
export default function ContactCard({ title, icon }: Props): ReactElement {
  return (
    <Card.Title
      style={{
        backgroundColor: '#fff',
        marginTop: 3,
        marginRight: 10,
        marginBottom: 3,
        marginLeft: 10,
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
      }}
      title={title}
      // subtitle="Card Subtitle"
      left={(props) => <Avatar.Icon {...props} icon={icon} />}
      // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
    />
  )
}
