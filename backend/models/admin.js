const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});
let Admin;

try {
	Admin = mongoose.model("Admin");
} catch (error) {
	Admin = mongoose.model("Admin", loginSchema);
}
module.exports = { Admin };
