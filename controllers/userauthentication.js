const express= require('express'); 
const jwt= require('jsonwebtoken');
const Cryptr = require('cryptr');
const User= require('../modals/userModal');

const dotenv = require('dotenv');
const path = require('path');
dotenv.config(path.resolve(__dirname, './.env'));
function generateToken(user){ 
  const payload ={
    id: user._id,
    email: user.email,
    role: user.role
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

function decryptPassword(encryptedPassword){
  const crypt= new Cryptr(process.env.Hash_secret, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
  return crypt.decrypt(encryptedPassword);
}

