const {Schema,model} = require('mongoose');
const Cryptr = require('cryptr');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config(path.resolve(__dirname, './.env'));
const userSchema= new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{ 
        type: String,
        required: true,
        unique: true, 
    },
    password:{
        type: String,
        required: true,
        length: 8
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, {timestamps: true});


userSchema.pre('save', function(next){
  const originalPassword = this.password;
    if(this.isModified('password')){
        const crypt= new Cryptr(process.env.Hash_secret, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
        this.password= crypt.encrypt(originalPassword);
    }
    next();
});


const User= model('User', userSchema);
module.exports= User;