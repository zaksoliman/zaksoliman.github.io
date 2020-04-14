const state = {}

let resizeReset = function() {
	w = state.canvasBody.width = window.innerWidth;
	h = state.canvasBody.height = window.innerHeight;
}

state.opts = { 
	particleColor: "rgb(200,200,200)",
	lineColor: "rgb(200,200,200)",
	particleAmount: 30,
	defaultSpeed: 1,
	variantSpeed: 1,
	defaultRadius: 2,
	variantRadius: 2,
	linkRadius: 200,
};

let deBouncer = function() {
    clearTimeout(state.tid);
    state.tid = setTimeout(function() {
        resizeReset();
    }, state.delay);
};

let checkDistance = function(x1, y1, x2, y2){ 
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function(point1, hubs){ 
	for (let i = 0; i < hubs.length; i++) {
		let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
		let opacity = 1 - distance / state.opts.linkRadius;
		if (opacity > 0) { 
			state.drawArea.lineWidth = 0.5;
			state.drawArea.strokeStyle = `rgba(${state.rbg[0]}, ${state.rbg[1]}, ${state.rbg[2]}, ${opacity})`;
			state.drawArea.beginPath();
			state.drawArea.moveTo(point1.x, point1.y);
			state.drawArea.lineTo(hubs[i].x, hubs[i].y);
			state.drawArea.closePath();
			state.drawArea.stroke();
		}
	}
}

Particle = function(xPos, yPos){ 
	this.x = Math.random() * w; 
	this.y = Math.random() * h;
	this.speed = state.opts.defaultSpeed + Math.random() * state.opts.variantSpeed; 
	this.directionAngle = Math.floor(Math.random() * 360); 
	this.color = state.opts.particleColor;
	this.radius = state.opts.defaultRadius + Math.random() * state.opts. variantRadius; 
	this.vector = {
		x: Math.cos(this.directionAngle) * this.speed,
		y: Math.sin(this.directionAngle) * this.speed
	};
	this.update = function(){ 
		this.border(); 
		this.x += this.vector.x; 
		this.y += this.vector.y; 
	};
	this.border = function(){ 
		if (this.x >= w || this.x <= 0) { 
			this.vector.x *= -1;
		}
		if (this.y >= h || this.y <= 0) {
			this.vector.y *= -1;
		}
		if (this.x > w) this.x = w;
		if (this.y > h) this.y = h;
		if (this.x < 0) this.x = 0;
		if (this.y < 0) this.y = 0;	
	};
	this.draw = function(){ 
		state.drawArea.beginPath();
		state.drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		state.drawArea.closePath();
		state.drawArea.fillStyle = this.color;
		state.drawArea.fill();
	};
};

function setup(){ 
	particles = [];
	resizeReset();
	for (let i = 0; i < state.opts.particleAmount; i++){
		particles.push( new Particle() );
	}
	window.requestAnimationFrame(loop);
}

function loop(){ 
	window.requestAnimationFrame(loop);
	state.drawArea.clearRect(0,0,w,h);
	for (let i = 0; i < particles.length; i++){
		particles[i].update();
		particles[i].draw();
	}
	for (let i = 0; i < particles.length; i++){
		linkPoints(particles[i], particles);
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
    state.canvasBody = document.getElementById("canvas");
    state.drawArea = state.canvasBody.getContext("2d");
    state.delay = 200;
    state.rbg = state.opts.lineColor.match(/\d+/g);
    window.addEventListener("resize", function(){
        deBouncer();
    });
    resizeReset();
    setup();
})