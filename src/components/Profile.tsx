import * as React from 'react'
import { Github, Linkedin } from 'react-bootstrap-icons'
import styled from 'styled-components'

import gitlab_logo from '../images/gitlab-logo.svg'
import codersrank_logo from '../images/codersrank-logo.svg'

const CustomLogo = styled.img`
  display: block;
  width: 1.4em;
  height: 1.4em;
  margin: 0.9px -3.6px;
  filter: brightness(0%) invert(100%);
`

const GitLabLogo = styled.img`
  display: block;
  width: 1.8em;
  height: 1.8em;
  margin: -2.7px -7.2px;
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
          href='https://gitlab.com/ruzeda/isometric-uzeda/-/boards'
          target={'_blank'}
          className='btn btn-small btn-secondary'
        >
          <GitLabLogo src={gitlab_logo} />
        </a>{' '}
        <a
          href='https://profile.codersrank.io/user/hruzeda/'
          target={'_blank'}
          className='btn btn-small btn-secondary'
        >
          <CustomLogo src={codersrank_logo} />
        </a>
      </div>
    </>
  )
}
