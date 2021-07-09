import React, { children } from 'react'
import styled from 'styled-components'

const IsFlexStyle = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContentAttr};
  flex-direction: ${(props) => props.flexDirectionAttr};
  align-items: ${(props) => props.alignItemsAttr};
  height: ${(props) => props.heightAttr};
  flex-wrap: ${(props) => props.flexWrapAttr};
  width: ${(props) => props.widthAttr};
  margin: 0 !important;
  padding: 0 !important;
`

const IsFlex = ({
  children,
  justifyContent = 'center',
  flexDirection = 'row',
  alignItems = 'center',
  height = 'auto',
  flexWrap = 'unset',
  width = 'auto',
}) => {
  return (
    <IsFlexStyle
      justifyContentAttr={justifyContent}
      flexDirectionAttr={flexDirection}
      alignItemsAttr={alignItems}
      heightAttr={height}
      flexWrapAttr={flexWrap}
      widthAttr={width}
    >
      {children}
    </IsFlexStyle>
  )
}

export default IsFlex
