// Create stars in background
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.width = `${Math.random() * 3 + 1}px`;
  star.style.height = star.style.width;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starsContainer.appendChild(star);
}

// Animation sequence
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    // Boy gives flower animation
    const flower = document.querySelector('.flower');
    const boyArm = document.querySelector('.boy .arm');
    const girlHead = document.querySelector('.girl .head');
    const heart = document.querySelector('.heart');
    const caption = document.querySelector('.caption');
    
    // Animate boy giving flower
    boyArm.style.transform = 'rotate(30deg)';
    flower.style.transform = 'translateX(20px) translateY(-10px)';
    
    // Girl reaction after delay
    setTimeout(() => {
      // Girl blushes and shows hearts in eyes
      girlHead.style.boxShadow = '0 0 15px rgba(253, 121, 168, 0.8)';
      girlHead.style.backgroundColor = '#ffe6f2';
      
      // Show hearts in eyes
      girlHead.querySelectorAll('::before, ::after').forEach(el => {
        el.style.opacity = '1';
      });
      
      // Show floating heart
      heart.style.opacity = '1';
      heart.style.top = '-25px';
      heart.style.left = '12px';
      heart.style.animation = 'float 2s ease-in-out infinite';
      
      // Show caption
      caption.style.opacity = '1';
      
      // Show button with delay
      setTimeout(() => {
        document.querySelector('.btn').classList.add('show');
      }, 500);
    }, 1000);
  }, 2000);

  // Button click event
  const birthdayBtn = document.getElementById('birthdayBtn');
  const birthdayLetter = document.querySelector('.birthday-letter');
  
  birthdayBtn.addEventListener('click', () => {
    // Hide button
    birthdayBtn.style.opacity = '0';
    birthdayBtn.style.pointerEvents = 'none';
    
    // Show letter with confetti
    birthdayLetter.classList.add('show');
    setTimeout(() => {
      document.querySelector('.letter').style.opacity = '1';
      document.querySelector('.letter').style.transform = 'scale(1)';
      createConfetti();
    }, 300);
  });
});

// Confetti effect
function createConfetti() {
  const colors = ['#fd79a8', '#fdcb6e', '#e84393', '#74b9ff', '#00b894'];
  const container = document.querySelector('.birthday-letter');
  
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Random properties
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * 100;
    const rotation = Math.random() * 360;
    const animationDuration = Math.random() * 3000 + 2000;
    
    // Set styles
    confetti.style.backgroundColor = color;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.left = `${posX}%`;
    confetti.style.transform = `rotate(${rotation}deg)`;
    
    container.appendChild(confetti);
    
    // Animate confetti
    animateConfetti(confetti, animationDuration);
  }
}

function animateConfetti(element, duration) {
  const startTime = Date.now();
  const startPosX = parseFloat(element.style.left);
  const endPosX = startPosX + (Math.random() * 40 - 20);
  
  element.style.opacity = '1';
  
  function update() {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / duration;
    
    if (progress < 1) {
      const posY = progress * window.innerHeight;
      const currentPosX = startPosX + (endPosX - startPosX) * progress;
      const rotation = progress * 360 * 5;
      
      element.style.top = `${posY}px`;
      element.style.left = `${currentPosX}%`;
      element.style.transform = `rotate(${rotation}deg)`;
      element.style.opacity = `${1 - progress}`;
      
      requestAnimationFrame(update);
    } else {
      element.remove();
    }
  }
  
  requestAnimationFrame(update);
}

// Additional animation for calendar highlight
const highlightDay = document.querySelector('.highlight-day');
setInterval(() => {
  highlightDay.style.transform = highlightDay.style.transform === 'scale(1.1)' ? 
    'scale(1.15)' : 'scale(1.1)';
}, 1000);