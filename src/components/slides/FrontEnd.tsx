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
          In the last few years although I'm mainly working on back end code
          with very little tweaking of HTML/CSS, Javascript and jQuery here and
          there, I've been studying and working on personal projects with
          Angular, React, Redux, Vue, Typescript to avoid losing track of
          everything that has been happening since ES6.
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
            <Button variant='quaternary' onClick={() => setSlide('Angular')}>
              Angular
            </Button>
            <Button variant='quaternary' onClick={() => setSlide('React')}>
              React
            </Button>
            <Button variant='quaternary' onClick={() => setSlide('Vue')}>
              Vue
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Slide>
  )
}
