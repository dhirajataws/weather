
Requirements
Create a “weather widget” editor that allows users to set up a widget that can then be embedded on any site.

Editor
The widget editor must have a form to allow a user to create a new widget. This form must include the following fields:

Title
Unit: metric or imperial
Show Wind: true or false
The widget editor must also display a list of already created widgets with their title and a snippet of code that allows that widget to be embedded.

Widget
The widget itself should be a piece of Javascript that reads the end user’s current location using navigator.geolocation, and retrieves the current weather conditions for that location using the Open Weather Map API.

The data the widget displays is determined by the settings in the editor; i.e. if I created a widget called “Imperial with Wind Data” and chose imperial units, and Show Wind, I should be able to embed that widget and see those two options reflected in the widget display.

Demo:
The application is deployed at
http://dhirajjenkinss3bucket.s3-website-us-east-1.amazonaws.com/reactapp/index.html

The above url is not able to fetch data from weather api in cloud. Needs cloud configured.

Description:
The Weather widget is created using React-Redux and React-thunk like middleware concepts. Concepts like Controlled
components, presentational or dump components are used as per needs. Features of both ES5 and ES6 are used
for showcase. For ex, both import and require are used.


steps followed are :
1. Mock provided used to break UI into components
2. Minimal representation of UI state is identified
3. Store with Provider component is chosed for state management
4. reducers, actions, smart and dump components are identified.
5. Test cases written
6. Components writtend and tested
7. Few warnings around use of PropTypes

Build the application:
To build a production version use:
npm install
webpack --config webpack.config.prod.js

To build a development version use:
npm install
npm start
or webpack

port used is 8090

To run unit test:
npm test

To deploy the application in cloud

after the build is done, the public folder and index.html needs to be send to s3 with below command lines.

aws s3 sync /Users/dhiraj.kumar/weather_test/weather/build/public s3://dhirajjenkinss3bucket/reactapp/public

aws s3 cp  /Users/dhiraj.kumar/weather_test/weather/build/index.html s3://dhirajjenkinss3bucket/reactapp/index.html;

s3 react app url http://dhirajjenkinss3bucket.s3-website-us-east-1.amazonaws.com/reactapp/index.html

Limitation:

1. Needs an API key to be replaced.config folder has apikey.js file which holds the apikey.
This needs to be changed with a real one. As of now it is only a dummy value for demo and not working.
2. TDD approach is taken only selectively. More test cases for unit testing can be added.
3. May need to enable geo location from privacy settings in chrome
4. Constants should be used for hard coded values in action class and reducers like 'CHANGE_TITLE'
5. For better User experience, images can be added for sunshine , rainy weather etc
6. Timer is set to update the weather condition. It needs to be tested though.
7. URL changes to junk characters like http://localhost:8090/#/?_k=36e2h2. This can be corrected with
right configuration for web server


Enhancements:
If further optimization is required, then the files can be delivered gzipped.
ie, servergzipped file in production.
https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a