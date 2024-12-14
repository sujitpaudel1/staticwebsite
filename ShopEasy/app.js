// Select the form element
const form = document.getElementById("myForm");

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting to allow dialog to appear

  // Display "Submitted Successfully" dialog box
  alert("Your message was submitted successfully");

  // Optionally, you can reset the form here
  form.reset();

  // If you want to submit the form after showing the dialog, you can do so like this:
  // form.submit();  // Uncomment this line to actually submit the form after the alert
});
