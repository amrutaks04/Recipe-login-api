const mongoose=require ('mongoose')
const FoodSchema=new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const Login=mongoose.model('loginRecipe',FoodSchema) 
module.exports=Login