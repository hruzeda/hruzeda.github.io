import * as React from 'react'
import { Button, ButtonGroup, Dropdown, SplitButton } from 'react-bootstrap'
import styled from 'styled-components'

type NavigationProps = {
  active: String
  onChange: (slide: string) => React.MouseEventHandler<HTMLElement>
}

export const Navigation = ({ active, onChange }: NavigationProps) => {
  return (
    <ButtonGroup vertical className='mt-4'>
      <Button variant='quaternary' onClick={onChange('AboutMe')}>
        About Me
      </Button>
      <Button variant='quaternary' onClick={onChange('Experiences')}>
        Experiences
      </Button>
      <SplitButton
        as={ButtonGroup}
        title='Front End'
        drop='end'
        variant='quaternary'
        onClick={onChange('FrontEnd')}
      >
        <Dropdown.Item as='button' eventKey='1' onClick={onChange('Angular')}>
          Angular
        </Dropdown.Item>
        <Dropdown.Item as='button' eventKey='2' onClick={onChange('React')}>
          React
        </Dropdown.Item>
        <Dropdown.Item as='button' eventKey='3' onClick={onChange('Vue')}>
          Vue
        </Dropdown.Item>
      </SplitButton>
      <SplitButton
        as={ButtonGroup}
        title='Back End'
        drop='end'
        variant='quaternary'
        onClick={onChange('BackEnd')}
      >
        <Dropdown.Item as='button' eventKey='1' onClick={onChange('Java')}>
          Java
        </Dropdown.Item>
        <Dropdown.Item as='button' eventKey='2' onClick={onChange('Python')}>
          Python
        </Dropdown.Item>
      </SplitButton>
    </ButtonGroup>
  )
}
