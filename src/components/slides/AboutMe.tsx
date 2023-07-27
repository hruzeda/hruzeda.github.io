import * as React from 'react'

import { SlideContext } from '../../pages/index'
import { Slide } from '../CustomCarousel'

export const AboutMe = () => {
  const { slide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'AboutMe'}>
      <div>
        <h2>About Me</h2>
        <p>
          I started working with simple website layouts in HTML and CSS back in
          2010. Since then, I have worked with lots of other languages like PHP,
          Ruby, Python, Java and frameworks like Rails, Django, Struts and
          Spring.
        </p>
        <p>
          In the last 6 months, I've been working for B-Yond helping maintain
          their backend services, frotend app and end to end tests using
          Javascript, Python and a little bit of Scala. Before that, I've worked
          for five years outsourced to an audio conferencing company as an
          extension of their development team. We worked with Java EE apps,
          keeping them up to date with new features and standards and replacing
          legacy apps.
        </p>
      </div>
    </Slide>
  )
}
