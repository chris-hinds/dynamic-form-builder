# Getting Started with the Dynamic Form Builder

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Description
This repository contains a basic dynamic form builder built with create react app and utilising the react-hook-form library.

Whilst the components are designed and structured to be re-useable the code heavily focusses on the requirements which were primarily around required form fields and the ability to dynamically require a form field based on a previous select value.

### Improvements
Given more time I would improve upon the following;

- Form schema, adding the ability to use other validation techniques and not just required fields
- Error handling, currently the application will crash if not all the correct formdata is included, i.e. form title, etc
- Unit tests
- Styling, would most likely use a styled library
- Input sanitisation
