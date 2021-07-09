import React from 'react'
import styled from 'styled-components'
import IsFlex from './flex'
import Image from './image'
import Panier from '../assets/panier.png'
import Account from '../assets/compte.png'
import Container from './container'
import Input from './input'
import { useState } from 'react'
const NavBarStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 2px solid #f2f2f2;
  background-color: #fff;
`

const NavBar = ({ onChangeInput }) => {
  return (
    <NavBarStyle>
      <Container margin='20px'>
        <IsFlex width='100%' justifyContent='flex-end' alignItems='center'>
          <Input onChange={(event) => onChangeInput(event)} id='inputSearch' backgroundImage='../assets/loupe.png' />
          <Image src={Panier} width='20px' cursor='pointer' padding='0 10px 0 20px' />
          <Image src={Account} width='20px' cursor='pointer' />
        </IsFlex>
      </Container>
    </NavBarStyle>
  )
}

export default NavBar
