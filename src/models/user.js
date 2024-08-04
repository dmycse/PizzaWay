import { models, model, Schema } from 'mongoose';

let userSchema = new Schema({
  email: {
    type: String, 
    required: true,
    lowercase: true, 
    unique: true,
    // minLength: 6,
  },
  password: {
    type: String, 
    required: true,
    validate: pass => {
      if (!pass?.length || pass?.length < 5) {
        new Error('password must be at least 5 characters')
      }
    }
  },
}, 
{timestamps: true }
);

export let User = models?.User || model('User', userSchema);
