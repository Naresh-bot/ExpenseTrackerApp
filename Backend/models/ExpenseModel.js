const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
        trim: true,
        maxLength: 50
    },
    amount:{
        type: Number,
        require: true,
        trim: true,
        maxLength: 20,        
    },
    type:{
        type: String,
        default:"expense"
    },
    date:{
        type: Date,
        trim: true,
        required: true
    },
    category:{
        type: String,
        require: true,
        trim: true,
        maxLength: 20,        
    },
    description:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50,        
    },
},{timestamps:true})


module.exports = mongoose.model('Expense', ExpenseSchema)