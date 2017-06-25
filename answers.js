// Demo 1

/**

fetch('/api/widgets')
  .then(res => res.json())
  .then(widgets => console.log('Demo 1 ', JSON.stringify(widgets)))

*/
fetch('/api/widgets')
  .then(res => res.json())
  .then(widgets => console.log('Demo 1 ', JSON.stringify(widgets)))

// Demo 2

/**

fetch('/api/echo', { method: 'POST', body: JSON.stringify({hello: 'world'})})
  .then(res => res.json())
  .then(results => console.log('Demo 2 ', JSON.stringify(results)))

*/

fetch('/api/echo', { method: 'POST', body: JSON.stringify({hello: 'world'})})
  .then(res => res.json())
  .then(results => console.log('Demo 2 ', JSON.stringify(results)))

// Exercise 1

// Use fetch to request a list of users using the api /api/users and print them to the console

fetch('/api/users')
  .then(res => res.json())
  .then(users => console.log('Ex1', JSON.stringify(users, null, 2)))

// Exercise 2

// Use fetch to post a new user user using the api /api/users, a user should have a username 
// and password

fetch('/api/users', { 
  method: 'POST', 
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({username: 'shemp', password: 'stooges'})
})
  .then(res => res.json())
  .then(status => console.log('Ex2 ', 
    JSON.stringify(status, null, 2)))



// Exercise 3

// Use fetch to get a list of users then filter the user you just posted and print it to console

fetch('/api/users', { 
  method: 'POST', 
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({username: 'shemp', password: 'stooges'})
})
  .then(res => res.json())
  .then(users => {
    return fetch('/api/users')
  })
  .then(res => res.json())
  .then(users => console.log('Ex3 ', 
    JSON.stringify(
      users.filter(u => u.username === 'shemp'), null, 2)))


// Exercise 4

// Use fetch to get a resource that does not exist and handle the error using GET /api/error

fetch('/api/error').then(res => {
  console.log(res.ok)
  return res.json()
})
.then(err => console.log(err))
