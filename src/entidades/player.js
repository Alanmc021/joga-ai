//const mongoose = require('mongoose');

const userSchema = {
	name: {
		type: String,
		required: true,
	} 
};

module.exports =  userSchema;