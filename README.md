
# Rubix

Rubix is educational website for adults that offers a personalized learning experience.

The website includes challenges that increase user's learning experience. It offers services for several stakeholders which are Instructors, Corporate Trainees, and Individual Trainees. The website is also monitored by administrators with specific roles and accesses.



## Tech Stack

Website is created using MERN Stack :

**Client:** React

**Server:** Express.js and Node.js (V16)

**Database** : MongoDB 

**Languages** : HTML, CSS, JavaScript



## Installation

Since The Project is MERN Stack, you need to have the following ready :

1- MongoDB cluster ready, have its link and add it in the .env file Here is Rubix's database link : mongodb+srv://omar_aboelazm:********@cachecowscluster.zhgys4t.mongodb.net/?retryWrites=true&w=majority

2- install NodeJs V.16 on your terminal from nodejs.org

3- Nodemon https://www.npmjs.com/

4- Express https://www.npmjs.com/

5- Mongoose https://www.npmjs.com/

6- React https://www.npmjs.com/

You will also need the following for some functionalities :

7- JWT ( Json Web Token ) user for Authentication and Authorization

8- Axios https://www.npmjs.com/ for frontend fetching from backend as an API

9- MUI and Bootstrap for some frontend components


# Setup - Backend

After Installing the aforementioned dependencies, write the command

### `npm init`
for initial setup.


Backend works as follows :

**Models** : store the schema in the database for the required model

**Controllers** : include the actual functionality on all the required methods and its interaction with database

**Routes** : in order to define to the program which method to fetch from which controller whenever needed. In Our Project there is a separate route for several models : Admins, Corporate Trainees, Individual Trainees, Reports, Reviews, Routes, Courses

**Middleware** : Middleware is software containing functions that execute during the request-response cycle and have access to both the request object (req) and the response object (res). Middleware is executed during the window between when a server receives a request and when it sends a response. We have Authentication Middleware that basically decrypts the JWT and makes sure the access is authorized for each specific user, it also protects the backend by allowing access to only specified user. This is achieved by the following which you can find in each router : " const { protect } = require('../middleware/AdminAuthMiddleware.js')" then "router.use(protect)" above all the controller functions we need to protect.

**config** : config file holds the configuration for our Database, it connects the link we added in the .env file to the environment using mongoose

**server.js** file, where the actual application run through scripts mentioned. Here, the connection with database is required from the config file, the port is specefied ( Our program's backend runs on port 5000 you can change this here or either in the .env file), require express to launch, and then use all the routes we created.


## API Reference

Examples for API : 
Note : Our App runs on port 5000 in the backend, you can change this to suit your avaliable port through the .env file or from server.js
#### Get all items

```http
  GET http://localhost:5000/api/admins/getInstructors
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` |  Server.js files search admins, and find that it should route to 'adminroutes', when it reaches this file, it starts searching for the control names " getInstructors " then goes to the controller files to fetch this method |

#### Update item

```http
  PUT http://localhost:5000/api/indvtrainee//updateindvtrainee/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of trainee to fetch and update |




## Backend Scripts

we’ll add some dependencies with 
### `$ npm i express mongoose body-parser config` 
Or to directly install all the packages 
### `$ npm i` 
express: Is our main framework

mongoose: Is used to connect and interact with MongoDB

config: This lets you define default parameters for your application

we’ll add nodemon as a dev dependency. Install it with `$ npm i -D nodemon` . To use nodemon, add "app": "nodemon app.js" to your scripts tag under the package.json file.
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. The app.js is the entry point for the application. It is also important to define a start script here with "start": "node app.js". This will define the start script of the application.

After all, make sure your package.json should look like this:

<img src="/Package.png" alt="Alt text" title="Optional title">
# IMAGE HERE# 

Make sure you have json webstoken as we have 
"jsonwebtoken": "^8.5.1",

#Backend Running Script 
to run the backend on the specified port, run the command  
### `$ npm run server`

it should show up in the terminal like this 

<img src="/terminal running backend.png" alt="Alt text" title="Optional title">


## Frontend

