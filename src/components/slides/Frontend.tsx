import * as React from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'
import { SlideContext } from '../../pages/index'
import { Slide } from '../CustomCarousel'

export const Frontend = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'Frontend'}>
      <div>
        <h2>Frontend</h2>

        <p>
          In the last few years, most of my work has been to backend API's and
          integrations (except for a one year experience with Angular), but I've
          started studying and working on personal projects with Angular, React,
          Redux, Vue, Typescript to avoid losing track of everything that has
          been happening since ES6.
        </p>
        <p>
          Since then, I worked on three front-end projects for my current
          customer written in Typescript and React. Two of those I created from
          scratch, but only one is still being maintained to this day. The other
          one was a POC comparing React Native with Ionic.
        </p>
        <p>
          Moving into Node.js, I've studied and written apps using Express with
          Mongoose, a few middlewares and Apollo GraphQL. My first experience
          being a{' '}
          <a href='https://github.com/hruzeda/simplecms' target='_blank'>
            Simple CMS
          </a>{' '}
          I created based on a PHP template I used back on 2012.
        </p>

        <div className='text-center'>
          <ButtonGroup className='mt-4'>
            <Button variant='primary' onClick={() => setSlide('Angular')}>
              Angular
            </Button>
            <Button variant='primary' onClick={() => setSlide('React')}>
              React
            </Button>
            <Button variant='primary' onClick={() => setSlide('Vue')}>
              Vue
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Slide>
  )
}
