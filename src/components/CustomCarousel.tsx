import * as React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

import * as Slides from './slides'
import { theme } from '../theme/global'
import CustomTransition from './CustomTransition'

export type SlideProps = {
  active: string
}

export const Slide = styled(CustomTransition)``

const TallDiv = styled(Col)`
  padding: 25px 25px 25px 30px;

  @media (min-width: 992px) {
    height: auto;
    max-height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
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

type CustomCarouselProps = {
  activeSlide: string
}

export const CustomCarousel = ({ activeSlide }: CustomCarouselProps) => {
  return (
    <TallDiv xs='12' lg='8' className='align-items-center'>
      <Slides.AboutMe active={activeSlide} />
      <Slides.Experiences active={activeSlide} />
      <Slides.FrontEnd active={activeSlide} />
      <Slides.Angular active={activeSlide} />
      <Slides.ReactSlide active={activeSlide} />
      <Slides.Vue active={activeSlide} />
      <Slides.BackEnd active={activeSlide} />
      <Slides.Java active={activeSlide} />
      <Slides.Python active={activeSlide} />
    </TallDiv>
  )
}
