# Who Am I:

I'm 32 years old now, single parent, living in the countryside of the state of São Paulo. It's not the ideal area for developer jobs so I tried moving closer to the capital back in 2015 but being away from my daughter I moved back to her hometown when the pandemic started and I've been working remotely since then.

For the last five years I've been working outsourced for a conferencing customer as an extension of their development team. We work mostly with legacy apps, slowly updating some and trying to replace others.

My scrum team, specifically, works with internal applications that the customer uses to schedule conferences, create users, manage access to those conferences and specific features as well as provisioning and synchronizing with other databases and third party services like Zoom and Cisco.

Front end apps are pretty outdated but, since they're not customer facing, updating them isn't always prioritized. Everytime we get a chance though, we try to create POCs consuming something from their APIs and experimenting with new techs.

# Experiences and projects:

I started programming in an advertising agency back in 2010 customizing [PHP](https://github.com/hruzeda/phpcms) templates to different Photoshop layouts and front end has been my passion ever since.
Using MySQL, I learned how the basic CRUD requests worked and how to consume Web Services via REST and SOAP to integrate with payment systems like PayPal.

I then had a short experience with Ruby on Rails to maintain the [website](http://www2.lencoispaulista.sp.gov.br/v2/) of the city I lived in, a project that I later had to convert to PHP when I decided to leave the advertising agency I worked on to progress my career and work with ERPs written in Cobol and being converted to Java EE.

While participating in an internal training to learn Cobol, and working with the Java conversion team, I wrote a PHP script that, when executed in a cron task, distributed internal e-mails to the all employees. I also rewrote most of the e-mail templates and the [company website](http://supportinformatica.com.br) 3 times (considering invitations I received a few years after leaving the company).

I then moved on to another company, where I worked for 2 years with educational Flash games written in Actionscript 3, Apache Flex and Adobe AIR. I was practicing design patterns and tried to create a framework the whole team could use to build cross platform 2D tiled games using the [Starling Framework](https://gamua.com/starling/).

I created a Map Editor with its own a file extension mapped on the OS (worked on Win/Mac/Unix via Adobe AIR, designed an entity pattern for NPCs and a path finding algorithm using the A\* algorythm. Afterwards I ported the same code to [CreateJS using Javascript](https://github.com/hruzeda/museudavida) and to [Cocos2d using C++](https://gitlab.com/ruzeda/isometric-uzeda).

There was also an alternative solution I wrote, also using the Starling Framework, for fake isometric games. It distributed nodes over any image, identifying empty spaces by analysing the bitmap data. Coupled with the same path finding algorythm, it created game visuals like [Legend of Mana](https://store.steampowered.com/app/1175830/Legend_of_Mana/) by overlaying flat textures and placing the player between then.

## Front End

In the last few years although I'm oficially working mainly on legacy apps and most of my work is back end with very little tweaking of HTML/CSS, Javascript and jQuery here and there, I've been studying and working on personal projects with Angular, React, Redux, Vue, Typescript to avoid losing track of everything that has been happening since ES6.

### Angular:

I studied Angular back in 2016 when I started helping the team that maintained a VOIP conferencing client that connected to media servers and local devices through a browser extension. The company I worked for asked us to run a small "dojo" as they called it so that every member of the team could investigate a small piece of the framework and share a little of the knowledge or experience they had. The app was already written so we only maintained it, Angular 2 was still being developed so we focused on Angular 1.

We never upgraded after that because, after talking with the customer, considering the learning curve for new developers, we chose to switch to React and write a new client using WebRTC (dropping the browser extension).

Among the improvements and bug fixes I worked on, the one I consider the most relevant was using Microsoft's Azure Communication Services SDK to enumerate devices and handle browser permissions, displaying warnings and errors to the user. I did that by creating a permissions service, storing the user's settings in the local storage to reuse in future calls and adding a few unit tests to cover all that new logic.

### React, React Native and Ionic:

My first contact with React was back in 2017 when I read about how it was created to replace PHP include files, but with a lifecycle. I decided to test it and wrote a small [CRUD using MongoDB](https://github.com/hruzeda/simplecms/).

A few months later our customer requested a new application to list and manage recordings of videoconferences.

I didn't get to create the project myself, but I programmed the login form, the navigation bar and the main collapsable panel for the recordings. I also had the chance to work with Material UI and to create high order components extending it and later, to work with Redux dispatching state changes to the store and updating other components.
After that, I volunteered to teach a React 101 training with a collegue. Functional components and react hooks weren't a thing yet.

On the following year, after lots of back end and infrastructure changes, the customer asked us to test third parties WebRTC SDKs with cross platfom solutions so they could drop the current mobile app and maintain a single application. That was when I first used react hooks and functional components.

I tested the React Native and Ionic solutions using Amazon Chime SDK, packaging the solutions with Android Studio, the emulator and my own phone. Though React Native isn't compatible with some of the dependencies of the SDK and would require more work, the Ionic solution worked almost flawlessly, except for the Screen Sharing feature which would require some platform specific code.

The client was satisfied and decided to go with Ionic, but the actual development was postponed and hasn't started yet.

While working on those projects, a friend of mine asked for my help in writing the UI for an [Web Service mocking solution](https://www.ffwdtec.com/copycat.html) that he has been working on for years now.

It's a simple application with only two forms, each one with lots of inputs but, because it's meant for developers, every form has a JSON tab they can switch to, where any changes made to the requests that mock their own Web Services are synchronized back to the inputs.

I used Typescript, I18n, React Bootstrap and Styled Components to write it, creating the component hierarchy using barrel exports. It was also the first time I used the useContext and useRef hooks to be able to clean and repopulate the JSON editor when there was a change.

### Vue:

Back in 2020, when the pandemic started, I was working with a friend on a [food delivery app written in Python with Django](https://cardapex.com.br).

He asked me to help him build a new module for the administrator panel that customers use, where they would manage orders made by their own customers sitting at tables in the actual restaurant.

It was my first contact with Vue but, coming from a React background, it was quite a smooth transition. I wrote high order components, Vue's event emitting and context APIs and used a polling solution to keep the UI syncronized with new orders coming from the back end.

The user could manage tables, edit orders and, the trickiest feature I wrote: pairing product options, like ordering 4 halves of 4 different pizzas. Those "halves" needed to be paired based on a setting between most and least expensive options, with their actual and calculated prices displayed to the end user.

I also used an internationalizaiton library to display all labels so my friend could, eventually, also sell to restaurants in Canada where he lives now.

## Back End

ALthough I started more as a front end dev, I

### Java:

I learned Java and a little bit about Spring Framework and Hibernate back in 2012 when I worked on Support Informática converting their ERP solution from Cobol/Delphi.

### Python:

### NodeJS

moving into javascript back end, I've also studied Node, Express and a few middlewares and even Apollo GraphQL.
