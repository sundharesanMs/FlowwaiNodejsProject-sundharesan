const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['income', 'expense'] }
});

module.exports = mongoose.model('Category', CategorySchema);
