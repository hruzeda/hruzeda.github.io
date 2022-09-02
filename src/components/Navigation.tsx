import * as React from 'react'
import { Button, ButtonGroup, Dropdown, SplitButton } from 'react-bootstrap'

import { SlideContext } from '../pages/index'

export const Navigation = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <div className='text-center mt-2'>
      <ButtonGroup vertical className='mt-4'>
        <Button variant='primary' onClick={() => setSlide('AboutMe')}>
          About Me
        </Button>
        <Button variant='primary' onClick={() => setSlide('Experiences')}>
          Experiences
        </Button>
        <SplitButton
          as={ButtonGroup}
          title='Front End'
          drop='end'
          variant='primary'
          onClick={() => setSlide('FrontEnd')}
        >
          <Dropdown.Item
            as='button'
            eventKey='1'
            onClick={() => setSlide('Angular')}
          >
            Angular
          </Dropdown.Item>
          <Dropdown.Item
            as='button'
            eventKey='2'
            onClick={() => setSlide('React')}
          >
            React
          </Dropdown.Item>
          <Dropdown.Item
            as='button'
            eventKey='3'
            onClick={() => setSlide('Vue')}
          >
            Vue
          </Dropdown.Item>
        </SplitButton>
        <SplitButton
          as={ButtonGroup}
          title='Back End'
          drop='end'
          variant='primary'
          onClick={() => setSlide('BackEnd')}
        >
          <Dropdown.Item
            as='button'
            eventKey='1'
            onClick={() => setSlide('Java')}
          >
            Java
          </Dropdown.Item>
          <Dropdown.Item
            as='button'
            eventKey='2'
            onClick={() => setSlide('Python')}
          >
            Python
          </Dropdown.Item>
        </SplitButton>
      </ButtonGroup>
    </div>
  )
}
