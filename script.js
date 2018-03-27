var someName = {
	username: "Dinho",
	password: "secret"
};


var database = [
	{
		username: "Dinho",
		password: "secret"
	}

];


var newsFeed = [
	{
		username: "Sena",
		timeline: "I love this game!"
	},


	{
		username: "Guy",
		timeline: "Business will make us rich!"
	},

	
	{
		username: "Denis",
		timeline: "Music is the future guys!"
	}

];

var userNamePrompt = prompt("What's your username?");

var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	if(user === database[0].username && pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Your username or password is wrong! Try again!")
	}
}

signIn(userNamePrompt, passwordPrompt);
