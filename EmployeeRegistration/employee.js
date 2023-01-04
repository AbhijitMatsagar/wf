function validateForm() {
  // Get the DOB, joining date, and salary fields
  var dob = document.getElementById("dob").value;
  var joiningDate = document.getElementById("joining_date").value;
  var salary = document.getElementById("salary").value;

  // Check if the DOB is a valid date
  if (!isValidDate(dob)) {
    alert("Please enter a valid date of birth.");
    return false;
  }

  // Check if the joining date is a valid date
  if (!isValidDate(joiningDate)) {
    alert("Please enter a valid joining date.");
    return false;
  }

  // Check if the joining date is after the DOB
  if (joiningDate < dob) {
    alert("The joining date cannot be before the date of birth.");
    return false;
  }

  // Check if the salary is a positive number
  if (salary <= 0) {
    alert("Please enter a valid salary.");
    return false;
  }

  // If all validation checks pass, submit the form
  return true;
}