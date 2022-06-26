import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";
import { compare } from 'bcrypt';

const { Schema, model } = mongoose;

 
const userSchema = mongoose.Schema({
    firstName: {
        type: String
      },
    //   profile_pic:{
    //     type: String
    //   },
      lastName: {
        type: String
      },
      email: {
        type: String
      },
      fullName: {
        type: String
      },
      mobileNumber: {
        type: String,
      },
    //   userLocation: [addressSchema],
    //   upload_certificates: [String],
}, {
    timestamps: true
  })

  userSchema.methods.generateAuthToken = function (_id, role) {
    return jwt.sign({ id: _id, role }, config.get("privateKey"), { expiresIn: '15d' });
  };
  
  userSchema.methods.generateRefershToken = function (_id, role) {
    return jwt.sign({ id: _id, role }, config.get("privateKey"), { expiresIn: '30d' });
  };
  
  userSchema.methods.comparePassword = function (raw, encrypted) {
    return new Promise((resolve, reject) => {
      compare(raw, encrypted)
        .then(resolve)
        .catch(reject);
    });
  };
  
  export const User = model('User', userSchema);