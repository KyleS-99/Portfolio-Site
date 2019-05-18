const Validator = require('validator');

const isEmpty = require('./isEmpty');

module.exports = {
    validateData: (req, res, next) => {
        let errors = {};
        let { message, email, name } = req.body;

        message = !isEmpty(message) ? message : '';
        email = !isEmpty(email) ? email : '';
        name = !isEmpty(name) ? name : '';

        if (!Validator.isLength(name, {  min: 2, max: 30 })) {
            errors.name = 'Name field must be between 2 and 30 characters';
        }

        if (isEmpty(name)) {
            errors.name = 'Name field is required';
        }

        if (!Validator.isEmail(email)) {
            errors.email = 'Email is invalid';
        }

        if (isEmpty(email)) {
            errors.email = 'Email field is required';
        }

        if (!Validator.isLength(message, {  min: 20, max: 400 })) {
            errors.message = 'Message field must be between 20 and 400 characters';
        }

        if (isEmpty(message)) {
            errors.message = 'Message field is required';
        }

        if (!isEmpty(errors)) {
            return res.status(400).json(errors);
        }

        next();
    }
}