import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

import GlobalStyle, { theme } from '../theme/global'
import CustomCarousel, { CenteredText } from '../components/CustomCarousel'

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <CustomCarousel>
            <CenteredText>
              <h1>Under Construction</h1>
            </CenteredText>
          </CustomCarousel>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
