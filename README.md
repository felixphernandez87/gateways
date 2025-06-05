# gateways

Steps to run:
 1. Install nodejs
 2. npm i
 3. install MongoDB
 4. npm run dev
 5. import gateways.postman_collection file into Postman

## New Login Route

POST `/api/auth/login` with JSON body `{ "username": "admin", "password": "password" }` returns a token when credentials are valid.

The default credentials can be changed by setting the `ADMIN_USER` and
`ADMIN_PASS` environment variables (see `.env.example`).

## Product Listing

GET `/api/products` returns all stored products.

## User CRUD

The API exposes endpoints under `/api/users` to manage user records:

- `GET /api/users` - list all users
- `GET /api/users/:id` - retrieve a single user by id
- `POST /api/users` - create a user
- `PUT /api/users/:id` - update a user
- `DELETE /api/users/:id` - remove a user
