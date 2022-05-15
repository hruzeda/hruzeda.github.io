import { createGlobalStyle } from 'styled-components'
import './theme.scss'

export const theme = {
  primary: '#41748d',
  secondary: '#7e8a78',
  tertiary: '#2f4c5e'
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    overflow: hidden;
    background: #7e8a78;
  }
  body > div, body > div > div, .container, .carousel, .slide, .carousel-inner, .carousel-item {
    height: 100%;
  }
  td {
    vertical-align: middle;
  }
  textarea {
    resize: none;
  }
  .container {
    padding: 1.4rem;
    background: #fff;
  }
`

export default GlobalStyle
