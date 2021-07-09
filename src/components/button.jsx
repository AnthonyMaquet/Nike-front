import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: ${(props) => props.backgroundColorAttr};
  color: ${(props) => props.colorAttr};
  padding: 25px 40px;
  border-radius: 10px;
  font-size: 20px;
  margin: 0px 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    color: #ffd90094;
  }
`

const Button = ({ content = 'Envoyer', onClickFunction = null, backgroundColor = 'white', color = 'black' }) => {
  return (
    <ButtonStyle onClick={onClickFunction} backgroundColorAttr={backgroundColor} colorAttr={color}>
      {content}
    </ButtonStyle>
  )
}

export default Button
