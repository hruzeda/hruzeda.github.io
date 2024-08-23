import * as React from 'react'

import { SlideContext } from '../../pages/index'
import { Slide } from '../CustomCarousel'

export const AboutMe = () => {
  const { slide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'AboutMe'}>
      <div>
        <p>
          Starting in 2010, I have spent the last 15 years working with multiple
          technology stacks, including Java, Python, PHP, Ruby, and JavaScript,
          as well as popular frameworks like Next.js, Rails, Django, Spring, and
          FastAPI.
        </p>
        <p>
          I am also experienced in writing various types of tests and
          simulators, setting up CI pipelines, creating Docker/Compose scripts,
          and building Grafana/Splunk dashboards, among many other tasks.
        </p>
        <p>
          In the past few years, I worked for{' '}
          <a href='https://www.b-yond.com/' target='_blank'>
            B-Yond
          </a>{' '}
          helping to maintain their network diagnostic tool (called Agility)
          using TypeScript, React, Next.js, Python, and FastAPI.
        </p>
        <p>
          One recent project I worked on was a SQL Query Writer LLM app that
          used LangChain, OpenAI, and a template prompt to answer complex user
          queries.
        </p>
      </div>
    </Slide>
  )
}
