# rest-api-client-server-demo

## what this project is:
- This project is a demo of a client and a server, interacting with the help of REST API. It is built using express and axios.

### features 
- **separation of concerns**: the project is divided into a server file and a client file 
- **rest api design principles**: it is made with a major focus on rest api design principles
- **interaction and resource sharing**: the server contains a list of tech products that the client can do CRUD operations on, mimicing a small e-commerce interaction 

### tech used 
- **node.js**: the project is built upon node.js v13.14.0
- **express.js**: the server side uses express v4.17.1 
- **axios**: the client side uses axios v1.10.0
- **nodemon**: nodemon is also used in order to automatically update changes in server 

## why was the project made 
- in order to learn REST API principles
- and to learn CRUD operations with REST API

## major limitations 
- the project was built on windows 7, thereby limiting the use of latest versions of the used libraries and tools
- due to syntax conflict between the used node version (which used CommonJS) and DOM files (that use ES6), in order to add working frontend, separation of concerns would have been needed to be compromised
- it currently lacks a CLI input functionality, which i plan to rectify if the situation demands 