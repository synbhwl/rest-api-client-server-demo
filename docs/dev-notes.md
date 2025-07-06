# creating a server 
- imported the express library, express always runs in the server side 
- created an app object to work with
- app.use lets us define middleware functions
- express.json() is a built in middle ware to parse the requests from JSON to js objects 
- so we app.use(express.json())

## whats route 
- a route tells what to do with the request
- eg: if a user sends a GET request to path /users, then what to do?
- so we write 
```
app.get('/users', (res, req)=>{
    res.send('I found your request');
});
```
- (res, req)=>{} are handler functions because they handle the logic

## whats listen
- finally a port must be reserved for the server to sit there and listen to the req and all
- so we write 
```
app.listen(port, ()=>{
    console.log('aal iz wel')
});
```

# creating a client
- import axios, which is a client side library to communicate with a server
- always await the axios.get response because otherwise it will only retutn a promise 

## how to access a specific thing in response.data
- use map method if response.data is an array
- like we wanna get product names - response.data.map(products => product.name) where each element of the list becomes product and hence their names can be accessed

## mistakes to avoid 
- 204 wont show the reponse, if debugging use 200 instead
- dont do res.data.data unnecessarily. the message inside the js object already has the msg string
- dont use delete on arrays as they leave a hole, use splice(start, number_of_items) instead
- dont take error unseriously, they'll f u up during debugging, always write error messages in the go
- use triple ===

## very important lessons
- express is sequential, it doesnt care if you have written a specific route for a specific thing, if you have products/:id before product/filter, it'll take the filter as the id
- when nothing seems to be wrong, and still u getting a 500 error saying a parameter isnt defined, check the damn saparators. are ya using commas in filtering instead of &&
