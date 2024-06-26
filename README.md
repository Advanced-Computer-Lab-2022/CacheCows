
# Rubix

Rubix is educational website for adults that offers a personalized learning experience.

The website includes challenges that increase user's learning experience. It offers services for several stakeholders which are Instructors, Corporate Trainees, and Individual Trainees. The website is also monitored by administrators with specific roles and accesses.



## Framework Tech Stack

Website is created using MERN Stack :

**Client:** React

**Server:** Express.js and Node.js (V16)

**Database** : MongoDB 

**Languages** : HTML, CSS, JavaScript

# Build Status

Project can currently run only on localhost, it is still not be deployed. 
Moreover, RUBIX achieves the functionalities mentioned below, except the functionality of the progress bar (40) and it is currently being developed. Hence, the functionality of receving results works ok as requested but depends on calculating the progress in the course so it can only appear when a cindidate finsihes the course.
Some changes to the UI are also planned to done as following : Change profile cards to be in scrollable integrated pages through mui, reduce navigation through pages by showing more info in the profile, and applying changes suggested by projet manager. 
Features added inlcude the usage of MUI elemtns for frontend, using API for more proffesional usgae like stripe and nodemailer. Also development of specific proffesional logo and color template.

Functionalities : 

<img src="/reqs.png" alt="Alt text" title="Optional title">

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



## Server-side usage

Prepare your secret
run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)
####  in the root level
```
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
Start
$ cd server   // go to server folder
$ npm i       // npm install packages
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```


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


Make sure you have json webstoken as we have 
"jsonwebtoken": "^8.5.1",

#Backend Running Script 
to run the backend on the specified port, run the command  
### `$ npm run server`

it should show up in the terminal like this 

<img src="/terminal running backend.png" alt="Alt text" title="Optional title">




# Frontend 

## Initialization


Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

After installing react as mentioned above, frontend main structure is created using React, and this is done by typng the following command in the terminal 

`npx create-react-app frontend `
which will create a new folder called frontend with the basic structure. Make sure the port used for frontend is 3000 or change it from package.json file in the frontend folder

##  Frontend Structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, icons, and logo
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `context` - This folder for authorization contexts
    - #### `hooks` - This folder is used for login, logout, and signup functionalities. This hook is called in the login and signup pages
    - #### `pages` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
    - #### `App.css, styles.css, index.css`,  - These are some styling files
- #### `package.json` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined above in the README


# Use of Styled Components

 instead of using html classes and css files for styling each page we have used styled components library that enable us to write React Components that could inherit css styling from any html , mui or even another React component style and override that style.

## Frontend Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Make sure the ports number are correct for the backend and frontend in order to connect them both together, this can be achieved through the package-json file.


### `npm run build`

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. Our App runs on port 5000 in the backend, you can change this to suit your avaliable port through the .env file or from server.js

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


# Scripts 


    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"



# Dependencies

Some of the dependencies and libraries you need to have in order to run the project as it is supposed to be are the follwoing 



    "axios": "^1.2.0",
    "bcryptjs": "^2.4.3",
    "bootstrap": "^5.2.2",
    "classnames": "^2.3.2",
    "install": "^0.13.0",
    "jsonwebtoken": "^8.5.1",
    "jspdf": "^2.5.1",
    "mui": "^0.0.1",
    "muicss": "^0.10.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.6.0",
    "react-checkbox-dropdown": "^1.0.0",
    "react-dom": "^18.2.0",
    "react-fontawesome": "^1.7.1",
    "react-icons": "^4.6.0",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.3",
    "react-scripts": "^5.0.1",
    "react-toastify": "^9.1.1",
    "reactjs-popup": "^2.0.5",
    "reactstrap": "^9.1.5",
    "web-vitals": "^2.1.4"

###
After Fnishing all of these, you should have your package.json file looking like this :

<img src="/frontendpackagejson1.png" alt="Alt text" title="Optional title">
<img src="/frontendpackagejson2.png" alt="Alt text" title="Optional title">

# Frontend Process 

### 
This was the First Home page interface 
<img src="/frontendold.jpeg" alt="Alt text" title="Optional title">

Then Developed into this 
<img src="/frontendnow.png" alt="Alt text" title="Optional title">

And Now it is this  

<img src="/frontendnow2.png" alt="Alt text" title="Optional title">



