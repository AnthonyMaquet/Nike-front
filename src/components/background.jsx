import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
  width: ${(props) => props.widthAttr};
  padding: ${(props) => props.paddingAttr};
`

const Image = ({ src, width = 'auto', padding = '10px' }) => {
  return <ImageStyle src={src} widthAttr={width} paddingAttr={padding} />
}

export default BackgroundImage
