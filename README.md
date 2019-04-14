# express_mongo

API REST with CRUD actions for users data.

This API is implemented with express as a nodejs server and mongodb as a database.

To use this API, you need to have installed MongoDB

### User data schema

name: String

email: String

gender: String 

phone: String

## Start the server

First, you need to have started your MongoDB database. Usually this can be done by executing ```mongod``` 

To run the server you can execute one of the following commands:

- ```npm start``` to run the server in production mode
- ```npm run dev```to run the server with log information

Server will stand up in port `3000`


## API endpoints

### __Create new contact__

```
POST

http://localhost:3000/api/contacts
```

BODY
```json
{
    "name": "Johny Reland",
    "gender": "undefined",
    "email": "eljonas@mail.com",
    "phone": "666555444"
}
```

### __Get all contacts__
```
GET

http://localhost:3000/api/contacts
```

### __Contact information__

````
GET
POST
PUT
DEL

http://localhost:3000/api/contacts/<id>
````

## e2e test

To run e2e we use _newman_ framework.

To execute the test just run
````
npm run test-e2e
````

