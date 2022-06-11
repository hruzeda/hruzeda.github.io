import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const Vue = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'Vue'}>
      <div>
        <h2>Vue</h2>

        <p>
          Back in 2020, when the pandemic started, I was working with a friend
          on a{' '}
          <a href='https://cardapex.com.br' target='_blank'>
            food delivery app written in Python with Django
          </a>
          .
        </p>
        <p>
          He asked me to help him maintain the app and build new features. One
          of these was a module for the administrator panel that customers use,
          where they would manage orders made by their own customers sitting at
          tables in the actual restaurant.
        </p>
        <p>
          It was my first contact with Vue but, coming from a React background,
          it was quite a smooth transition. I wrote high order components, Vue's
          event emitting and context APIs and used a polling solution to keep
          the UI syncronized with new orders coming from the back end.
        </p>
        <p>
          The user could manage tables, edit orders and, the trickiest feature I
          wrote: pairing product options, like ordering 4 halves of 4 different
          pizzas. Those "halves" needed to be paired based on a setting between
          most and least expensive options, with their actual and calculated
          prices displayed to the end user.
        </p>
        <p>
          I also used an internationalizaiton library to display all labels so
          my friend could, eventually, also sell to restaurants in Canada where
          he lives now.
        </p>
      </div>
    </Slide>
  )
}
