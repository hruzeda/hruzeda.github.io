import { createGlobalStyle } from 'styled-components'

import './theme.scss'

export const theme = {
  primary: '#F2CB05',
  primaryDark: '#768b31',
  secondary: '#386B46',
  secondaryDark: '#2A5235',
  containerBg: '#403B39',
  containerBgDark: '#332F2D',
  containerBgLight: '#CCBCB6',
  light: '#f8f9fa',
  dark: '#212529'
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1.2rem;
    letter-spacing: -1px;
  }
  body {
    background: #386B46;

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
    letter-spacing: 1px;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
  a {
    text-decoration: none !important;
  }
`
