# FlowwaiNodejsProject-sundharesan 
setup instruction 
npm init - y 
npm install express mongoose nodemon  bcrypt 

Transactions API Documentation
Below is an API documentation for the routes you provided, which defines the HTTP endpoints, methods, request body, response formats, and any relevant details for each endpoint.

Transactions API Documentation
http://localhost:3000/transactions

Create a Transaction
POST /transactions
Create a new transaction (either income or expense).

{
  "type": "income/expense",
  "category": "string",
  "amount": "number",
  "description": "string"
}
  
Response:
201 Created: Returns the created transaction object.
400 Bad Request: If validation fails.

2. Get All Transactions
GET /transactions
[
  {
    "_id": "64c123abc45678d90e12f345",
    "type": "income",
    "category": "salary",
    "amount": 2000,
    "description": "October salary",
    "__v": 0
  },
  {
    "_id": "64c124bcf56789e01f23g456",
    "type": "expense",
    "category": "groceries",
    "amount": 150,
    "description": "Weekly groceries",
    "__v": 0
  }
]

Below is an API documentation for the routes you provided, which defines the HTTP endpoints, methods, request body, response formats, and any relevant details for each endpoint.

Transactions API Documentation
Base URL:
bash
Copy code
http://localhost:3000/transactions
Authentication:
JWT Token: Some endpoints may require a valid JWT token for access. Tokens can be obtained by logging in via /transactions/signIn.
Authorization Header: Authorization: Bearer <token>
1. Create a Transaction
POST /transactions
Description:
Create a new transaction (either income or expense).

Request Body (JSON):
json
Copy code
{
  "type": "income/expense",
  "category": "string",
  "amount": "number",
  "description": "string"
}
Field	Type	Description
type	String	Required. "income" or "expense"
category	String	Required. Transaction category
amount	Number	Required. Transaction amount
description	String	Optional. A brief description of the transaction
Response:
201 Created: Returns the created transaction object.
400 Bad Request: If validation fails.
Example Response:
json
Copy code
{
  "_id": "64c123abc45678d90e12f345",
  "type": "income",
  "category": "salary",
  "amount": 2000,
  "description": "October salary",
  "__v": 0
}
2. Get All Transactions
GET /transactions
Description:
Retrieve all transactions (income and expenses).

Response:
200 OK: Returns an array of all transactions.
500 Internal Server Error: If an error occurs.
Example Response:
json
Copy code
[
  {
    "_id": "64c123abc45678d90e12f345",
    "type": "income",
    "category": "salary",
    "amount": 2000,
    "description": "October salary",
    "__v": 0
  },
  {
    "_id": "64c124bcf56789e01f23g456",
    "type": "expense",
    "category": "groceries",
    "amount": 150,
    "description": "Weekly groceries",
    "__v": 0
  }
]
3. Get Transaction by ID
GET /transactions/:id
{
  "_id": "64c123abc45678d90e12f345",
  "type": "income",
  "category": "salary",
  "amount": 2000,
  "description": "October salary",
  "__v": 0
}
200 OK: Returns the requested transaction object.
404 Not Found: If the transaction is not found.
500 Internal Server Error: If an error occurs.
4. Update a Transaction
PUT /transactions/:id
{
  "_id": "64c123abc45678d90e12f345",
  "type": "income",
  "category": "bonus",
  "amount": 2500,
  "description": "Annual bonus",
  "__v": 0
}

Below is an API documentation for the routes you provided, which defines the HTTP endpoints, methods, request body, response formats, and any relevant details for each endpoint.

Transactions API Documentation
Base URL:
bash
Copy code
http://localhost:3000/transactions
Authentication:
JWT Token: Some endpoints may require a valid JWT token for access. Tokens can be obtained by logging in via /transactions/signIn.
Authorization Header: Authorization: Bearer <token>
1. Create a Transaction
POST /transactions
Description:
Create a new transaction (either income or expense).

Request Body (JSON):
json
Copy code
{
  "type": "income/expense",
  "category": "string",
  "amount": "number",
  "description": "string"
}
Field	Type	Description
type	String	Required. "income" or "expense"
category	String	Required. Transaction category
amount	Number	Required. Transaction amount
description	String	Optional. A brief description of the transaction
Response:
201 Created: Returns the created transaction object.
400 Bad Request: If validation fails.
Example Response:
json
Copy code
{
  "_id": "64c123abc45678d90e12f345",
  "type": "income",
  "category": "salary",
  "amount": 2000,
  "description": "October salary",
  "__v": 0
}
2. Get All Transactions
GET /transactions
Description:
Retrieve all transactions (income and expenses).

Response:
200 OK: Returns an array of all transactions.
500 Internal Server Error: If an error occurs.
Example Response:
json
Copy code
[
  {
    "_id": "64c123abc45678d90e12f345",
    "type": "income",
    "category": "salary",
    "amount": 2000,
    "description": "October salary",
    "__v": 0
  },
  {
    "_id": "64c124bcf56789e01f23g456",
    "type": "expense",
    "category": "groceries",
    "amount": 150,
    "description": "Weekly groceries",
    "__v": 0
  }
]
3. Get Transaction by ID
GET /transactions/:id
Description:
Retrieve a single transaction by its unique ID.

URL Parameters:
id: Transaction's unique identifier.
Response:
200 OK: Returns the requested transaction object.
404 Not Found: If the transaction is not found.
500 Internal Server Error: If an error occurs.
Example Response:
json
Copy code
{
  "_id": "64c123abc45678d90e12f345",
  "type": "income",
  "category": "salary",
  "amount": 2000,
  "description": "October salary",
  "__v": 0
}
4. Update a Transaction
PUT /transactions/:id
Description:
Update an existing transaction by its unique ID.

URL Parameters:
id: Transaction's unique identifier.
Request Body (JSON):
json
Copy code
{
  "type": "income/expense",
  "category": "string",
  "amount": "number",
  "description": "string"
}
Response:
200 OK: Returns the updated transaction object.
404 Not Found: If the transaction is not found.
500 Internal Server Error: If an error occurs.
Example Response:
json
Copy code
{
  "_id": "64c123abc45678d90e12f345",
  "type": "income",
  "category": "bonus",
  "amount": 2500,
  "description": "Annual bonus",
  "__v": 0
}
5. Delete a Transaction
DELETE /transactions/:id
Description:
Delete a transaction by its unique ID.

URL Parameters:
id: Transaction's unique identifier.
{
  "message": "Transaction deleted"
}
6. Get Summary of Income, Expenses, and Balance
GET /summary
Description:
Retrieve a summary of total income, total expenses, and the balance.{
  "totalIncome": 5000,
  "totalExpense": 2000,
  "balance": 3000
}
7. User Signup
POST /transactions/signup
Description:
Sign up a new user.
{
  "_id": "64d4567c8901ef23bc4d567e",
  "username": "sundharesan",
  "email": "sundharesan435@gmail.com",
  "__v": 0
}
 User SignIn
POST /transactions/signIn

{
  "email": "sundharesan435@gmail.com",
  "password": "12345678"
}
Pasword has been bcrypt (hashpassword) 
200 OK: Returns the updated transaction object.
404 Not Found: If the transaction is not found.
500 Internal Server Error: If an error occurs.



