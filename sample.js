function sendmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Message sent successfully!");
    document.querySelector("form").reset();
  } else {
    alert("Please fill in all fields.");
  }
}
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  });
});

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}
