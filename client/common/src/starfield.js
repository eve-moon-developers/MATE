/*
	Starfield lets you take a div and turn it into a starfield.

*/

//	Define the starfield class.
function Starfield() {
	this.fps = 30;
	this.canvas = null;
	this.width = 0;
	this.width = 0;
	this.minVelocity = 1;
	this.maxVelocity = 10;
	this.stars = 0;
	this.intervalId = 0;
	this.containerDiv = null;
	this.reset = false;
	this.fade = 100;
	this.resetTimeout = null;
	this.gradient = null;
}

//	The main function - initialises the starfield.
Starfield.prototype.initialise = function (div) {
	var self = this;

	//	Store the div.
	this.containerDiv = div;
	self.width = window.innerWidth;
	self.height = window.innerHeight;

	//	Create the canvas.
	var canvas = document.createElement('canvas');
	div.appendChild(canvas);
	this.canvas = canvas;
	this.canvas.width = this.width;
	this.canvas.height = this.height;

	//Reset the stars
	this.stars = Math.round((this.canvas.width * this.canvas.height) / 20000);

	//Set the gradient
	var ctx = this.canvas.getContext("2d");
	var radius = Math.max(this.width, this.height);
	this.gradient = ctx.createRadialGradient(this.width / 2, this.height, radius, this.width / 2, this.height, 0);
	this.gradient.addColorStop(0, "#1b2735");
	this.gradient.addColorStop(1, "#090a0f");

	ctx.fillStyle = this.gradient;
	ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

	this.gradient = ctx.createRadialGradient(this.width / 2, this.height, radius, this.width / 2, this.height, 0);
	this.gradient.addColorStop(0, "rgba(27, 39, 53, 0.05)");
	this.gradient.addColorStop(1, "rgba(9, 10, 15, 0.05)");
};

Starfield.prototype.delayRestart = function () {
	clearTimeout(this.resetTimeout);
	this.resetTimeout = window.setTimeout(function () { myStarfield.restart(); }, 500);
}

Starfield.prototype.restart = function () {

	if (this.containerDiv == null) return;

	this.stop();
	this.containerDiv.removeChild(this.canvas);
	this.initialise(this.containerDiv);
	this.start();
}

Starfield.prototype.start = function () {

	//	Create the stars.
	var stars = [];
	for (var i = 0; i < this.stars; i++) {
		var mod = Math.round(Math.pow(Math.random(), 3) * 5);
		var width = (Math.random() + 1) * mod;
		var speed = ((Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity) * mod;

		stars[i] = new Star(Math.random() * this.width, Math.random() * this.height, width, speed, mod);
	}
	this.stars = stars;

	var self = this;
	//	Start the timer.
	this.intervalId = setInterval(function () {
		self.update();
		self.draw();
	}, 1000 / this.fps);
};

Starfield.prototype.stop = function () {
	clearInterval(this.intervalId);
};

Starfield.prototype.update = function () {
	var dt = 1 / this.fps;

	for (var i = 0; i < this.stars.length; i++) {
		var star = this.stars[i];

		var xMod = Math.sin(Math.PI * star.x / this.width) * star.mod + 1;
		star.x = star.x + star.velocity / xMod * dt;

		var yMod = 5 * Math.sin(Math.PI * (star.x / this.width - 0.5)) / (star.mod + 1)
		star.y = star.y + star.velocity * yMod * dt;

		star.sizemod += (Math.random() - 0.5) * star.mod / 10;

		if (star.reset) {
			star.fade--;
			if (star.fade <= 0) {
				var mod = Math.round(Math.pow(Math.random(), 3) * 5);
				var width = (Math.random() + 1) * mod;
				var speed = ((Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity) * mod;

				this.stars[i] = new Star(Math.random() * this.width, Math.random() * this.height, width, speed, mod);

				star = this.stars[i];
				star.fade = 0;
				star.reset = false;
			}
		} else if (star.fade < 10 * star.mod) {
			star.fade++;
		} else if (star.fade == 10 * star.mod) {
			if (Math.random() * 1000 < 1) {
				star.reset = true;
			}
		}

		if (star.sizemod > star.size) {
			star.sizemod = star.size;
		} else if (star.sizemod < -star.size) {
			star.sizemod = -star.size;
		}

		if (star.x > this.width) {
			star.x = 0;
		}

		if (star.y > this.height) {
			star.y = 0;
		} else if (star.y < 0) {
			star.y = this.height;
		}

		//console.log(xMod, star.x, yMod, star.y);
	}
};

Starfield.prototype.draw = function () {

	//	Get the drawing context.
	var ctx = this.canvas.getContext("2d");

	//	Draw the background.
	ctx.fillStyle = this.gradient;
	ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

	//	Draw stars.
	ctx.fillStyle = '#ffffff';
	for (var i = 0; i < this.stars.length; i++) {
		var star = this.stars[i];
		ctx.fillRect(star.x, star.y, (star.size + star.sizemod) * (star.fade / (10 * star.mod)), (star.size + star.sizemod) * (star.fade / (10 * star.mod)));
	}
};

function Star(x, y, size, velocity, mod) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.sizemod = 0;
	this.velocity = velocity;
	this.mod = mod;
	this.fade = 10 * mod;
}