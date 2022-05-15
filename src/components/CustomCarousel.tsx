import * as React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

export const CenteredText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  height: 100%;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
`

type CustomCarouselProps = {
  children: React.ReactNode | React.ReactNode[]
}

export default function CustomCarousel({ children }: CustomCarouselProps) {
  const [index, setIndex] = React.useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  let body: Array<JSX.Element> = []
  if (children) {
    const transient = Array.isArray(children) ? children : [children]
    body = transient.map((child, index) => (
      <Carousel.Item key={index}>{child}</Carousel.Item>
    ))
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade
      variant='dark'
      controls={false}
    >
      {body}
    </Carousel>
  )
}
