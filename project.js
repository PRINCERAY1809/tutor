document.addEventListener('DOMContentLoaded', () => {
  const testimonialForm = document.getElementById('testimonialForm');
  const testimonialGrid = document.getElementById('testimonialGrid');

  // Load testimonials from localStorage
  const loadTestimonials = () => {
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
    testimonialGrid.innerHTML = ''; // Clear existing grid
    testimonials.forEach(t => {
      const card = document.createElement('div');
      card.classList.add('test-card');
      card.innerHTML = `<p>${t.message}</p><h4>${t.name}</h4>`;
      testimonialGrid.appendChild(card);
    });
  };

  // Initial load
  loadTestimonials();

  // Handle form submission
  testimonialForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && message) {
      // Get existing testimonials
      const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

      // Add new testimonial
      testimonials.push({ name, message });

      // Save to localStorage
      localStorage.setItem('testimonials', JSON.stringify(testimonials));

      // Reload testimonials
      loadTestimonials();

      // Reset form
      testimonialForm.reset();

      // Scroll to the latest testimonial
      testimonialGrid.lastChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msgStatus").innerText = "Thank you! We will contact you soon.";
  setTimeout(() => { document.getElementById("msgStatus").innerText = ""; }, 4000);
  this.reset();
});

// MOBILE MENU
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}
