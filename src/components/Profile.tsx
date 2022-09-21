import * as React from 'react'
import { Linkedin, Github } from 'react-bootstrap-icons'
import styled from 'styled-components'

import gitlab_logo from '../images/gitlab-logo.png'

const GitlabLogo = styled.img`
  display: block;
  width: 1.8em;
  height: 1.8em;
  margin: -3px -8px;
`

export const Profile = () => {
  return (
    <>
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
          href='https://gitlab.com/hruzeda'
          target={'_blank'}
          className='btn btn-small btn-secondary'
        >
          <GitlabLogo src={gitlab_logo} />
        </a>
      </div>
    </>
  )
}
