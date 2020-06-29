import React, { ReactElement, useEffect, useState } from 'react'
import { gql } from 'apollo-boost'
import { RouteProp } from '@react-navigation/native'
import TitleBar from '../Components/TitleBar'
import CollaboratorCard from '../Components/CollaboratorCard'
import github, { QueryRepositoryCollaborators } from '../graphql/github'

type Node = {
  readonly login: string
  readonly avatarUrl: string
}

type Repository = {
  readonly repository: {
    readonly collaborators: {
      readonly nodes: readonly Node[]
    }
  }
}

/**
 * @typedef {object} Props
 * @property {object} route - Route prop.
 */

type Params = {
  readonly owner: string
  readonly name: string
  readonly descriptionHTML: string
}

type ParamList = Record<string, Params>

type Props = {
  readonly route: RouteProp<ParamList, any>
}

/**
 * Repository container.
 *
 * @param {Props} props - Props.
 * @returns {object} Repository container.
 */
export default function Repository({ route }: Props): ReactElement {
  const { owner, name, descriptionHTML } = route.params
  const [collaborators, setCollaborators] = useState<readonly Node[]>([])

  useEffect(() => {
    github.query<Repository>({
      query: gql`${QueryRepositoryCollaborators(owner, name)}`
    }).then(({ data }) => {
      setCollaborators(data.repository.collaborators.nodes)
    })
  })

  return (
    <>
      <TitleBar title="Github" />
      <h2 style={{ marginTop: 10, marginBottom: 10, marginLeft: 6 }}>
        {owner}
        /
        {name}
      </h2>
      <div
        style={{ marginTop: 0, marginBottom: 10, marginLeft: 6 }}
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      />

      {collaborators.map((v) =>
        <CollaboratorCard title={v.login} icon={v.avatarUrl} key={`${owner}_${name}_${v.login}`} />)}
    </>
  )
}
