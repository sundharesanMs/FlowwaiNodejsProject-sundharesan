const Transaction = require("../models/Transcation");
const User = require("../models/User");
const {
  hashGenerate,
  hashValidator,

} = require("../hashPassword/hashingpassword");


//  post the transcation id
const createIncome = async (req, res) => {
  const { type, category, amount, description } = req.body;
  try {
    const transaction = new Transaction({
      type,
      category,
      amount,
      description,
    });
    console.log(transaction);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// get all transcatiom id
const getIncome = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
//  get One id transcation
const getOneId = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// update the transcation
const updateTranscation = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// delete the transcation
const deleteTranscation = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction)
      return res.status(404).json({ error: "Transaction not found" });
    res.status(200).json({ message: "Transaction deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// total summary of transcatopm
const summary = async (req, res) => {
  try {
    const totalIncome = await Transaction.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const totalExpense = await Transaction.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const balance =
      (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0);
+
    res.status(200).json({
      totalIncome: totalIncome[0]?.total || 0,
      totalExpense: totalExpense[0]?.total || 0,
      balance,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// signup
const signup = async (req, res) => {
  const hashPassword = await hashGenerate(req.body.password);
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};


// login
const signIn = async (req, res) => {
    try {
     
      const existingUser = await User.findOne({ email: req.body.email });
      
      if (!existingUser) {
        return res.status(400).send("Email is invalid");
      }
  
     
      const checkUser = await hashValidator(req.body.password, existingUser.password);
  
      if (!checkUser) {
        return res.status(400).send("Password is invalid");
      }
  
      res.send("Login success");
    } catch (error) {
      res.status(500).json({ message: "Login failed", error: error.message });
    }
  };


  
module.exports = {
  createIncome,
  getIncome,
  getOneId,
  updateTranscation,
  deleteTranscation,
  summary,
  signup,
  signIn,
};
