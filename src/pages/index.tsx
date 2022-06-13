import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Col, Container } from 'react-bootstrap'

import {
  CustomCarousel,
  Inner,
  Navigation,
  Profile,
  Wrapper
} from '../components'
import { GlobalStyle, theme } from '../theme/global'

const LeftNav = styled(Col)`
  height: auto;

  @media (min-width: 992px) {
    padding: 25px 12.5px 25px 25px;
  }

  h3 {
    font-size: 1rem;
    text-shadow: 0.5px 0.5px 4px ${theme.containerBgDark};
  }

  a {
    box-shadow: 0.5px 0.5px 4px ${theme.containerBgDark};
  }
`

const d: React.Dispatch<React.SetStateAction<string>> = () => {}
export const SlideContext = React.createContext({
  slide: 'AboutMe',
  setSlide: d
})

const IndexPage = () => {
  const [slide, setSlide] = React.useState('AboutMe')
  const value = { slide, setSlide }

  return (
    <Wrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <h1 className='mb-2'>Henrique Uzêda</h1>
          <SlideContext.Provider value={value}>
            <Inner>
              <LeftNav xs='12' lg='4' className='align-self-center'>
                <Profile />
                <Navigation />
              </LeftNav>

              <CustomCarousel />
            </Inner>
          </SlideContext.Provider>
        </Container>
      </ThemeProvider>
    </Wrapper>
  )
}

export default IndexPage
