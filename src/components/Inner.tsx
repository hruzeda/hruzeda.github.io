import * as React from 'react'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'

import { theme } from '../theme/global'

export const Inner = styled(Row)`
  background: ${theme.containerBg};
  border-radius: 7.5px;
  box-shadow: 0 2px 4px ${theme.primaryDark};
  color: #eee;
  text-shadow: 0.5px 0.5px 4px ${theme.containerBgDark};

  @media (max-width: 991px) {
    padding: 7.5px 0;
    margin: 0;
  }
  @media (min-width: 992px) {
    padding: 7.5px;
    max-height: 85vh;
  }
`
