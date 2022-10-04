import * as React from 'react'

import { Slide } from '../CustomCarousel'
import { SlideContext } from '../../pages/index'
import { Button, ButtonGroup } from 'react-bootstrap'

export const FrontEnd = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'FrontEnd'}>
      <div>
        <h2>Front End</h2>

        <p>
          In the last few years, most of my work has been to back end API's and
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
          Moving into javascript back end, I've studied and written small apps
          using{' '}
          <a href='https://github.com/hruzeda/simplecms' target='_blank'>
            Express with Mongoose
          </a>
          , a few middlewares and Apollo GraphQL.
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
