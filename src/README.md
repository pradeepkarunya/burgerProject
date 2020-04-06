Overview
Quickstart
First, let's kick the tyres by launching the sample Repospective app bundled with this project to demo some of its best features:

npm run setup && npm start
Open localhost:3000 to see it in action.

Add a Github username to see Redux and Redux Sagas in action: effortless async state updates and side effects are now yours :)
Edit the file at ./app/components/Header/index.js so that the text of the <Button> component reads "Features!!!"... Hot Module Reloading gives you a feedback loop with your UI so smooth it's almost conversational!
Click your (newly emphatic) Features button to see React Router in action... Now you can share a direct link to that content privately over your LAN or globally addressable to any device, anywhere. Not bad for a locally-running Single Page App.
Time to build your own app: run

npm run clean
...and use the built-in generators to start your first feature.

Development
Run npm start to see your app at localhost:3000

Building & Deploying
Run npm run build, which will compile all the necessary files to the build folder.

Upload the contents of the build folder to your web server's root folder.

Structure
The app/ directory contains your entire application code, including CSS, JavaScript, HTML and tests.

The rest of the folders and files only exist to make your life easier, and should not need to be touched.

(If they do have to be changed, please submit an issue!)

CSS
Using tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

See the CSS documentation for more information.

JS
We bundle all your clientside scripts and chunk them into several files using code splitting where possible. We then automatically optimize your code when building for production so you don't have to worry about that.

See the JS documentation for more information about the JavaScript side of things.

SEO
We use react-helmet for managing document head tags. Examples on how to write head tags can be found here.

Testing
For a thorough explanation of the testing procedure, see the testing documentation!

Browser testing
npm run start:tunnel makes your locally-running app globally available on the web via a temporary URL: great for testing on different devices, client demos, etc!

Unit testing
Unit tests live in test/ directories right next to the components being tested and are run with npm run test.