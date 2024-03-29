# Who Am I:

I started working with simple website layouts in HTML and CSS back in 2010. Since then, I have worked with lots of other languages like PHP, Ruby, Python, Java and frameworks like Rails, Django, Struts and Spring.

In the last 6 months, I've been working for B-Yond helping maintain their backend services, frotend app and end to end tests using Javascript, Python and a little bit of Scala.
Before that, I've worked for five years outsourced to an audio conferencing company as an extension of their development team. We worked with Java EE apps, keeping them up to date with new features and standards and replacing legacy apps.

# Experiences and projects:

I started programming in an advertising agency back in 2010 customizing [PHP](https://github.com/hruzeda/phpcms) templates to different Photoshop layouts and frontend has been my passion ever since.

Using MySQL, I learned how the basic CRUD requests worked and how to consume Web Services via REST and SOAP to integrate with payment systems like PayPal.

I then had a short experience with Ruby on Rails to maintain the [website](http://www2.lencoispaulista.sp.gov.br/v2/) of the city I lived in, a project that I later had to convert to PHP when I decided to leave the advertising agency I worked on to progress my career and work with ERPs written in Cobol and being converted to Java EE.

While participating in an internal training to learn Cobol, and working with the Java conversion team, I wrote a PHP script that, when executed in a cron task, distributed internal e-mails to the all employees. I also rewrote most of the e-mail templates and the [company website](http://supportinformatica.com.br) 3 times (considering invitations I received a few years after leaving the company).

I then moved on to another company, where I worked for 2 years with educational Flash games written in Actionscript 3, Apache Flex and Adobe AIR. I was practicing design patterns and tried to create a framework the whole team could use to build cross platform 2D tiled games using the [Starling Framework](https://gamua.com/starling/).

I created a Map Editor with its own a file extension via Adobe AIR (worked on any desktop platform), designed an entity pattern for NPCs and a path finding algorithm using the A\* algorithm. Afterwards I ported the same code to [CreateJS using Javascript](https://github.com/hruzeda/museudavida) and to [Cocos2d using C++](https://gitlab.com/ruzeda/isometric-uzeda).

There was also an alternative solution I wrote, also using the Starling Framework, for fake isometric games. It distributed nodes over any image, identifying empty spaces by analyzing the bitmap data. Coupled with the same path finding algorithm, it created game visuals like [Legend of Mana](https://store.steampowered.com/app/1175830/Legend_of_Mana/) by overlaying flat textures and placing the player between them.

After Flash's support got cut off, I moved on and wrote a few projects with Java EE, PHP, Python with Django until I started working outsourced by Encora to a Boston based conferencing customer.

A last short experience worth mentioning was the maintenance and development of a simulator/replacement for a DLL and UI extension we maintained of the old Webex communication client. It handled audio streams coming from the user's devices to get them through third party media servers and enhance quality and was written on C++.NET.

## Frontend

In the last few years, most of my work has been to backend API's and integrations (except for a one year experience with Angular), but I've started studying and working on personal projects with Angular, React, Redux, Vue.js, TypeScript to avoid losing track of everything that has been happening since ES6.
Since then, I worked on three front-end projects for my current customer written in TypeScript and React. Two of those I created from scratch, but only one is still being maintained to this day. The other one was a POC comparing React Native with Ionic.

Moving into javascript backend, I've studied and written apps using Express with Mongoose, a few middlewares and Apollo GraphQL. My first experience being a [Simple CMS](https://github.com/hruzeda/simplecms) I created based on a PHP template I used back on 2012.

### Angular:

I studied Angular back in 2016 when I started helping the team that maintained a VOIP conferencing client that connected to media servers and local devices through a browser extension. The company I worked for asked us to run a small "dojo" as they called it so that every member of the team could investigate a small piece of the framework and share a little of the knowledge or experience they had. The app was already written so we only maintained it, Angular 2 was still being developed so we focused on Angular 1.

We never upgraded after that because, after talking with the customer, considering the learning curve for new developers, we chose to switch to React and write a new client using WebRTC (dropping the browser extension).

Among the improvements and bug fixes I worked on, the one I consider the most relevant was using Microsoft's Azure Communication Services SDK to enumerate devices and handle browser permissions, displaying warnings and errors to the user. I did that by creating a permissions service, storing the user's settings in the local storage to reuse in future calls and adding a few unit tests to cover all that new logic.

### React, React Native and Ionic:

My first contact with React was back in 2017 when I read about how it was created to replace PHP include files, but with a lifecycle. I decided to test it and wrote a small [CRUD using MongoDB](https://github.com/hruzeda/simplecms/).

A few months later our customer requested a new application to list and manage recordings of videoconferences.

I didn't get to create the project myself, but I programmed the login form, the navigation bar and the main collapsable panel for the recordings. I also had the chance to work with Material UI and to create high order components extending it and later, to work with Redux dispatching state changes to the store and updating other components.
After that, I volunteered to teach a React 101 training with a collegue. Functional components and react hooks weren't a thing yet.

On the following year, after various backend and infrastructure changes, the customer asked us to test third parties WebRTC SDKs with cross platfom solutions so they could drop the current mobile app and maintain a single application. That was when react hooks and functional components were starting to become the norm.

I tested the React Native and Ionic solutions using Amazon Chime SDK, packaging the solutions with Android Studio, the emulator and my own phone. Though React Native isn't compatible with some of the dependencies of the SDK and would require more work, the Ionic solution worked almost flawlessly, except for the Screen Sharing feature which would require some platform specific code.

The client was satisfied and decided to go with Ionic, though the actual development was postponed.

While working on those projects, a friend of mine asked for my help in writing the UI for an [Web Service mocking solution](https://www.ffwdtec.com/copycat.html) that he has been working on for years now.

It's a simple application with only two views, used to create request samples that can be dynamically used for tests and demos. Each view has lots of inputs and, because it's meant for developers, a JSON tab the user can switch to, where any changes made are synchronized back to the inputs.

I used TypeScript, I18n, React and Styled Components to write it, creating the component hierarchy using barrel exports. It was also the first time I didn't use React Bootstrap, and it was when I got familiar with the useContext (instead of Redux) and useRef hooks to be able to clean and repopulate the JSON editor when there was a change.

### Vue.js:

Back in 2020, when the pandemic started, I was working with a friend on a [food delivery app written in Python with Django](https://cardapex.com.br).

He asked me to help him maintain the app and build new features. One of these was a module for the administrator panel that customers use, where they would manage orders made by their own customers sitting at tables in the actual restaurant.

It was my first contact with Vue.js but, coming from a React background, it was quite a smooth transition. I wrote high order components, Vue.js' event emitting and context APIs and used a polling solution to keep the UI syncronized with new orders coming from the backend.

The user could manage tables, edit orders and, the trickiest feature I wrote: pairing product options, like ordering 4 halves of 4 different pizzas. Those "halves" needed to be paired based on a setting between most and least expensive options, with their actual and calculated prices displayed to the end user.

I also used an internationalizaiton library to display all labels so my friend could, eventually, also sell to restaurants in Canada where he lives now.

## Backend

Although I started more as a frontend dev, I've always had some backend work to do as well. In recent years, more work than I had on the frontend. I've written basic PHP content management systems and REST web services, maintained a Ruby on Rails CMS, then moved on to work on a Java EE ERP (Java 1.6).

After two years working with game development, I moved on to work on Django (Python) systems, and then finally back to Java web applications writen with Java 8, Spring and Struts.

### Java:

I learned Java and a bit about Spring Framework and Hibernate back in 2012 when I worked on Support Informática converting their ERP solution from Cobol/Delphi. I wrote JSP pages and their backends, mirroring screens from the legacy app.

A few years later I joined Daitan (now Encora) and started working on Java backend systems for audio conferencing systems. I worked on:

- Struts and Spring projects for company and customer facing applications
  - Route mapping, view controllers, validation patters, entity builders, JSP tags and tiles
- REST web services written with Apache CXF, Spring Boot and RestEasy
  - Route mapping, Swagger documentation, exception handling, filters/interceptors and JWT authentication
- EJB based core APIs, JPA entity mapping, PL/SQL procedures and data migrations
- Scheduling, bulk processing and provisioning systems using JMS and Quartz
- Tests using Jmeter, Postman, Selenium, TestNG, JUnit, mockito, powermock and JMockit
- Docker and docker-compose scripts for all the applications described above

In the last few years there, I've also trained interns, interviewed experienced Java EE developers to join the company, as well as gave support to production issues and CVE upgrades on various systems.

### Python:

Back in 2014, I worked for three months on a Django remote learning platform where I recognized a lot of similarities from my short experience with Ruby on Rails in 2010. I worked on data migrations, asynchronous tasks written for Celery and integrations with a customer relation system.

In 2020, a friend from that short experience invited me to help maintain a [food delivery app written in Python with Django](https://cardapex.com.br). I worked with him for approximately 2 years, writing the work shift planning pages, the delivery route and time estimate calculation (using Google Maps API) as well as the delivery settings pages. I also wrote some of the shopping cart's REST API, as well as other features in the frontend. Everything with unit test coverage and data migration scripts.
