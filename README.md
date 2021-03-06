# Authentication Project

## Topics

-   Authentication
-   Express Middleware
-   Password Hashing
-   Sessions
-   Cookies

## Description

Use `Node.js`, `Express` and `Knex` to build an API that provides **Register** and **Login** functionality using `SQLite` to store _User_ information. Make sure the password is not stored as plain text.

## Assignment

This project will be completed over two days.

## Part 1

>   due after completing the first module

### Database

-   [x] Create a database for `users` and their information

### Endpoints

| Method | Endpoint             | Description                                                                                                                                                                                                                                                                                             |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST` | `/api/auth/register` | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                                                             |
| `POST` | `/api/auth/login`    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new session for the user and send back a `'Logged in'` message and a cookie that contains the user id. If login fails, respond with the correct status code and the message: `'You shall not pass!'` |
| `GET`  | `/api/users`         | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in repond with the correct status code and the message: `'You shall not pass!'`.                                                                                                  |

-   [x] `POST` on `/api/auth/register`
-   [x] `POST` on `/api/auth/login`
-   [x] `GET` on `/api/users`

## Part 2

>   due after completing the second module.

-   [x] Add support for **sessions** and **cookies**, and use them to keep a record of logged in users across requests.

## Stretch Problem

-   [ ] Write a piece of **global** middleware that ensures a user is logged in when accessing _any_ route prefixed by `/api/restricted/`. For instance, `/api/restricted/something`, `/api/restricted/other`, and `/api/restricted/a` should all be protected by the middleware; only logged in users should be able to access these routes.
-   [ ] Build a React application that implements components to register, login and view a list of users. Gotta keep sharpening your React skills.
