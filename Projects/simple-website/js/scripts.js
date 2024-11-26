// Handle Contact Form Submission

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // For practice purposes, we'll just Log the values
  console.log('Form Submitted');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  document.getElementById('contact-form').reset();
  alert('Thank you for your message. We will get back to you soon!');
});

//Optional: Smoot Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for fixed nav
            behavior: 'smooth'
        });
    });
});