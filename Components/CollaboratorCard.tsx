import React, { ReactElement } from 'react'
import { Card } from 'react-native-paper'
import Image from './Image'

/** @module components */

/**
 * @typedef {object} CollaboratorCardProps
 * @property {string} title - Collaborator card title.
 * @property {string} icon - Collaborator card icon.
 */

type CollaboratorCardProps = {
  readonly title: string
  readonly icon: string
  // readonly icon: ImageSourcePropType
}

/**
 * Collaborator card component.
 *
 * @param {CollaboratorCardProps} props - Props.
 * @returns {object} Collaborator card component.
 */
export default function CollaboratorCard({ title, icon }: CollaboratorCardProps): ReactElement {
  return (
    <Card.Content
      style={{
        backgroundColor: '#fff',
        marginTop: 3,
        marginRight: 10,
        marginBottom: 3,
        marginLeft: 10,
        borderRadius: 3,
        // paddingLeft: 4,
        padding: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
      }}
    >
      <div style={{ display: 'inline', padding: 8, marginBottom: -4 }}>
        <Image size={64} src={icon} alt="image" />
        <p style={{ display: 'inline', verticalAlign: 'top', color: '#808080', marginLeft: 8 }}>{title}</p>
      </div>
    </Card.Content>
  )
}
