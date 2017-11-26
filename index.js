exports.printMsg = function() {
  console.log("This is a message from the demo package");
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
