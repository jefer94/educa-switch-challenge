import * as React from 'react'
import { ReactElement } from 'react'
import TitleBar from '../Components/TitleBar'
import ContactCard from '../Components/ContactCard'

/**
 * Repository container.
 *
 * @returns {object} Repository container.
 */
export default function Repository({ navigation }): ReactElement {
  return (
    <>
      <TitleBar
        title="Github"
        navigation={navigation}
      />
      <h2 style={{ marginTop: 10, marginBottom: 10, marginLeft: 6 }}>choco/algorithm</h2>
      <p style={{ marginTop: 0, marginBottom: 10, marginLeft: 6 }}>Algorithm monorepo</p>
      <ContactCard title="hitler" icon="folder" />
      <ContactCard title="hitler" icon="folder" />
    </>
  )
}
