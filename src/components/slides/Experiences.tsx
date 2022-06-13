import * as React from 'react'

import { Slide } from '../CustomCarousel'
import { SlideContext } from '../../pages/index'

export const Experiences = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'Experiences'}>
      <div>
        <h2>Experiences and projects</h2>

        <p>
          I started programming in an advertising agency back in 2010
          customizing{' '}
          <a href='https://github.com/hruzeda/phpcms' target='_blank'>
            PHP
          </a>{' '}
          templates to different Photoshop layouts and front end has been my
          passion ever since.
        </p>
        <p>
          Using MySQL, I learned how the basic CRUD requests worked and how to
          consume Web Services via REST and SOAP to integrate with payment
          systems like PayPal.
        </p>
        <p>
          I then had a short experience with Ruby on Rails to maintain the{' '}
          <a href='http://www2.lencoispaulista.sp.gov.br/v2/' target='_blank'>
            website
          </a>{' '}
          of the city I lived in, a project that I later had to convert to PHP
          when I decided to leave the advertising agency I worked on to progress
          my career and work with ERPs written in Cobol and being converted to
          Java EE.
        </p>
        <p>
          While participating in an internal training to learn Cobol, and
          working with the Java conversion team, I wrote a PHP script that, when
          executed in a cron task, distributed internal e-mails to the all
          employees. I also rewrote most of the e-mail templates and the{' '}
          <a href='http://supportinformatica.com.br' target='_blank'>
            company website
          </a>{' '}
          3 times (considering invitations I received a few years after leaving
          the company).
        </p>
        <p>
          I then moved on to another company, where I worked for 2 years with
          educational Flash games written in Actionscript 3, Apache Flex and
          Adobe AIR. I was practicing design patterns and tried to create a
          framework the whole team could use to build cross platform 2D tiled
          games using the{' '}
          <a href='https://gamua.com/starling/' target='_blank'>
            Starling Framework
          </a>
          .
        </p>
        <p>
          I created a Map Editor with its own a file extension via Adobe AIR
          (worked on any desktop platform), designed an entity pattern for NPCs
          and a path finding algorithm using the A* algorithm. Afterwards I
          ported the same code to{' '}
          <a href='https://github.com/hruzeda/museudavida' target='_blank'>
            CreateJS using Javascript
          </a>{' '}
          and to{' '}
          <a href='https://gitlab.com/ruzeda/isometric-uzeda' target='_blank'>
            Cocos2d using C++
          </a>
          .
        </p>
        <p>
          There was also an alternative solution I wrote, also using the
          Starling Framework, for fake isometric games. It distributed nodes
          over any image, identifying empty spaces by analyzing the bitmap data.
          Coupled with the same path finding algorithm, it created game visuals
          like{' '}
          <a
            href='https://store.steampowered.com/app/1175830/Legend_of_Mana/'
            target='_blank'
          >
            Legend of Mana
          </a>{' '}
          by overlaying flat textures and placing the player between them.
        </p>
        <p>
          A last short experience worth mentioning was the maintenance and
          development of a simulator/replacement for a DLL based GUI extension
          for the old Webex communication client. It handled audio streams
          coming from the user's devices to get them through third party media
          servers and enhance quality.
        </p>
      </div>
    </Slide>
  )
}
