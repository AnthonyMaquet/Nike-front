import React from 'react'
import IsFlex from '../components/flex'
import Container from '../components/container'
import NavBar from '../components/navbar'
import Menu from '../components/menu'

const Index = () => {
  return (
    <>
      <NavBar />
      <IsFlex>
        <Menu />
        <Container backgroundImage='../assets/accueil.jpg' height='calc(100vh - 80px)' width='100%' />
      </IsFlex>
    </>
  )
}

export default Index
