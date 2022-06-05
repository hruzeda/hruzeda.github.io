import * as React from 'react'

export const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I'm {new Date().getFullYear() - 1990} now, single parent, living in the
        countryside of the state of São Paulo. I started working with HTML and
        CSS back in 2010 and worked with lots of languages and frameworks since
        then.
      </p>
      <p>
        In the last five years I've been working outsourced for an audio
        conferencing company as an extension of their development team. We work
        with Java EE apps, keeping them up to date with new features and
        standards and replacing legacy apps.
      </p>
      <p>
        My scrum team works mostly with internal applications that the customer
        uses to schedule conferences, create users, manage access and specific
        features to those conferences as well as provisioning and synchronizing
        with other databases and third party services like Zoom and Cisco.
      </p>
      <p>
        Although most front end apps are not customer facing, every time we get
        a chance we create small POCs consuming something from their APIs to try
        out new techs.
      </p>
    </div>
  )
}
