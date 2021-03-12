# ReactApp-With-Authentication
This is *fullstack* project integrating **MongoDb** database with **React** application via **GraphQl** server.

### Getting started
#### Server-side application
```
$ cd server
$ npm i
$ npm run server
```
#### Client-side application
```
$ cd client
$ npm i
$ npm run start
```

### Example usage

Let's see an example, you can run the graphql server using `npm run server`, and go to [http://localhost:4000/graphql](http://localhost:4000/graphql)

```graphql

mutation createUser {
  createUser(
    firstName: "Jack"
    lastName: "Bauer"
    emailAddress: "jack@ctu.com"
    password: "cv%hg78khh98"
  ) {
    firstName
    lastName
    emailAddress
  }
}
query signinquery {
  signIn(emailAddress: "jack@ctu.com", password: "cv%hg78khh98") {
    isMatch
  }
}

```
**Note** In this Project MongoDB cloud atlas database is used, so you need to enter database credentials in .env inside server folder.
