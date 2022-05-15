import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from 'react-bootstrap'

import GlobalStyle, { theme } from '../theme/global'
import CustomCarousel from '../components/CustomCarousel'

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <CustomCarousel />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default IndexPage
