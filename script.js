// Number animation for dashboard
const numberElements = document.querySelectorAll('.number');

const animateNumbers = () => {
  numberElements.forEach((element) => {
    const target = +element.getAttribute('data-target');
    const increment = target / 100;
    let current = 0;

    const updateNumber = () => {
      if (current < target) {
        current += increment;
        element.textContent = Math.ceil(current);
        setTimeout(updateNumber, 20);
      } else {
        element.textContent = target;
      }
    };

    updateNumber();
  });
};

// Trigger animation when the page loads
window.onload = animateNumbers;

