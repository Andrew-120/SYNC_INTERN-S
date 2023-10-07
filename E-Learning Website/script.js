document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
  
    menuToggle.addEventListener("click", function () {
      mobileMenu.style.left = mobileMenu.style.left === "0%" ? "-100%" : "0%";
    });
  
    const closeMenu = document.querySelector("#close-menu");
  
    closeMenu.addEventListener("click", function () {
      mobileMenu.style.left = "-100%";
    });
  
    const loginButton = document.querySelector(".login-btn");
    const signupForm = document.querySelector(".signup-form");
    const closeSignup = document.querySelector("#close-signup");
    const signUpButton = document.querySelector(".signup-button");
    const googleSignUpButton = document.querySelector(".google-signup-button");
  
    loginButton.addEventListener("click", function () {
      signupForm.style.display = "block";
    });
  
    closeSignup.addEventListener("click", function () {
      signupForm.style.display = "none";
    });
  
    const successMessage = document.querySelector(".success-message");
    signUpButton.addEventListener("click", function () {
      const fullNameInput = document.getElementById("fullName");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
    
      const fullName = fullNameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
    
      if (!fullName || !email || !password) {
        alert("Please fill in all required fields.");
        return;
      }

      const registrationSuccessful = true;
    
      if (registrationSuccessful) {
        successMessage.textContent = `Your email: ${email} has been signed up`;
        successMessage.style.display = "block";
        signUpButton.disabled = true;
      } else {
        alert("Registration failed. Please try again.");
      }
    });
      
    const signupFormElement = document.querySelector("form");
  
    signupFormElement.addEventListener("submit", function (event) {
      event.preventDefault();
    
      const formData = new FormData(signupFormElement);
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");
    
      const userData = {
        fullName: fullName,
        email: email,
        password: password,
      };
    
      const serverEndpoint = "https://example.com/register";
    
      fetch(serverEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            successMessage.textContent = `Registration successful!`;
            successMessage.style.display = "block";
            signUpButton.disabled = true;
          } else {
            alert("Registration failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred while processing your request. Please try again later.");
        });
    });
  
const viewAllCoursesButton = document.querySelector(".view-all-courses");

viewAllCoursesButton.addEventListener("click", function () {
  window.location.href = "all-courses.html";
});
  });
  