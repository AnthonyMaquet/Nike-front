import React from 'react'
import styled from 'styled-components'
import IsFlex from './flex'
import Image from './image'
import Text from './text'
import Link from './link'
import Container from './container'
import Hr from './hr'
import NikeLogo from '../assets/nike.png'
import Nikereact from '../assets/nikereact3.jpg'
import NikeSlogan from '../assets/justdoit.jpg'
import { useHistory } from 'react-router-dom'

const MenuStyle = styled.div`
  width: 16%;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 2px solid #f2f2f2;
  background-color: white;
`

const Menu = () => {
  const history = useHistory()
  return (
    <MenuStyle>
      <Container height='100vh' padding='0 20px'>
        <IsFlex>
          <Link children={<Image src={NikeLogo} width='130px' cursor='pointer' />} onClick={() => history.push('/')} />
        </IsFlex>
        <Text padding='25px'>
          <Link children='Chaussures' onClick={() => history.push('/shoes')} />{' '}
        </Text>
        <Text padding='25px'>
          <Link children='Sports' onClick={() => history.push('/jersey')} />{' '}
        </Text>
        <Text padding='25px'>
          <Link children='Vêtements' onClick={() => history.push('/clothing')} />{' '}
        </Text>
        <Text padding='25px'>
          <Link children='Accessoires' onClick={() => history.push('/accessories')} />
        </Text>
        <IsFlex>
          <Image src={NikeSlogan} width='200px' padding='100px' />{' '}
        </IsFlex>
        <IsFlex>
          <Hr padding='0 150px 0 100px' />
        </IsFlex>
        <IsFlex>
          <Image src={Nikereact} width='300px' padding='0px' />
        </IsFlex>
      </Container>
    </MenuStyle>
  )
}

export default Menu
