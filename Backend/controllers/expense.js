const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async(req, res) =>{
    //console.log(req.body);
    const {title, amount, category, description, date} = req.body;
    
    const expense = ExpenseSchema({
        title,
        amount,
        description,
        category,
        date
    })

    //console.log(expense);

    try {
        //validation
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "All fields are required!"})
        }
        if(amount <= 0 || typeof amount !== 'number' ){
            return res.status(400).json({message: "Invalid amount!"})
        }

        await expense.save()
        res.status(200).json({message: 'Expense added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.getExpenses = async(req, res) =>{
    try{
        const expense = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expense)
    }
    catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}


exports.deleteExpense = async(req, res) =>{
    const {id} = req.params;
    console.log(req.params);
     ExpenseSchema.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:"Expense Deleted"})
    }).catch((err)=>{
        res.status(500).json({message: "Server Error"})
    }) 
}
