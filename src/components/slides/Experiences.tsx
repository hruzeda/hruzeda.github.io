import * as React from 'react'

import { SlideContext } from '../../pages/index'
import { Slide } from '../CustomCarousel'
import { Button } from 'react-bootstrap'

export const Experiences = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'Experiences'}>
      <div>
        <h2>Experiences and projects</h2>

        <p>
          In this page I'll just summarize my larger experiences and list some
          shorter experiences that I think are worth mentioning. More details
          and specific achievements can be found in the dedicated sections on
          the navigation menu.
        </p>
        <p>
          I started programming in an{' '}
          <a href='https://www.agenciazum.com.br/' target='_blank'>
            advertising agency
          </a>{' '}
          back in 2010 customizing{' '}
          <a href='https://github.com/hruzeda/phpcms' target='_blank'>
            PHP
          </a>{' '}
          templates to different Photoshop layouts.
        </p>
        <p>
          Using MySQL, I learned how the basic CRUD requests worked and how to
          consume Web Services via REST and SOAP to integrate with payment
          systems like PayPal.
        </p>
        <p>
          I then had a short experience of around six months with Ruby on Rails
          to maintain the official{' '}
          <a href='https://www.lencoispaulista.sp.gov.br/' target='_blank'>
            website
          </a>{' '}
          of the city I live in, a project that I later had to entirely convert
          to PHP when I decided to leave the agency to work with ERPs and
          desktop applications written in Cobol and being converted to Java EE.
        </p>
        <p>
          While participating in an internal training to learn Cobol and working
          with the Java conversion team, I rewrote the{' '}
          <a href='http://supportinformatica.com.br' target='_blank'>
            company website
          </a>{' '}
          and most of the e-mail templates used by the system.
        </p>
        <p>
          Around 2012 I left for{' '}
          <a href='https://www.mstech.com.br/' target='_blank'>
            another company
          </a>
          , where I worked for 2 years building educational Flash games with
          Actionscript 3, Apache Flex and Adobe AIR. I was practicing design
          patterns and tried to create a framework the whole team could use to
          build cross platform 2D tiled games using the{' '}
          <a href='https://gamua.com/starling/' target='_blank'>
            Starling Framework
          </a>
          . I designed an entity pattern for NPCs, dialogues and cutscenes,
          wrote a path finding algorithm for touch coordinates and created a
          cross platform Tile Map Editor for that framework.
        </p>
        <p>
          There was also another map rendering alternative for isometric games,
          without using tiles or the editor. It distributed nodes over any
          image, identifying empty spaces by analyzing the bitmap data. Coupled
          with the same path finding algorithm, it created game visuals like{' '}
          <a
            href='https://store.steampowered.com/app/1175830/Legend_of_Mana/'
            target='_blank'
          >
            Legend of Mana
          </a>{' '}
          by overlaying flat textures and placing the player between them.
        </p>
        <p>
          After Flash's support got cut off, I ported a small sample of that
          code to{' '}
          <a href='https://github.com/hruzeda/museudavida' target='_blank'>
            CreateJS using Javascript
          </a>{' '}
          and to{' '}
          <a href='https://gitlab.com/ruzeda/isometric-uzeda' target='_blank'>
            Cocos2d using C++
          </a>{' '}
          to explore alternatives.
        </p>
        <p>
          For period after that I worked on smaller independent projects with
          Java 8, PHP,{' '}
          <a href='https://www.cardapex.com.br/' target='_blank'>
            Python with Django
          </a>{' '}
          until I started working outsourced by{' '}
          <a href='https://www.encora.com/' target='_blank'>
            Encora
          </a>{' '}
          to a Boston based conferencing company.
        </p>
        <p>
          I worked for Encora for five years, so I'll go over more details for
          that experience on the{' '}
          <Button variant='primary' size='sm' onClick={() => setSlide('Java')}>
            Java
          </Button>{' '}
          and{' '}
          <Button variant='primary' size='sm' onClick={() => setSlide('React')}>
            React
          </Button>{' '}
          sections, but one short experience worth mentioning here was that I
          created a simulator/replacement DLL for a UI extension we maintained
          for the old desktop Webex communication client.
        </p>
        <p>
          The extension proxied audio streams coming from the user's devices
          through third party media servers (Dolby) to enhance audio quality and
          was written on C++.NET. Part of this integration was handled by a DLL
          provided by this third party and we needed a way to automate tests
          with it and mock error codes.
        </p>
        <p>
          In 2022 I moved on to another conferencing-related company called
          B-Yond, where I used Python, FastAPI, React and Next.js to help
          maintain a stack of projects that analyses packet capture files and
          classifies/labels messages displaying the call flow as sequence and
          topology diagrams. More details on the dedicated{' '}
          <Button
            variant='primary'
            size='sm'
            onClick={() => setSlide('Python')}
          >
            Python
          </Button>{' '}
          and{' '}
          <Button variant='primary' size='sm' onClick={() => setSlide('React')}>
            React
          </Button>{' '}
          sections.
        </p>
      </div>
    </Slide>
  )
}
