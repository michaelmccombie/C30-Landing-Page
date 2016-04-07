//Animation

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function (callback) {
    return window.setTimeout(callback, 100 / 40);
  });
}

if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
  window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
  window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
  window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
  window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
  window.clearTimeout);
}

function Ball (radius, color) {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.color = color;
  this.mass = 6;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.lineWidth = 2     ;
}

Ball.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.strokeStyle = 'rgba(102, 184 ,119, 1)';
  context.beginPath();
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.stroke();
  }
  context.restore();
};

Ball.prototype.getBounds = function () {
  return {
    x: this.x - this.radius,
    y: this.y - this.radius,
    width: this.radius * 1,
    height: this.radius * 1
  };
};

window.onload = function () {
  var canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      particles = [],
      numParticles = window.innerHeight / 30,
      minDist = window.innerWidth / 4,
      springAmount = 0.00001;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (var size, particle, i = 0; i < numParticles; i++) {
    size = Math.random() * 3 + 1;
    particle = new Ball(size, 'rgba(102, 184 ,119, 1)');
    particle.x = Math.random() * canvas.width;
    particle.y = Math.random() * canvas.height;
    particle.vx = Math.random() * 4 - 1;
    particle.vy = Math.random() * 4 - 1;
    particle.mass = size;
    particles.push(particle);
  }

  function spring (partA, partB) {
    var dx = partB.x - partA.x,
        dy = partB.y - partA.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < minDist) {
      var alpha = 1 - dist / minDist;
      context.strokeStyle = 'rgba(102, 184, 119, ' + alpha +')';
      context.beginPath();
      context.moveTo(partA.x, partA.y);
      context.lineTo(partB.x, partB.y);
      context.stroke();

      var ax = dx * springAmount,
          ay = dy * springAmount;
      partA.vx += ax / partA.mass;
      partA.vy += ay / partA.mass;
      partB.vx -= ax / partB.mass;
      partB.vy -= ay / partB.mass;
    }
  }

  function move (partA, i) {
    partA.x += partA.vx;
    partA.y += partA.vy;
    if (partA.x > canvas.width) {
      partA.x = 0;
    } else if (partA.x < 0) {
      partA.x = canvas.width;
    }
    if (partA.y > canvas.height) {
      partA.y = 0;
    } else if (partA.y < 0) {
      partA.y = canvas.height;
    }
    for (var partB, j = i + 1; j < numParticles; j++) {
      partB = particles[j];
      spring(partA, partB);
    }
  }

  function draw (particle) {
    particle.draw(context);
  }

  (function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(move);
    particles.forEach(draw);
  }());
};
