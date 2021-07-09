import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.a`
  cursor: pointer;
  transition: 0.4s;
  :hover {
    color: #000;
  }
`

const Link = ({ children, onClick = null }) => {
  return <LinkStyle onClick={onClick}>{children}</LinkStyle>
}

export default Link
