// Countdown Timer
const countdownEl = document.getElementById('countdown');
const birthday = new Date('September 7, 2025 00:00:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance < 0) {
    countdownEl.innerHTML = "🎉 It's My Birthday Today! 🥳";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days}d ${hrs}h ${mins}m ${secs}s`;
};

setInterval(updateCountdown, 1000);
updateCountdown();

// Typewriter effect for the heading
document.addEventListener("DOMContentLoaded", function () {
  const heading = document.querySelector(".typewriter");

  const today = new Date();
  const isBirthday = today.getMonth() === 8 && today.getDate() === 7; // Sept 7

  if (isBirthday) {
    heading.textContent = "🎉 It’s My Birthday Today! 🩷🧁💫";
  }
});

// Confetti
window.onload = function () {
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, 1000);
};

// Modal
function showModal() {
  const modal = document.getElementById('wishModal');
  modal.style.display = 'flex';
  return false; // prevent form submission
}

function closeModal() {
  document.getElementById('wishModal').style.display = 'none';
}

// 🎵 Background music logic
document.addEventListener('DOMContentLoaded', () => {
  const audio = new Audio('https://www.bensound.com/bensound-music/bensound-sunny.mp3'); // royalty-free track
  audio.loop = true;
  audio.volume = 0.4;

  let isPlaying = false;

  const toggleButton = document.createElement('button');
  toggleButton.className = 'music-toggle';
  toggleButton.innerText = '▶️ Play Music';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    if (!isPlaying) {
      audio.play().then(() => {
        toggleButton.innerText = '⏸️ Pause Music';
        isPlaying = true;
      }).catch(error => {
        console.error('Music play failed:', error);
        toggleButton.innerText = '🔇 Click to Unmute';
      });
    } else {
      audio.pause();
      toggleButton.innerText = '▶️ Play Music';
      isPlaying = false;
    }
  });
});

// Firebase Visitor Counter
const visitorRef = firebase.database().ref('visitors');

visitorRef.transaction((currentValue) => {
  return (currentValue || 0) + 1;
});

visitorRef.on('value', (snapshot) => {
  document.getElementById('visitorCount').textContent = snapshot.val();
});

// 🌟 Scroll-triggered animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});



