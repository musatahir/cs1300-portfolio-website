// Mobile menu functionality
const initMobileMenu = () => {
  const menuButton = document.getElementById('mobileMenuButton');
  const menu = document.getElementById('mobileMenu');
  
  if (!menuButton || !menu) return;
  
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
  
  // Close menu when clicking links
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
};

// Particle system
const initParticles = () => {
  const containers = document.querySelectorAll('.particles');
  if (!containers.length) return;
  
  const PARTICLE_COUNT = 300;
  
  containers.forEach(container => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomize particle properties
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 4 + 1;
      const delay = Math.random() * 5;
      
      Object.assign(particle.style, {
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: (Math.random() * 0.6 + 0.2).toString(),
        animationDelay: `${delay}s`,
        animationDuration: `${15 + Math.random() * 20}s`
      });
      
      container.appendChild(particle);
    }
  });
};

// Smooth scroll behavior
const initSmoothScroll = () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      
      if (targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initParticles();
  initSmoothScroll();
}); 