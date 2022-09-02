import * as React from 'react'

import { Slide } from '../CustomCarousel'
import { SlideContext } from '../../pages/index'
import { Button, ButtonGroup } from 'react-bootstrap'

export const BackEnd = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'BackEnd'}>
      <div>
        <h2>Back End</h2>

        <p>
          Although I started more as a front end dev, I've always had some back
          end work to do as well. In recent years, more work than I had on the
          front end. I've written basic PHP content management systems and REST
          web services, maintained a Ruby on Rails CMS, then moved on to work on
          a Java EE ERP (Java 1.6).
        </p>
        <p>
          After two years working with game development, I moved on to work on
          Django (Python) systems, and then finally back to Java web
          applications writen with Java 8, Spring and Struts.
        </p>
      </div>

      <div className='text-center'>
        <ButtonGroup className='mt-4'>
          <Button variant='primary' onClick={() => setSlide('Java')}>
            Java
          </Button>
          <Button variant='primary' onClick={() => setSlide('Python')}>
            Python
          </Button>
        </ButtonGroup>
      </div>
    </Slide>
  )
}
