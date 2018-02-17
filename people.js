const TreeMap = require("treemap-js");
import System.IO;


class Person {
	constructor(name, username, password, email) {
		this.name = name; 
		this.username = username;
		this.password = password;
		this.email = email;
		this.trash = 0.0;
		this.water = 0.0;
	}

	function calcScore() {
		this.score = Math.random();
	}
	
	function tostring() {
		var res = "";
		res += name + " ";
		res += username + " ";
		res += password + " ";
		res += trash + " ";
		res += water + " "
	
	
}


function makePerson() {
	var person = {
		name = document.getElementById("name");//get name
		email = document.getElementById("email");//get	email 
		water = parseFloat(document.getElementById("water"));//get water usage
		trash = parseFloat(document.getElementById("trash"));//get trash made
		score = 0.0; //init score to zero
	};

	updateData();
}

function updateData(person) {
	//print to textfile 
	//data
}




function assembleTreeMap() {
	//read from text file
	//make tree map entry 
}
var map = new TreeMap();





map.set();
