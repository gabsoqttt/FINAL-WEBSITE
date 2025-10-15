//  ACTIVE NAVIGATION HIGHLIGHT 
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

//  BOOK NOW BUTTON REDIRECT
const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bookButton = document.querySelector(".book-btn");
  
  if (bookButton) {
    bookButton.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  }
});


//  BOOKING FORM VALIDATION 
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector(".booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();

      const inputs = bookingForm.querySelectorAll("input");
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "none";
        }
      });

      if (!isValid) {
        alert("⚠️ Please fill in all fields before submitting your booking.");
        return;
      }

      alert("✅ Thank you! Your booking has been submitted successfully.");
      bookingForm.reset();
    });
  }
});


//  RESPONSIVE MENU 
const nav = document.querySelector("nav ul");
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "&#9776;"; 


// Add menu toggle button
if (document.querySelector("nav")) {
  document.querySelector("nav").insertBefore(menuToggle, nav);

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

//  PRINT FUNCTION  
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("contact.html")) {
    const printButton = document.createElement("button");
    printButton.textContent = "🖨️ Print This Page";
    printButton.classList.add("print-btn");

    const footer = document.querySelector("footer");
    if (footer) {
      footer.insertAdjacentElement("afterend", printButton);
    } else {
      document.body.appendChild(printButton);
    }

    printButton.addEventListener("click", () => {
      window.print();
    });
  }
});
