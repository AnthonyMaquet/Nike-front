import React from 'react'
import styled from 'styled-components'

const TextStyle = styled.p`
  color: ${(props) => props.colorAttr};
  padding: ${(props) => props.paddingAttr};
  margin: ${(props) => props.marginAttr};
  text-align: ${(props) => props.textAlignAttr};
  font-size: ${(props) => props.fontSizeAttr};
  width: ${(props) => props.widthAttr};
`

const Text = ({
  children,
  onClickFunction = null,
  fontSize = '20px',
  textAlign = 'left',
  padding = '5px',
  margin = '0px',
  width = '100%',
  color = 'silver',
}) => {
  return (
    <TextStyle
      onClick={onClickFunction}
      fontSizeAttr={fontSize}
      textAlignAttr={textAlign}
      paddingAttr={padding}
      marginAttr={margin}
      widthAttr={width}
      colorAttr={color}
    >
      {children}
    </TextStyle>
  )
}

export default Text
