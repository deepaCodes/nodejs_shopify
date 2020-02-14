# Node.JS Shopify App

NodeJS Shopify App framework built on Node Express and Mongo


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

MongoDB setup in your machine

### Installing and running

A step by step series of examples that tell you how to get a development env running

Install dependency packages from package.json

This app uses handlebars as it’s template engine.

```
cd ./nodejs_shopify
npm install

update shopify api key and access token under config/

default port is 3000, you can change by passing the port number as environment variable( process.env.PORT)

Start application:

npm start

and access app by visiting http://localhost:3000

To start the app in debug mode simply run: npm run debug. 

This will start the app on port 3000 with debugging turned on. You can access the app by visiting http://localhost:3000


To clean the app (removing node_modules)

npm install rimraf -g
rimraf node_modules


```

## Author

* **Deepa Aswathaiah**

