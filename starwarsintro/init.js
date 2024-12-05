const stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}

const audio = document.getElementById('intro-audio');

// Check if the browser supports autoplay without interaction
audio.muted = false;
audio.play().catch(() => {
  // Add a fallback: wait for user interaction
  document.body.addEventListener('click', () => {
    audio.play();
  });
});