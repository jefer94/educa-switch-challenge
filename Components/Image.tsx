import React, { ReactElement } from 'react'

/** @module components */

/**
 * @typedef {object} ImageProps
 * @property {number} size - Image size.
 * @property {string} src - Image src.
 * @property {string} alt - Image alt text.
 */

type ImageProps = {
  readonly size: number,
  readonly src: string,
  readonly alt: string
}

/**
 * Image component.
 *
 * @param {ImageProps} props - Props.
 * @returns {object} Image component.
 */
export default function Image({ size, src, alt }: ImageProps): ReactElement {
  const divStyle = {
    width: size,
    height: size,
    display: 'inline-block'
  }

  const imageStyle = {
    width: size,
    height: size
  }
  return (
    <div style={divStyle}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  )
}
