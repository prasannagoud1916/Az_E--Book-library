// Smooth scrolling for anchor links
// script.js

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get all the Buy Now buttons
  var buyButtons = document.querySelectorAll('.book button');

  // Add a click event listener to each button
  buyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the book details
      var bookContainer = button.closest('.book');
      var bookTitle = bookContainer.querySelector('h3').innerText;
      var bookPrice = bookContainer.querySelector('p').innerText;

      // Display a simple alert (you can replace this with your actual purchase logic)
      alert('Thank you for buying ' + bookTitle + ' for ' + bookPrice);
    });
  });
});

function onBuyNow(bookname, price){
  alert(`Thank you for buying ${bookname} for ₹${price}`)
}

function submitForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('errorMessage');

  // Dummy validation, you should replace this with actual authentication logic
  if (username === 'user' && password === 'pass') {
      // Successful login
      errorMessage.textContent = '';
      alert('Login successful!'); // You can redirect the user to another page here
  } else {
      // Failed login
      errorMessage.textContent = 'Invalid username or password. Please try again.';
  }
}

