// Theme toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });

  
// Detect dark mode preference
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Hover effect controller
document.addEventListener('DOMContentLoaded', () => {
  const hoverButton = document.querySelector('.hover-button');
  
  if (hoverButton) {
    // Hover enter handler
    hoverButton.addEventListener('mouseenter', () => {
      if (darkModeQuery.matches) {
        // Dark mode hover effects
        hoverButton.style.backgroundColor = '#2d3748';
        hoverButton.style.color = '#f7fafc';
        hoverButton.style.transform = 'scale(1.05)';
        hoverButton.style.boxShadow = '0 4px 15px rgba(45, 55, 72, 0.3)';
      } else {
        // Light mode hover effects
        hoverButton.style.backgroundColor = '#4a5568';
        hoverButton.style.color = '#ffffff';
        hoverButton.style.transform = 'scale(1.05)';
        hoverButton.style.boxShadow = '0 4px 15px rgba(74, 85, 104, 0.2)';
      }
    });

    // Hover leave handler
    hoverButton.addEventListener('mouseleave', () => {
      hoverButton.style.backgroundColor = '';
      hoverButton.style.color = '';
      hoverButton.style.transform = '';
      hoverButton.style.boxShadow = '';
    });
  }
});

// Live update if user changes system theme
darkModeQuery.addListener((e) => {
  console.log(`Dark mode ${e.matches ? 'enabled' : 'disabled'}`);
});