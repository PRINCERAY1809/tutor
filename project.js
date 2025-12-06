document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Toggle menu on button click
  menuBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked (optional)
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      mobileMenu.classList.remove("active");
    });
  });
});

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbymgtCYoXQPOny1gPnIVFHUBtE9m3tTj1r-eS1Hxdy2f8VNUkTIgrTvfK4vGA07zVYhwg/exec";

  document.getElementById("testimonialForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "success") alert("Saved successfully!");
      else alert("Error: " + data.message);
    })
    .catch(err => console.error(err));
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
