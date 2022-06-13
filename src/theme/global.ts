import { createGlobalStyle } from 'styled-components'

import './theme.scss'

export const theme = {
  primary: '#F23030',
  primaryDark: '#731717',
  secondary: '#267365',
  secondaryDark: '#11332D',
  tertiary: '#F2CB05',
  tertiaryDark: '#736002',
  containerBg: '#403B39',
  containerBgDark: '#332F2D',
  containerBgLight: '#CCBCB6'
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.2rem;
  }
  body {
    background: ${theme.primaryDark};

    @media(min-width: 992px) {
      height: 100vh;
      overflow: hidden;
    }
  }
  body > div, body > div > div {
    @media(min-width: 992px) {
      height: 100%;
    }
  }
  h1, h2, h3, h4, h5 {
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  a {
    text-decoration: none !important;
  }
`
