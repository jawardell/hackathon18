//const TreeMap = require("treemap-js");
//map = new TreeMap();



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
		return res;
	}
	
}



function displayPeople() {
	map.each(function(value, key) {
		document.getElementById("array").innerHTML = map.get(key).tostring() + "<br>";
	});
}

function printArray() {
	initArray();
	for(var i = 0; i < people.length; i++) {
		if(people[i] != 0) {
			document.getElementById("array").innerHTML = people[i].tostring() + "<br>";	
		}
	
	}

}




function makePerson() {
	var person = {
		name : document.getElementById("name").value,//get name
		email :  document.getElementById("email").value,//get	email 
		water : parseFloat(document.getElementById("water").value),//get water usage
		trash : parseFloat(document.getElementById("trash").value),//get trash made
		score : 0 //init score to zero
	};
	person.calcScore;
	
//	map.set(person.score, person);
	people[person.score] = person;
}

function updateData(person) {
	//print to textfile 
	//data
}




function assembleTreeMap() {
	//read from text file
	//make tree map entry 
}


function initArray() {
	for(var i = 0; i < people.length; i++) {
		if(isNaN(people[i])) {
			people[i] = 0;
		}
	
	}


}







