import React, { children } from 'react'
import styled from 'styled-components'

const ContainerStyle = styled.div`
  width: ${(props) => props.widthAttr};
  height: ${(props) => props.heightAttr};
  margin: ${(props) => props.marginAttr};
  padding: ${(props) => props.paddingAttr};
  border-right: ${(props) => props.borderRightAttr};
  display: ${(props) => props.displayAttr};
  background-image: url(${(props) => props.backgroundImageAttr});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSizeAttr};
  overflow: hidden;
`

const Container = ({
  children,
  width = 'auto',
  margin = '0',
  padding = '0',
  borderRight = 'none',
  height = 'auto',
  backgroundImage = 'none',
  backgroundSize = '75%',
  display = 'block',
}) => {
  return (
    <ContainerStyle
      widthAttr={width}
      marginAttr={margin}
      paddingAttr={padding}
      borderRightAttr={borderRight}
      heightAttr={height}
      backgroundImageAttr={backgroundImage}
      backgroundSizeAttr={backgroundSize}
      displayAttr={display}
    >
      {children}
    </ContainerStyle>
  )
}

export default Container
