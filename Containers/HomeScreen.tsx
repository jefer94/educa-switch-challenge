import * as React from 'react'
import { ReactElement } from 'react'
import TitleBar from '../Components/TitleBar'
import SearchBar from '../Components/SearchBar'

// {
//   search(query: "choco/algorithm sort:stars-asc", type: REPOSITORY, first: 10) {
//     repositoryCount
//     edges {
//       node {
//         ... on Repository {
//           nameWithOwner
//           descriptionHTML
//           stargazers {
//             totalCount
//           }
//         }
//       }
//     }
//   }
// }

// {
//   repository(owner: "jefer94", name: "algorithm") {
//     collaborators {
//       nodes {
//         login
//         avatarUrl
//       }
//     }
//   }
// }

/**
 * Home screen container.
 *
 * @returns {object} Home screen container.
 */
export default function HomeScreen({ navigation }): ReactElement {
  return (
    <>
      <TitleBar
        title="Github"
        navigation={navigation}
      />
      <SearchBar placeholder="search repositories" />
    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Home2')}
    //   />
    // </View>
  )
}
