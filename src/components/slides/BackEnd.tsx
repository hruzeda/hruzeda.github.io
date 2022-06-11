import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const BackEnd = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'BackEnd'}>
      <div>
        <h2>Back End</h2>

        <p>
          Although I started more as a front end dev, I've always had some back
          end work to do as well. In recent years, more work than I had on the
          front end. I've written basic PHP content management systems and REST
          web services, maintained a Ruby on Rails CMS, then moved on to work on
          a Java EE ERP (Java 1.6).
        </p>
        <p>
          After two years working with game development, I moved on to work on
          Django (Python) systems, and then finally back to Java web
          applications writen with Java 8, Spring and Struts.
        </p>
      </div>
    </Slide>
  )
}
