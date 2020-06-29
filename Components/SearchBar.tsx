import React, { ReactElement, useState } from 'react'
import { TextInput } from 'react-native-paper'

/** @module components */

/**
 * @callback OnChange
 * @param {string} query - Search query.
 */

/**
 * @callback OnBlur
 */

/**
 * @typedef {object} SearchBarProps
 * @property {string} placeholder - Search bar placeholder.
 * @property {OnChange} onChange - Search bar on change function.
 * @property {OnBlur} onBlur - Search bar on blur function.
 */

type SearchBarProps = {
  readonly placeholder?: string
  readonly onChange?: (query: string) => void
  readonly onBlur?: (query: string) => void
}

/**
 * Search bar component.
 *
 * @param {SearchBarProps} Props - Props.
 * @returns {object} Search bar component.
 */
export default function SearchBar({ placeholder, onChange, onBlur }: SearchBarProps): ReactElement {
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
    if (onBlur) onBlur(searchQuery)
  }

  return (
    <TextInput
      mode="flat"
      underlineColor="#fd4a84"
      // selectionColor="#fd4a84"
      label={placeholder || 'Search'}
      value={searchQuery}
      onChangeText={change}
      onBlur={blur}
      style={{
        backgroundColor: 'transparent',
        // color: '#fd4a84',
        // borderLeft: 0,
        // borderRight: 0,
        // borderTop: 0
      }}
    />
  )
}
