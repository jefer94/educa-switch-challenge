import React, { ReactElement, useEffect, useState } from 'react'
import { NavigationProp } from '@react-navigation/native'
import { gql } from 'apollo-boost'
import TitleBar from '../Components/TitleBar'
import SearchBar from '../Components/SearchBar'
import github, { QueryRepositoriesByName } from '../graphql/github'
import RepositoryCard from '../Components/RepositoryCard'
import Repository from './Repository'

type Repository = {
  readonly node: {
    readonly nameWithOwner: string
    readonly descriptionHTML: string
    readonly stargazers: {
      readonly totalCount: number
    }
  }
}

type Repositories = {
  readonly search: {
    readonly repositoryCount: number
    readonly edges: readonly Repository[]
  }
}

type Props = {
  readonly navigation: NavigationProp<any>
}

/**
 * Search repositories container.
 *
 * @returns {object} Search repositories container.
 */
export default function SearchRepositories({ navigation }: Props): ReactElement {
  const [repositories, setRepositories] = useState<readonly Repository[]>([])
  const [query, setQuery] = useState<string>('')

  useEffect(() => {
    github.query<Repositories>({
      query: gql`${QueryRepositoriesByName(query)}`
    }).then(({ data }) => setRepositories(data.search.edges))
  }, [query])

  /**
   * On press.
   *
   * @param {string} owner - Repository owner.
   * @param {string} name - Repository name.
   * @param {string} descriptionHTML - Repository description with HTML.
   */
  function press(owner: string, name: string, descriptionHTML: string): void {
    navigation.navigate('Repository', { owner, name, descriptionHTML })
  }

  return (
    <>
      <TitleBar title="Github" />
      <div style={{ marginLeft: 8, marginRight: 8 }}>
        <SearchBar
          placeholder="search repositories"
          onBlur={(v) => setQuery(v)}
          style={{
            borderColor: '#fd4a84'
          }}
        />
      </div>
      {repositories.map((v, key) => {
        const [owner, name] = v.node.nameWithOwner.split('/')
        return (
          <div
            key={v.node.nameWithOwner}
            role="button"
            tabIndex={key + 1}
            onClick={() => press(owner, name, v.node.descriptionHTML)}
          >
            <RepositoryCard
              title={v.node.nameWithOwner}
              descriptionHTML={v.node.descriptionHTML}
              stargazers={v.node.stargazers.totalCount}
            />
          </div>
        )
      })}
    </>
  )
}
