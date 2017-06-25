// Demo 1

/**

fetch('/api/widgets')
  .then(res => res.json())
  .then(widgets => console.log('Demo 1 ', JSON.stringify(widgets)))

*/

// Demo 2

/**

fetch('/api/echo', { method: 'POST', body: JSON.stringify({hello: 'world'})})
  .then(res => res.json())
  .then(results => console.log('Demo 2 ', JSON.stringify(results)))

*/

// Exercise 1

// Use fetch to request a list of users using the api /api/users and print them to the console

// Exercise 2

// Use fetch to post a new user user using the api /api/users, a user should have a username 
// and password

// Exercise 3

// Use fetch to get a list of users then filter the user you just posted and print it to console


// Exercise 4

// Use fetch to get a resource that does not exist and handle the error using GET /api/error

