# Who Am I:

Starting in 2010, I have spent the last 15 years working with multiple technology stacks, including Java, Python, PHP, Ruby, and JavaScript, as well as popular frameworks like Next.js, Rails, Django, Spring, and FastAPI.

I am also experienced in writing various types of tests and simulators, setting up CI pipelines, creating Docker/Compose scripts, and building Grafana/Splunk dashboards, among many other tasks.

In the past few years, I worked for [B-Yond](https://www.b-yond.com/) helping to maintain their network diagnostic tool (called Agility) using TypeScript, React, Next.js, Python, and FastAPI.

One recent project I worked on was a SQL Query Writer LLM app that used LangChain, OpenAI, and a template prompt to answer complex user queries.

# Experiences and projects:

In this page I'll just summarize my larger experiences and list some shorter experiences that I think are worth mentioning. More details and specific achievements  can be found in the dedicated sections on the navigation menu.

I started programming in an [advertising agency](https://www.agenciazum.com.br/) back in 2010 customizing [PHP](https://github.com/hruzeda/phpcms) templates to different Photoshop layouts.

Using MySQL, I learned how the basic CRUD requests worked and how to consume Web Services via REST and SOAP to integrate with payment systems like PayPal.

I then had a short experience of around six months with Ruby on Rails, to maintain the official [website](http://www.lencoispaulista.sp.gov.br/) for the city I live in, a project that I later had to entirely convert to PHP when I decided to leave the agency to work with ERPs and desktop applications written in Cobol and being converted to Java EE.

While participating in an internal training to learn Cobol and working with the Java conversion team, I rewrote the [company website](http://supportinformatica.com.br) and most of the e-mail templates used by the system.

Around 2012 I left for [another company](https://www.mstech.com.br/), where I worked for 2 years building educational Flash games with Actionscript 3, Apache Flex and Adobe AIR. I was practicing design patterns and tried to create a framework the whole team could use to build cross platform 2D tiled games using the [Starling Framework](https://gamua.com/starling/). I designed an entity pattern for NPCs, dialogues and cutscenes, wrote a path finding algorithm for touch coordinates and created a cross platform Tile Map Editor for that framework.

There was also another map rendering alternative for isometric games, without using tiles or the editor. It distributed nodes over any image, identifying empty spaces by analyzing the bitmap data. Coupled with the same path finding algorithm, it created game visuals like [Legend of Mana](https://store.steampowered.com/app/1175830/Legend_of_Mana/) by overlaying flat textures and placing the player between them.

After Flash's support got cut off, I ported a small sample of that code to [CreateJS using Javascript](https://github.com/hruzeda/museudavida) and to [Cocos2d using C++](https://gitlab.com/ruzeda/isometric-uzeda) to explore alternatives.

For period after that I worked on smaller independent projects with Java 8, PHP, [Python with Django](https://www.cardapex.com.br/) until I started working outsourced by Encora to a Boston based conferencing company.

I worked for Encora for five years, so I'll go over more details for that experience on the Java and React sections, but one short experience worth mentioning here was that I created a simulator/replacement DLL for a UI extension we maintained for the old desktop Webex communication client.

The extension proxied audio streams coming from the user's devices through third party media servers (Dolby) to enhance audio quality and was written on C++.NET.
Part of this integration was handled by a DLL provided by this third party and we needed a way to automate tests with it and mock error codes.

In 2022 I moved on to another conferencing-related company called B-Yond, where I used Python, FastAPI, React and Next.js to help maintain a stack of projects that analyses packet capture files and classifies/labels messages displaying the call flow as sequence and topology diagrams. More details on the dedicated Python and React sections.

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