# Tokens and local Storage 
whenever a user logs in, a token is created and passed to the backend to verify the user and determine his access, In the next screenshot you can find the user data that are stored in the console, these values are retrieved from the database and keep passed through the website to retrieve user's correct information only. This Also creates a second layer of protection in the frontend as only the authorized user gets to access the allowed pages and information. 

<img src="/consoleexample.png" alt="Alt text" title="Optional title">

This is the local storage which also stores the user info, and it causes the information to remain even when the user refreshes the page. 

<img src="/localstorage.png" alt="Alt text" title="Optional title">

You can find that the user id appears in the url and passed through the pages so the database can retrieve specifically this users pages and information

 <img src="/userid.png" alt="Alt text" title="Optional title">

This piece of code in the login hooks allows so 

### ` navigate(`/Home?userId=${user._id}`) `

A user can access Their Profile, and find all of the options they can do right away. 

# API and Communications

## REST API

REST is a set of standards used to build web APIs. To elaborate, an Admin resource can be represented using REST standards. To view all users, an API request using the GET method and the URI /admins would be sent to the server. To add a new user, an API request using the POST method and the same URI would be sent. To view a single user, an API request using the GET method and the URI /admins/:id would be sent, where :id is the ID of the user. Similarly, to update a user, an API request using the PUT method and the same URI would be sent. Finally, to delete a user, an API request using the DELETE method and the same URI would be sent.

## Nodemailer
The module used for sending emails to users ( emails containing for instance password recovery links, Pdf geneated certficates, etc.)
NodeMailer is a module for the Node JS applications that allow for easy email sending. Its API is simple: it requires you to create a transporter object, MailOptions Objects, and use the Transporter.sendMail method.
Here is how it is initiliazed to be used :
<img src="/nodemailer.png" alt="Alt text" title="Optional title">


## JSPDF
jsPDF is an open-source library for generating PDF documents using JavaScript. It provides multiple options to generate PDF files, with custom properties.
Here is a sample of the text generated on it
 - Note : Image must be encoded in base64, this is done through https://www.base64-image.de/  for example
 
 <img src="/jspdf.png" alt="Alt text" title="Optional title">
 
## Fetching Methods API
All methods created in the controller files shousl be added to the router file with their corresponding CRUD function. Then, these methods can be fetched to frontend in any component requested using the follwing as example : 

### 
```
const response = await fetch(/api/instructors/InstructorEditBiography?userId=${userId} , { 
           method: 'POST',`
           body: JSON.stringify(inst),`
            headers: {`
               'Content-Type' : 'application/json',`
                'Authorization': Bearer ${user.token} 
            }
    })
```




 Example of API Routes :

  <img src="/routes.png" alt="Alt text" title="Optional title">



## Hooks
Main Hooks used in this project are 
- #### `UseState` - We call it inside a function component to add some local state to it. React will preserve this state between re-renders. useState returns a pair: the current state value and a function that lets you update it. You can call this function from an event handler or somewhere else. 

  <img src="/usestate.png" alt="Alt text" title="Optional title">


- #### `UseEffect` - adds the ability to perform side effects from a function component.

  <img src="/useffect.png" alt="Alt text" title="Optional title">
- #### `Custom Login/Signup Hooks` - implements the functionality of a login from the client side, and does the storage in local storage

  <img src="/loginhook.png" alt="Alt text" title="Optional title">





## Run Locally

Clone the project

