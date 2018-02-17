const TreeMap = require("treemap-js");



class Person {
	constructor(name, username, password, email) {
		this.name = name; 
		this.username = username;
		this.password = password;
		this.email = email;
	}

	parseTrash(trash) {
		this.trash = trash;
	}

	parseWater(water) {
		this.water = water;
	}

	calcScore() {
		this.score = Math.random();
	}
}


function makePerson() {
	var person = {
		name = document.getElementById("name");//get name
		email = document.getElementById("email");//get	email 
		water = document.getElementById("water");//get water usage
		trash = document.getElementById("trash");//get trash made
		score = 0.0; //init score to zero
	};

	
}

function () {

}
var map = new TreeMap();





map.set();
