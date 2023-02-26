const mongoose =  require('mongoose');
const {Schema,model} = mongoose;

const userSchema =new Schema({
    userTxt:{type:String ,required:true ,min:4,unique:true},
    token:{type:String,required:true},
});

const userModel = model('user',userSchema);
module.exports = userModel;