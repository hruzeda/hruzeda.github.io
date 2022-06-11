import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const FrontEnd = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'FrontEnd'}>
      <div>
        <h2>Front End</h2>

        <p>
          In the last few years although I'm mainly working on back end code
          with very little tweaking of HTML/CSS, Javascript and jQuery here and
          there, I've been studying and working on personal projects with
          Angular, React, Redux, Vue, Typescript to avoid losing track of
          everything that has been happening since ES6.
        </p>
        <p>
          Moving into javascript back end, I've studied and written small apps
          using{' '}
          <a href='https://github.com/hruzeda/simplecms' target='_blank'>
            Express with Mongoose
          </a>
          , a few middlewares and Apollo GraphQL.
        </p>
      </div>
    </Slide>
  )
}
