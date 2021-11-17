# _MARVEL WEBPAGE_

#### By _**JOSE GIRALDO**_

#### _WEBSITE CONSUMING MARVEL API_

## Technologies Used

* _REACT_
* _JAVASCRIPT_
* _SASS_

## Description

_This project was created using hexagonal arquitecture because its easier to maintain over time, also separating our components and divide them for their function it's a good way to make future changes like using other tech or when someone new in the team have to work with the project_

## Scaffolding

```
src
└───assets --> Files png or svg.    
│
└───application --> all the logic that affects and define the logic of our aplication, constant, services etc...
│
└───presentation-layer --> All visual components 
│   └───home --> Where we are passing all our components to render it in app.js
└───infraestructure --> Handling interaction with the exterior
     └───repositories --> Making a request, parse data into a defined object
     └───http --> Check and centralize our API consuming made it by the server
```

## Content

Within the functions already implemented: filter, pager, add/delete favorite comic for an extra I added Search by name also it is full responsive.

## Run test
npm test -- App.test.js

## Setup/Installation Requirements

* _npm run_

## FireBase Deploy

https://fir-marvel-2ae73.web.app/