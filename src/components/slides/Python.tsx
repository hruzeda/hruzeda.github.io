import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const Python = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'Python'}>
      <div>
        <h2>Python</h2>

        <p>
          Back in 2014, I worked for three months on a Django remote learning
          platform where I recognized a lot of similarities from my short
          experience with Ruby on Rails in 2010. I worked on data migrations,
          asynchronous tasks written for Celery and integrations with a customer
          relation system.
        </p>
        <p>
          In 2020, a friend from that short experience invited me to help
          maintain a{' '}
          <a href='https://cardapex.com.br' target='_blank'>
            food delivery app written in Python with Django
          </a>
          . I worked with him for approximately 2 years, writing the work shift
          planning pages, the delivery route and time estimate calculation
          (using paid Google Maps services) as well as the delivery
          settings/limitations pages on the admin panel. I also wrote some of
          the shopping cart REST API, as well as other features in the front
          end. Everything with unit test coverage and data migration scripts.
        </p>
      </div>
    </Slide>
  )
}
