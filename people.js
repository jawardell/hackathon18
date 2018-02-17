const TreeMap = require("treemap-js");
map = new TreeMap();

var people = [];


class Person {
	constructor(name, username, password, email) {
		this.name = name; 
		this.username = username;
		this.password = password;
		this.email = email;
		this.trash = 0.0;
		this.water = 0.0;
	}

	calcScore() {
		this.score = Math.random();
	}
	
	tostring() {
		var res = "";
		res += name + " ";
		res += username + " ";
		res += password + " ";
		res += trash + " ";
		res += water + " "
	}
	
}



function displayPeople() {
	map.each(function(value, key) {
		document.getElementById().innerHTML = map.get(key).tostring() + <br>;
	}});
}






function makePerson() {
	var person = {
		name = document.getElementById("name");//get name
		email = document.getElementById("email");//get	email 
		water = parseFloat(document.getElementById("water"));//get water usage
		trash = parseFloat(document.getElementById("trash"));//get trash made
		score = person.calcScore(); //init score to zero
	};

	
	map.set(person.score, person);
	//updateData();
}

function updateData(person) {
	//print to textfile 
	//data
}




function assembleTreeMap() {
	//read from text file
	//make tree map entry 
}










