const container = document.querySelector('.content');
const leftArrow = document.querySelector('.larrow');
const rightArrow = document.querySelector('.rarrow');

const scrollAmount = window.innerWidth; 

// Scroll left
leftArrow.addEventListener('click', () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth' // Smooth scrolling
  });
});

// Scroll right
rightArrow.addEventListener('click', () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth' 
  });
});