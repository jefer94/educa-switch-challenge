import React, { ReactElement, useState } from 'react'
import { Searchbar, TextInput } from 'react-native-paper'

/**
 * @callback OnChange
 * @param {string} query - Search query.
 */

/**
 * @typedef {object} Props
 * @property {string} placeholder - Search bar placeholder.
 * @property {OnChange} onChange - Search bar on change function.
 */

type Props = {
  readonly placeholder?: string
  readonly onChange?: (query: string) => void
}

/**
 * Search bar.
 *
 * @param {Props} param0 - Props.
 * @returns {object} Search bar.
 */
export default function SearchBar({ placeholder, onChange }: Props): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('')

  /**
   * Change search query.
   *
   * @param {string} query - New search query.
   */
  function change(query: string): void {
    setSearchQuery(query)
    if (onChange) onChange(query)
  }

  return (
    // <Searchbar
    //   placeholder={'Search' || placeholder}
    //   onChangeText={change}
    //   value={searchQuery}
    // />
    <TextInput
      label={'Search' || placeholder}
      value={searchQuery}
      onChangeText={change}
    />
  )
}
