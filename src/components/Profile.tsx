import * as React from 'react'
import styled from 'styled-components'
import { Linkedin, Github, CodeSlash } from 'react-bootstrap-icons'

import thumb from '../images/thumb.jpg'
import { theme } from '../theme/global'

const Thumb = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto 25px;
  border-radius: 50%;
  border: 8px solid #eee;
  box-shadow: 0.5px 0.5px 4px ${theme.containerBgDark};

  @media (min-width: 992px) {
    width: 70%;
  }
`

export const Profile = () => {
  return (
    <>
      <Thumb src={thumb} />
      <div className='text-center'>
        <h3 className='mb-1'>Software Developer</h3>
        <a
          href='https://www.linkedin.com/in/hruzeda/'
          target={'_blank'}
          className='btn btn-small btn-secondary'
        >
          <Linkedin />
        </a>{' '}
        <a
          href='https://github.com/hruzeda'
          target={'_blank'}
          className='btn btn-small btn-secondary'
        >
          <Github />
        </a>{' '}
        <a
          href='https://github.com/hruzeda/hruzeda.github.io'
          target={'_blank'}
          className='btn btn-small btn-secondary'
        >
          <CodeSlash />
        </a>
      </div>
    </>
  )
}
