// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Stop actual form submission

//     const name = document.querySelector('input[placeholder="Name"]').value.trim();
//     const phone = document.querySelector('input[placeholder="+91"]').value.trim();
//     const email = document.querySelector('input[placeholder="E-mail"]').value.trim();
//     const company = document.querySelector('input[placeholder="Company Name"]').value.trim();
//     const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

//     // Check required fields
//     if (!name || !phone || !email || !company) {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     // Validate email format
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//     // All good
//     alert('Form submitted successfully!');

//     // Optional: Reset form after submit
//     this.reset();
// });


  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission
  
      // Remove existing message if any
      const existingMsg = document.querySelector(".confirmation-box");
      if (existingMsg) existingMsg.remove();
  
      // Create a new div element
      const msgBox = document.createElement("div");
      msgBox.classList.add("confirmation-box");
      msgBox.textContent = "Thank you for contacting us! We'll be in touch soon.";
  
      // Use parentElement and children to locate where to insert
      const rightContainer = form.parentElement;
      const formButton = form.querySelector("button");
  
      // Insert the message after the form button using append()
      form.append(msgBox);
  
      // Optional: Reset the form after showing message
      form.reset();
  
      // Bonus: Highlight the left image temporarily
      const leftImage = document.querySelector(".left").firstElementChild;
      leftImage.classList.add("highlighted"); // You can define .highlighted in CSS
    });
  });