import ApolloClient from 'apollo-boost'

const token = ''

export default new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    // const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

/**
 * Query repositories by name.
 *
 * @param {string} repository - Repository name.
 * @returns {string} Query repositories by name.
 */
export function QueryRepositoriesByName(repository: string): string {
  return `
    {
      search(query: "${repository} sort:stars-asc", type: REPOSITORY, first: 100) {
        repositoryCount
        edges {
          node {
            ... on Repository {
              nameWithOwner
              descriptionHTML
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  `
}

/**
 * Query repository collaborators.
 *
 * @param {string} owner - Repository owner.
 * @param {string} name - Repository name.
 * @returns {string} Query repository collaborators.
 */
export function QueryRepositoryCollaborators(owner: string, name: string): string {
  return `
    {
      repository(owner: "${owner}", name: "${name}") {
        collaborators {
          nodes {
            login
            avatarUrl
          }
        }
      }
    }
  `
}
