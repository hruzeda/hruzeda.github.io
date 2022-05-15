import * as React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const CenteredText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  height: 100%;
  h1 {
    font-size: 3rem;
  }
`

export default function CustomCarousel() {
  const [index, setIndex] = React.useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade variant='dark'>
      <Carousel.Item style={{ backgroundColor: '#eee' }}>
        <CenteredText>
          <h1>Hello World</h1>
        </CenteredText>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundColor: '#ddd' }}>
        <CenteredText>
          <h1>Second Slide</h1>
        </CenteredText>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
