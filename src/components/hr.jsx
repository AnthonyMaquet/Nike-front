import React from 'react'
import styled from 'styled-components'

const HrStyle = styled.hr`
  color: ${(props) => props.colorAttr};
  padding: ${(props) => props.paddingAttr};
  width: '75px';
  height: '2';
  margin: '10px';
`

const Hr = ({ color = 'black', padding = 'none' }) => {
  return <HrStyle colorAttr={color} paddingAttr={padding} />
}

export default Hr
