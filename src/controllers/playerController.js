// controllers/userController.js

const userService = require("../services/userService");

async function getPlayerById(req, res) {
	const id = req.params.id;
	try {
		const response = await userService.getPlayerById(id);
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving users from database");
	}
}

async function createPlayer(req, res) {
	const player = req.body;
	try {
		const newPlayer = await userService.createPlayer(player);
		res.status(201).json(newPlayer);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error creating user in database");
	}
}

async function updatePlayer(req, res) {
	try {
		const updatedUser = await userService.updateUser(req.params.id, req.body);
		if (!updatedUser) {
			res.status(404).send("User not found");
		} else {
			res.status(200).json(updatedUser);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send("Error updating user in database");
	}
}

async function deletePlayer(req, res) {
	const id = req.params.id;
	try {
		const response = await userService.deletePlayer(id);
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving users from database");
	}
}

async function getAllPlayers(req, res) {	 
	try {
		const response = await userService.getAllPlayers();
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error retrieving users from database");
	}
}

module.exports = {
	getPlayerById, 
	createPlayer,
	updatePlayer,
	deletePlayer,
	getAllPlayers
};