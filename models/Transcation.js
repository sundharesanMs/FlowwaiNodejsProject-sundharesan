const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    type: { type: String, required: true,  enum: ['Income', 'Expense'] },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
});

const Income = mongoose.model('Transaction', TransactionSchema);
module.exports = Income