import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const Angular = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'Angular'}>
      <div>
        <h2>Angular</h2>

        <p>
          I studied Angular back in 2016 when I started helping the team that
          maintained a VOIP conferencing client that connected to media servers
          and local devices through a browser extension. The company I worked
          for asked us to run a small "dojo" as they called it so that every
          member of the team could investigate a small piece of the framework
          and share a little of the knowledge or experience they had. The app
          was already written so we only maintained it, Angular 2 was still
          being developed so we focused on Angular 1.
        </p>
        <p>
          We never upgraded after that because, after talking with the customer,
          considering the learning curve for new developers, we chose to switch
          to React and write a new client using WebRTC (dropping the browser
          extension).
        </p>
        <p>
          Among the improvements and bug fixes I worked on, the one I consider
          the most relevant was using Microsoft's Azure Communication Services
          SDK to enumerate devices and handle browser permissions, displaying
          warnings and errors to the user. I did that by creating a permissions
          service, storing the user's settings in the local storage to reuse in
          future calls and adding a few unit tests to cover all that new logic.
        </p>
      </div>
    </Slide>
  )
}
