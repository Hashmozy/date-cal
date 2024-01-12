function calculateAge() {
  // Get user input
  var dobInput = document.getElementById("dob");
  var resultDiv = document.getElementById("result");

  // Parse the input value
  var dob = new Date(dobInput.value);

  // Check if the input is valid
  if (isNaN(dob.getTime())) {
    resultDiv.textContent =
      "Invalid input. Please enter a valid date of birth.";
    return;
  }

  // Get the current date
  var currentDate = new Date();

  // Calculate the age
  var age = currentDate.getFullYear() - dob.getFullYear();

  // Adjust the age based on the birthdate in the current year
  if (
    currentDate.getMonth() < dob.getMonth() ||
    (currentDate.getMonth() === dob.getMonth() &&
      currentDate.getDate() < dob.getDate())
  ) {
    age--;
  }

  // Display the result
  resultDiv.textContent = "Your age is: " + age + " years.";
}
