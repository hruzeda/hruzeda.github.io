import * as React from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'
import { SlideContext } from '../../pages/index'
import { Slide } from '../CustomCarousel'

export const ReactSlide = () => {
  const { slide, setSlide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'React'}>
      <div>
        <h2>React, React Native and Ionic</h2>

        <p>
          My first contact with React was back in 2017 when I read about how it
          was created to replace PHP include files, but with a lifecycle. I
          decided to test it and wrote a small{' '}
          <a href='https://github.com/hruzeda/simplecms/' target='_blank'>
            CRUD using MongoDB
          </a>
          .
        </p>
        <p>
          A few months later our customer requested a new application to list
          and manage recordings of videoconferences.
        </p>
        <p>
          I didn't get to create the project myself, but I programmed the login
          form, the navigation bar and the main collapsable panel for the
          recordings. I also had the chance to work with Material UI and to
          create high order components extending it and later, to work with
          Redux dispatching state changes to the store and updating other
          components.
        </p>
        <p>
          After that, I volunteered to teach a React 101 training with a
          collegue. Functional components and react hooks weren't a thing yet.
        </p>
        <p>
          On the following year, after various backend and infrastructure
          changes, the customer asked us to test third parties WebRTC SDKs with
          cross platfom solutions so they could drop the current mobile app and
          maintain a single application. That was when react hooks and
          functional components were starting to become the norm.
        </p>
        <p>
          I tested the React Native and Ionic solutions using Amazon Chime SDK,
          packaging the solutions with Android Studio, the emulator and my own
          phone. Though React Native isn't compatible with some of the
          dependencies of the SDK and would require more work, the Ionic
          solution worked almost flawlessly, except for the Screen Sharing
          feature which would require some platform specific code.
        </p>
        <p>
          The client was satisfied and decided to go with Ionic, though the
          actual development was postponed.
        </p>
        <p>
          While working on those projects, a friend of mine asked for my help in
          writing the UI for an{' '}
          <a href='https://www.ffwdtec.com/copycat.html' target='_blank'>
            Web Service mocking solution
          </a>{' '}
          that he has been working on for years now.
        </p>
        <p>
          It's a simple application with only two views, used to create request
          samples that can be dynamically used for tests and demos. Each view
          has lots of inputs and, because it's meant for developers, a JSON tab
          the user can switch to, where any changes made are synchronized back
          to the inputs.
        </p>
        <p>
          I used TypeScript, I18n, React and Styled Components to write it,
          creating the component hierarchy using barrel exports. It was also the
          first time I didn't use React Bootstrap, and it was when I got
          familiar with the useContext (instead of Redux) and useRef hooks to be
          able to clean and repopulate the JSON editor when there was a change.
        </p>

        <div className='text-center'>
          <ButtonGroup className='mt-4'>
            <Button variant='primary' onClick={() => setSlide('')}>
              Back
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Slide>
  )
}
