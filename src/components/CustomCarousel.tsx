import * as React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

import { theme } from '../theme/global'
import { CustomTransition } from './CustomTransition'
import * as Slides from './slides'
import { SlideContext } from '../pages'

export const Slide = styled(CustomTransition)``

const TallDiv = styled(Col)`
  padding: 25px 50px 25px 30px;

  @media (min-width: 992px) {
    height: auto;
    max-height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  &::-webkit-scrollbar {
    right: -10px;
    width: 5px;
    background-color: ${theme.containerBgDark};
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 8px;
    background-color: ${theme.containerBgLight};
  }

  h1,
  h2,
  h3,
  h4 {
    text-align: left;
  }

  p,
  span,
  li {
    text-align: justify;
  }
`

export const CustomCarousel = () => {
  const { slide } = React.useContext(SlideContext)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0
  }, [slide])

  return (
    <TallDiv xs='12' lg='9' className='align-items-center' ref={ref}>
      <Slides.AboutMe />
      <Slides.Experiences />
      <Slides.Frontend />
      <Slides.Angular />
      <Slides.ReactSlide />
      <Slides.Vue />
      <Slides.Backend />
      <Slides.Java />
      <Slides.Python />
    </TallDiv>
  )
}
