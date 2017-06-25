#### Dogbytes

# fetch

fetch is a new async api in evergreen browsers that provides a promise approach to http. Before fetch, there was XMLHttpRequest to make a async request to a server in the browser or `xhr`. As the JavaScript language released new patterns to manage async requests, the xhr was becoming a legacy api.

JQuery made the `$.ajax` and as browsers improved and began to adopt EcmaScript 2015 features, upgrading or providing a different way to access servers was possible. So the `fetch` was born, it provides more flexibility and more features than `xhr`.

## Support

fetch is supported in all major browsers except IE.

> See Browser Compatibility - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## Implementation

In order to use fetch, you must be familiar with the promises api. https://promisesaplus.com/.

```js
fetch(`https://example.com/api/widgets`)
  .then(function (results) {
    return results.json()
  })
  .then(function (widgets) {
    console.log(JSON.stringify(widgets, null, 2))
  })
```

Here we are making a get request to a widgets resource on example.com, which returns a promise with a then method that we pass a handler function to. This handler function will get invoked when the response is returned and it will pass the response object to the function. In our function we are using the response object's json function to convert the body of the response to JSON and return it through the promise chain. On the next then handler, we pass a function to will accept the data of the return json function and we are logging it to the console.

The response object has several helper methods to help transform the body to specific data structures.

- json // handles json data structures
- text // handles text data structures
- blob // handles binary data structures - link images, audio, and video

## Customizing the Request Object

If you want to customize the fetch request, you can create your own Request object and specify all of the attributes, or you can pass options object into the fetch method as a second argument, with that options object you can set attributes of the request. For Example, lets add a Authorization Header.

```js
fetch('https://example.com/api/widgets', {
  headers: new Headers({
    Authorization: `Bearer ${token}`
  })
})
.then(function (results) {
  if (!response.ok) {
    throw new Error(response.text())
  }
  return results.json()
})
.then(function (widgets) {
  console.log(JSON.stringify(widgets, null, 2))
})
.catch(function (err) {
  console.log('ERROR: ', err)
})
```

With this fetch command we are passing the token in as an authorization header so the server can authenticate the request.

> It is important to note that the server may return an error, but the fetch method does not throw and error if the server returns a response. It is up to the developer to figure out how to handle that error.

## Sending data to a server using the fetch method

By customizing the Request object we can send data to the server using a different request method than the default `GET`.

```js
fetch('https://example.com/api/widgets', {
  method: 'POST',
  headers: new Headers({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({ name: 'Widget42', price: '1.00'})  
})
.then(function (results) {
  if (!response.ok) {
    throw new Error(response.text())
  }
  return results.json()
})
.then(function (results) {
  console.log(JSON.stringify(results, null, 2))
})
.catch(function (err) {
  console.log('ERROR: ', err)
})
```

## Other Notes

the fetch api is also supported on NodeJS using userland modules. One of the most
robust userland modules is called `isomorphic-fetch`. This module will determine
the environment and run the appropriate code. It also includes polyfills to support
legacy browsers like IE.

## Exercises

### Exercise 1

> Using glitch fork this project and modify the index.js file to complete each exercise.

Use fetch to request a list of users using the api /api/users and print them to the console

### Exercise 2

Use fetch to post a new user user using the api /api/users, a user should have a username and password

### Exercise 3

Use fetch to get a list of users then filter the user you just posted and print it to console

### Exercise 4

Use fetch to get a resource that does not exist and handle the error using GET /api/error

### See Also

* [Promises](https://dogbytes-promises.glitch.me)


### Was this dogbyte helpful?

We would like to hear from you [Contact Us](mailto:dogbytes@jackrussellsoftware.com)
