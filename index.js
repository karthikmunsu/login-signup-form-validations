var indiaStates = require('./IndiaStates.json');
var countries  = require('./Countries.json');
var IndiaCitiesWithStates = require('./IndiaCitiesWithStates.json');

exports.printMsg = function() {
  console.log("login/signup form validation package works fine..");
}

exports.checkEmail = function(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
}

exports.checkCharacters = function(data) {
	var re = /^[a-zA-Z]+$/;
	return re.test(data);
}

exports.checkMobile = function(phone) {
	var re = /^[0-9]+$/;
	return re.test(phone);
}


exports.getStates = function(_code) {
if(_code == 'IN') {
 return indiaStates;
}else{
  var empty = {}
  return empty;
} 
}

exports.getCountries = function() {
  return countries
}



exports.getStatesWithCities = function(_code) {
if(_code == 'IN') {
return IndiaCitiesWithStates;
}else {
  var empty = {}
  return empty;
}
}
