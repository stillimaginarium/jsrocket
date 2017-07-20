//this is an invisible comment for me and my coding friend
/*
the function below switches the css class of a div html element
*/
var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	}
	else {
		document.getElementById('cool').className = 'cool';	
	}
	
}

var sayMyName = function (name) {
	alert('My name is '+name)
}

var car = {
			make: 'audi',
			type: 'a4',
			color: 'black',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat 1','seat 2','seat 3','seat 4'],

			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert ('fly');
			},
			switchCar: function (isOn) {
				console.log ('turn car '+ isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}

			}
			
			
		

		};

	console.log('hello there friends!');