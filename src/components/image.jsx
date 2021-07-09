import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
  width: ${(props) => props.widthAttr};
  height: ${(props) => props.heightAttr};
  padding: ${(props) => props.paddingAttr};
  cursor: ${(props) => props.cursorAttr};
`

const Image = ({ src, width = 'auto', padding = '10px', cursor = 'auto', height = 'auto', id }) => {
  return (
    <ImageStyle id={id} src={src} widthAttr={width} paddingAttr={padding} cursorAttr={cursor} heightAttr={height} />
  )
}

export default Image
