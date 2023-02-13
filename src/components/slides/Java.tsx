import * as React from 'react'

import { Slide } from '../CustomCarousel'
import { SlideContext } from '../../pages/index'

export const Java = () => {
  const { slide } = React.useContext(SlideContext)

  return (
    <Slide inProp={slide === 'Java'}>
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
          In the last few years there, I've also trained interns, interviewed
          experienced Java EE developers to join the company, as well as gave
          support to production issues and CVE upgrades on various systems.
        </p>
      </div>
    </Slide>
  )
}
