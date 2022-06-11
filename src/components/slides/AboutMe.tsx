import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const AboutMe = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'AboutMe'}>
      <div>
        <h2>About Me</h2>
        <p>
          I started working with simple website layouts in HTML and CSS back in
          2010. Since then, I have worked with lots of other languages and
          frameworks.
        </p>
        <p>
          In the last five years I've been working outsourced for an audio
          conferencing company as an extension of their development team. We
          work with Java EE apps, keeping them up to date with new features and
          standards and replacing legacy apps.
        </p>
        <p>
          My scrum team works mostly with internal applications that the
          customer uses to schedule conferences, create and secure users, manage
          access and specific features to those conferences, as well as
          provisioning and synchronizing with other databases and third party
          services like Zoom and Cisco.
        </p>
        <p>
          Every now and then we create small POCs consuming something from their
          APIs to try out new techs.
        </p>
      </div>
    </Slide>
  )
}
