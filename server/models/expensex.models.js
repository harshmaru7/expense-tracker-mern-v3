const mongoose = require('mongoose')

const Expensex = new mongoose.Schema({
    username:{type:String,required:true},
    amount:{type:Number,required:true},
    type:{type:String,required:true},
    subtype:{type:String},
    date:{type:String,required:true}
},
    {collection:'user-expensex'}
)

const model = mongoose.model('ExpensexData',Expensex)

module.exports = model 
