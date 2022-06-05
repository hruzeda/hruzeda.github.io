import * as React from 'react'
import { Carousel, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Slide = styled.div`
  transition: height 2s;
  height: 0;
  max-height: 75vh;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  h1,
  h2,
  h3,
  h4,
  p,
  span,
  li {
    text-align: justify;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`

const TallDiv = styled(Col)`
  height: 100%;
  padding: 25px 50px 25px 0;
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
    body = transient.map((child, i) => (
      <Slide key={i} className={index == i ? 'h-auto' : undefined}>
        {child}
      </Slide>
    ))
  }

  return (
    <TallDiv xs='12' lg='8' className='align-items-center'>
      {body}
    </TallDiv>
  )
}
