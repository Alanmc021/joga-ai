/* eslint-disable */
const admin = require("firebase-admin");

async function getPlayerById(id) {
	try {
		const snapshot = await admin.database().ref(`player/${id}`).once("value");
		const pessoa = snapshot.val();
		pessoa.id = snapshot.key;
		return pessoa;
	} catch (error) {
		return error;
	}
}

async function createPlayer(player) {
	try {
		await admin.database().ref('player').push(player);
		return 'Pessoa criada com sucesso';
	} catch (error) {
		return 'error';
	}
}

async function deletePlayer(id) {
	try {	 
		await admin.database().ref(`player/${id}`).remove();
		return 'Pessoa removida com sucesso2';
	  } catch (error) {
		return `erro`
	  }
}

async function getAllPlayers() {
	try {
		const snapshot = await admin.database().ref('player').once('value');
		const pessoas = [];
		snapshot.forEach(childSnapshot => {
		  const pessoa = childSnapshot.val();
		  pessoa.id = childSnapshot.key;
		  pessoas.push(pessoa);
		});
		return pessoas ;
	  } catch (error) {
		res.status(500).send(error);
	  }
}


module.exports = {
	getPlayerById,
	createPlayer,
	deletePlayer,
	getAllPlayers
	
};





