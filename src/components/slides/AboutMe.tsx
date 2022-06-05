import * as React from 'react'

export const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I'm {new Date().getFullYear() - 1990} now, single parent, living in the
        countryside of the state of São Paulo. I started working with HTML and
        CSS back in 2010 on an advertising agency, but progressed through lots
        of other techs since then.
      </p>
      <p>
        For the last five years I've been working outsourced for an audio
        conferencing company as an extension of their development team. We work
        mostly with Java EE apps, slowly updating some and trying to replace
        others.
      </p>
      <p>
        My scrum team, specifically, works with internal applications that the
        customer uses to schedule conferences, create users, manage access and
        specific features to those conferences as well as provisioning and
        synchronizing with other databases and third party services like Zoom
        and Cisco.
      </p>
      <p>
        Front end apps are pretty outdated but, since they're not customer
        facing, updating them isn't always prioritized. Everytime we get a
        chance though, we try to create POCs consuming something from their APIs
        to try out new techs.
      </p>
    </div>
  )
}
