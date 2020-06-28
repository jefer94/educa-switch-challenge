import React, { ReactElement } from 'react'
import { Card } from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

/**
 * @typedef {object} Props
 * @property {string} title - Repository card title.
 * @property {number} stargazers - Repository card stargazers.
 * @property {string} descriptionHTML - Repository card stargazers.
 */

type Props = {
  readonly title: string
  readonly stargazers: number
  readonly descriptionHTML: string
}

/**
 * Repository card component.
 *
 * @param {Props} props - Props.
 * @returns {object} Repository card component.
 */
export default function RepositoryCard({ title, stargazers, descriptionHTML }: Props):
  ReactElement {
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
        {/* <Image size={64} src={icon} alt="image" /> */}
        <FontAwesomeIcon icon={faStar} style={{ color: '#808080', width: 24, height: 24 }} />
        <p style={{ verticalAlign: 'super', display: 'inline', color: '#808080', marginLeft: 8 }}>
          {stargazers}
          <code>  </code>
          {title}
        </p>
        <div
          style={{ marginTop: 0, marginBottom: 10, marginLeft: 6, color: '#808080' }}
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        />
      </div>
    </Card.Content>
  )
}
