const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateRegisterInput(data){
  let errors = {};

  if (!Validator.isLength(data.name, {min: 2, max: 30})){
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (isEmpty(data.name)){
    errors.name = 'Name field is required';
  }

  if (isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  if (!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid';
  }

   if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
     errors.password = "Password must be between 6 and 30 characters";
   }

  if (isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (isEmpty(data.password2)) {
    errors.password = "Confirm password field is required";
  }

  if (!Validator.equals(data.password, data.password2)){
    errors.password2 = 'Passwords must match';
  }

  return{
    errors,
    isValid: isEmpty(errors)
  }

}