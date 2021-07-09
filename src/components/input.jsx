import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  border-radius: ${(props) => props.borderRadiusAttr};
  border-color: transparent;
  background-image: url(${(props) => props.backgroundImageAttr});
  background-repeat: no-repeat;
  background-position: 95%;
  background-size: 20px;
  width: 0;
  height: 25px;
  padding: 5px;
  padding-left: 15px;
  background-color: transparent;
  outline: none;
  transition: 0.5s;
  /* animation-name: opensearchbar;
  animation-duration: 0.5s; */

  :hover {
    width: 10%;
    background-color: #f2f2f2;
  }

  :focus {
    width: 10%;
    background-color: #e4e4e4;
  }
`

const Input = ({
  type = 'text',
  placeholder = 'Rechercher',
  borderRadius = '50px',
  backgroundImage = 'Null',
  id,
  onChange = null,
}) => {
  return (
    <InputStyle
      id={id}
      type={type}
      placeholder={placeholder}
      borderRadiusAttr={borderRadius}
      backgroundImageAttr={backgroundImage}
      onChange={onChange}
    ></InputStyle>
  )
}

export default Input
