const userModel = require("../models/playerModel");

async function getPlayerById(id) {
	//validar a requicicao 
	//const users = await userModel.find({});
	// const user = await userModel.findById(id);
	const res = userModel.getPlayerById(id);
	return res;
}

async function createPlayer(player){
	const resutado = userModel.createPlayer(player);
	return resutado;
}

async function deletePlayer(id) {
	const resutado = userModel.deletePlayer(id);
	return resutado;
}

async function getAllPlayers() {
	const resutado = userModel.getAllPlayers();
	return resutado;
}

async function getUserById(id) {
	// const user = await userModel.findById(id);
	return "user";
}

async function createUser(user) {
	//const newUser = new userModel(user);
	//await newUser.save();
	return "newUser";
}

async function updateUser(id, user) {
	// const updatedUser = await userModel.findByIdAndUpdate(id, user, { new: true });
	// return updatedUser;
}



module.exports = {
	getPlayerById,
	getUserById,
	createUser,
	updateUser,
	deletePlayer,
	createPlayer,
	getAllPlayers
};