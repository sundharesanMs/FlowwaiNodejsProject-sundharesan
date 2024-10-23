const express = require('express'); 
const {createIncome, getIncome, getOneId, updateTranscation, deleteTranscation, summary, signup, signIn} = require('../controllers/transactionsController')
const router = express.Router(); 
router.post('/transactions', createIncome) 
router.get('/transactions', getIncome)
router.get('/transactions/:id', getOneId)
router.put('/transactions/:id', updateTranscation)
router.delete('/transactions/:id', deleteTranscation)
router.get('/summary', summary)
router.post('/transactions/signup', signup)
router.post('/transactions/signIn', signIn)

// signuP route  
// router.post("/transactions/signup", async (req, res) => {
//     try {
//         // Check if the email already exists
//         const emailExists = await User.findOne({ email: req.body.email });
//         if (emailExists) {
//             return res.status(400).json({ message: "Email already exists" });
//         }

//         // Hash the password before saving
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);

//         // Create new user with hashed password
//         const user = new User({
//             name: req.body.name,  // Change 'username' to 'name' to match the schema
//             email: req.body.email,
//             password: hashedPassword  // Store hashed password
//         });

//         const savedUser = await user.save();
//         res.status(201).json(savedUser);  // Send the saved user as response with 201 status (created)
//     } catch (error) {
//         res.status(500).json({ message: "Error creating user", error: error.message });
//     }
// });
module.exports =  router