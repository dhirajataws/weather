
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

Build the application:
To build a production version use:
npm install
webpack --config webpack.config.prod.js

To build a development version use:
npm install
npm start
or webpack

To run unit test:
npm test

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