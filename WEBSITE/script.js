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


//  RESPONSIVE MENU 


// Add menu toggle button


//  PRINT FUNCTION  

