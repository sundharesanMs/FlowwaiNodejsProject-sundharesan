Transactions API Documentation

1. User Signup
POST /transactions/signup
Description:
Sign up a new user.

{
    "username": "sundhar", 
    "email":"sundharesan435@gmail.com", 
    "password": "sundhar@23"   
}
![Screenshot (38)](https://github.com/user-attachments/assets/feda84ed-55a8-4947-a812-58e72393de9b)

 
2. user Login  
POST /transactions/signIn
{
    "email":"sundharesan435@gmail.com", 
    "password": "sundhar@23" 
}
![Screenshot (39)](https://github.com/user-attachments/assets/421db9e1-4b62-416a-a3b8-80c2a9fab6b7)

3. Create a Transaction
POST /transactions
Description:
Create a new transaction (either income or expense).

{
    "type": "Income", 
    "category" : "current", 
    "amount" : 250, 
    "description": "sundhar2#@"   
}

![image](https://github.com/user-attachments/assets/a3a6ea39-3aff-4181-85bd-af7c1ff653e5)


 4. Get All Transactions
GET /transactions
Description:
Retrieve all transactions (income and expenses)..

    {
        "_id": "671888d2cbb67340f8dac78b",
        "type": "Income",
        "category": "savings",
        "amount": 200,
        "description": "dgfdfgdg",
        "date": "2024-10-23T05:25:38.746Z",
        "__v": 0
    },

 ![image](https://github.com/user-attachments/assets/690adf8c-5b6c-4e4c-980e-2dfadfc33ebb)

5. Get Transaction by ID
GET /transactions/:id
Description:
Retrieve a single transaction by its unique ID.

URL Parameters:
id: Transaction's unique identifier.
![Screenshot (43)](https://github.com/user-attachments/assets/d551fa4c-daba-40c0-8905-327d1e9231e6)

6 .4. Update a Transaction
PUT /transactions/:id
Description:
Update an existing transaction by its unique ID.
{
    "type": "Income",
    "category": "groceries",
    "amount": 150,
    "description": "Weekly groceries"
}
change the update id  
{
    "type": "Income",
    "category": "groceries",
    "amount": 150,
    "description": "monthly groceries"
}
![image](https://github.com/user-attachments/assets/6be2e4ee-c502-40af-9931-3b561ccc9412)

7.  Delete a Transaction
DELETE /transactions/:id
Description:
Delete a transaction by its unique ID.
{
    "message": "Transaction deleted"
}
![image](https://github.com/user-attachments/assets/c3643eeb-e240-4d81-aaa6-df812a6d4cf2)

8.  Get Summary of Income, Expenses, and Balance
GET /summary
Description:
Retrieve a summary of total income, total expenses, and the balance.
{
    "totalIncome": 600,
    "totalExpense": 200,
    "balance": 400
}
![image](https://github.com/user-attachments/assets/0c0733b6-c717-4b56-8117-7734a053e821)
