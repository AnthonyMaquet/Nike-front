import React, { useEffect, useState } from 'react'
import Text from '../components/text'
import IsFlex from '../components/flex'
import Container from '../components/container'
import NavBar from '../components/navbar'
import Menu from '../components/menu'

const Shoes = () => {
  const [shoesList, setShoesList] = useState([])
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const getShoes = () => {
    fetch('http://localhost:3005/products/shoes')
      .then((response) => response.json())
      .then((myJson) => setShoesList(myJson))
  }

  useEffect(() => {
    if (inputValue.length >= 2) {
      setShoesList(shoesList.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase())))
    } else {
      getShoes()
    }
  }, [inputValue])

  return (
    <>
      <NavBar onChangeInput={handleChange} />
      <IsFlex alignItems='start' justifyContent='flex-start'>
        <Menu />
        <Container display='inline-block'>
          <IsFlex flexWrap='wrap'>
            {shoesList.map((product) => {
              return (
                <Container margin='0 0 10px 0' padding='15px' key={Math.random()}>
                  <Container width='500px' height='500px' backgroundImage={product.image} backgroundSize='100%' />
                  <Text color='black'>{product.title}</Text>
                  <IsFlex justifyContent='flex-start'>
                    {product.discount ? (
                      <>
                        <Text color='black' width='auto'>
                          {<s>{product.price}</s>}
                        </Text>
                        <Text color='black' width='auto'>
                          {product.discount}{' '}
                        </Text>
                      </>
                    ) : (
                      <Text color='black'>{product.price}</Text>
                    )}
                  </IsFlex>
                </Container>
              )
            })}
          </IsFlex>
        </Container>
      </IsFlex>
    </>
  )
}

export default Shoes