```bash
  git clone https://github.com/Advanced-Computer-Lab-2022/CacheCows
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

# Testing

## Backend

We used Postman to test our backend methods. Following is a code exmaple and how it is tested using postman 
<img src="/codetest1.png" alt="Alt text" title="Optional title">

Methods require Authorization token for users to use them, ofcourse methods like login, register, and forget password do not require so. To use other methods, enter the JsonWebToken of the user as a bearer token in the Authorization tab in postman, and then test your function. The example shows all of this.
<img src="/codetest2.png" alt="Alt text" title="Optional title">

And here is the method testing, note that no variables are entered in the body or params because this method does not require so. Else, they shouls be entered.

<img src="/codetest2.png" alt="Alt text" title="Optional title">


You can test the frontend using localhost running on port 3000 ( or the specified port in case you change it) and type the name of page you want to access. 

- Note : user must have access to this page 

## Frontend

Check this video to know how to use the website from server side

https://drive.google.com/file/d/1jiBDmPZyO0M6IfifGPNiRTnGwinZne-d/view?usp=sharing



# Code Style

 Having a clear and consistent coding style is critical for any project, as it helps ensure the codebase is maintainable and future changes can be implemented without unexpected issues. Code reviews are essential for this process, as they provide oversight to ensure all code is written to the same standards and any discrepancies are identified and resolved quickly.

**Pair Programming**


Pair programming is a great way to help a team work better. Working together allows the team to share ideas, come up with solutions quickly, and learn from each other. It also builds friendships and strengthens the team. Pair programming divides difficult tasks into smaller parts, and having someone review the work helps ensure accuracy. Ultimately, pair programming is an excellent tool for improving efficiency, productivity, and collaboration.



 **Namings**

 For function names, we use camelCase, starting with a lowercase character. Using concise, human-readable, and semantic names where appropriate.

When defining a class, we use PascalCase (starting with a capital letter) for the class name and camelCase (starting with a lowercase letter) for the object property and method names.
**Backend Namings**

We decided to use convention namings for methods to represent their functionlities in the backend, export with the same name, and call them in the router with their same name for ease of testing and usage. Main objects to route to from the server.js file are the following :

And for each route file, we use the correct method name from the controller

**Frontend Namigs**

Likewise, we name each component imported in a page with its first initial name, that also explains its functionality, and then create the router in App.js file using the same initial name, too, for easier navigation and tracing.

**Asynchronous Code**

Writing asynchronous code improves performance and should be used when possible. In particular, we use:
- async/await
We prefer using the simpler async/await syntax. Unfortunately, you can't use await at the top level unless you are in an ECMAScript module. CommonJS modules used by Node.js are not ES modules. If your example is intended to be used everywhere, avoid top-level await.

**Comments**

You will find explaining the implmentation of many methods and their applications.

You can find other comments on whole methods in code, this is because we intend not to delete a function that achieves different functionality because we might use some of its details later, so we comment it untel further usage.
In general, we use single-line comments to comment code. Writers must mark each line of the comment with //, so that it's easier to notice commented-out code visually. In addition, this convention allows to comment out sections of code using /* … */ while debugging.

**Operators**


*Strict equality operator*

Prefer the strict equality (triple equals) and inequality operators over the loose equality (double equals) and inequality operators.
```bash
name === "Omar";
age !== 25;
```

**Strings**

For inserting values into strings, use *template literals*

```bash

const name = "Omar";
console.log(`Hi! I'm ${name}!`);
```

**Errors**

You can find that we always output the type of error any function holds so that it helps in tracing and solving problems during implementation. Also, frontend uses these error to define the error type for the user to achieve responsivness.

*console.log()* is quiet used a lot for the similar intention, and it  encouraged to be used by the developer to trace errors and solve them.

**Use of Styled Components**
 instead of using html classes and css files for styling each page we have used styled components library that enable us to write React Components that could inherit css styling from any html , mui or even another React component style and override that style.

# Color Reference

Inspired by thr following scheme found on https://visme.co/blog/website-color-schemes/

<img src="/colorscheme.png" alt="Alt text" title="Optional title">



| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#a6607c](https://via.placeholder.com/10/a6607c?text=+) #a6607c |
| Example Color | ![#33266e](https://via.placeholder.com/10/33266e?text=+) #33266e |
| Example Color | ![#c77395](https://via.placeholder.com/10/c77395?text=+) #c77395 |
| Example Color | ![#5c41d3](https://via.placeholder.com/10/5c41d3?text=+) #5c41d3 |
| Example Color | ![#111111](https://via.placeholder.com/10/111111?text=+) #111111 |
| Example Color | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |

## Fonts

  font-family: "Poppins";
  
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

## Logo
Created by Omar Aboelazm

<img src="/rubixnew.png" alt="Alt text" title="Optional title">

# Credits 

We learned a lot about developing such project from this repo by Net Ninja 

https://github.com/iamshaunjp/MERN-Stack-Tutorial


# License

## CacheCows

Copyright (c) [2022] [CacheCows]

Permission to use this project is hereby requested from a CacheCow team member, free of charge, for any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

Software was developed by : Omar Aboelazm, Mohammed Shoheib, Ahmed Essam, Amr Balaha, Abdelrahman Khaled.

You can contact the Scrum Master through : omarashraff22@gmail.com

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Stripe

Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/


   Copyright [2022] [CacheCows]

   Licensed under the Apache License, Version 2.0;
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
