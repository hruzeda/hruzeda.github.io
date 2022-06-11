import * as React from 'react'

import { Slide, SlideProps } from '../CustomCarousel'

export const Java = (props: SlideProps) => {
  return (
    <Slide inProp={props.active === 'Java'}>
      <div>
        <h2>Java</h2>

        <p>
          I learned Java and a bit about Spring Framework and Hibernate back in
          2012 when I worked on Support Informática converting their ERP
          solution from Cobol/Delphi. I wrote JSP pages and their back ends,
          mirroring screens from the legacy app.
        </p>
        <p>
          A few years later I joined Daitan (now Encora) and started working on
          Java back end systems for audio conferencing systems. I worked on:
        </p>
        <ul>
          <li>
            Struts and Spring projects for company and customer facing
            applications
            <ul>
              <li>
                Route mapping, view controllers, validation patters, entity
                builders, JSP tags and tiles
              </li>
            </ul>
          </li>
          <li>
            REST web services written with Apache CXF, Spring Boot and RestEasy
            <ul>
              <li>
                Route mapping, Swagger documentation, exception handling,
                filters/interceptors and JWT authentication
              </li>
            </ul>
          </li>
          <li>
            EJB based core APIs, JPA entity mapping, PL/SQL procedures and data
            migrations
          </li>
          <li>
            Scheduling, bulk processing and provisioning systems using JMS and
            Quartz
          </li>
          <li>
            Tests using Jmeter, Postman, Selenium, TestNG, JUnit, mockito,
            powermock and JMockit
          </li>
          <li>
            Docker and docker-compose scripts for all the applications described
            above
          </li>
        </ul>
        <p>
          For the last 3 years, I've also been training interns, interviewing
          experienced Java EE developers to join the company, as well as giving
          support to production issues and CVE upgrades on various systems.
        </p>
      </div>
    </Slide>
  )
}
