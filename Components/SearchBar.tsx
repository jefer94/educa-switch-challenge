import React, { ReactElement, useState } from 'react'
import { Searchbar, TextInput } from 'react-native-paper'

/**
 * @callback OnChange
 * @param {string} query - Search query.
 */

/**
 * @callback OnBlur
 */

/**
 * @typedef {object} Props
 * @property {string} placeholder - Search bar placeholder.
 * @property {OnChange} onChange - Search bar on change function.
 * @property {OnBlur} onBlur - Search bar on blur function.
 */

type Props = {
  readonly placeholder?: string
  readonly onChange?: (query: string) => void
  readonly onBlur?: () => void
}

/**
 * Search bar component.
 *
 * @param {Props} param0 - Props.
 * @returns {object} Search bar component.
 */
export default function SearchBar({ placeholder, onChange, onBlur }: Props): ReactElement {
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

  /** On search blur. */
  function blur(): void {
    if (onBlur) onBlur()
  }

  return (
    <TextInput
      mode="flat"
      label={placeholder || 'Search'}
      value={searchQuery}
      onChangeText={change}
      onBlur={blur}
      style={{
        outline: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0
      }}
    />
  )
}
