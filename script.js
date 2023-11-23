window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 50; // Change the threshold as needed

  if (scrolled) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hover effect on navbar links
const navLinks = document.querySelectorAll('.navbar .navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.color = '#ff69b4'; // Change color to pink on hover
    this.style.fontStyle = 'italic'; // Change font style on hover
  });

  link.addEventListener('mouseleave', function() {
    this.style.color = ''; // Reset color on mouse leave
    this.style.fontStyle = ''; // Reset font style on mouse leave
  });
});
