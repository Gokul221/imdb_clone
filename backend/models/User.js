const validate = require('validator')

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: null,
    required: [true, "Username is required"],
    maxLength: 40,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters"],
    select: false,
  },
  token: {
    type: String,
  },
});

// encrypt password before saving - mongoose HOOKS
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

// compare user password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)     // boolean return
}

// create and return JWT token
userSchema.methods.getJwtToken = function() {
  return jwt.sign(
    { id: this._id }, 
    process.env.JWT_SECRET_KEY, 
    { expiresIn: process.env.JWT_EXPIRY })
}

module.exports = mongoose.model("User", userSchema);
