function validateHTMlform() {
  let form = document.StudenSignupForm;
  if (form.textnames.value == "") {
    alert("Enter Your First Name!");
    form.textnames.focus();
    return;
  }
  if (!/^[a-zA-Z]*$/g.test(form.textnames.value)) {
    alert("Please Enter First Name only in alphabets!");
    form.textnames.value.focus();
    return false;
  }
  if (form.lastnames.value == "") {
    alert("Enter Your Last Name!");
    form.textnames.focus();
    return;
  }
  if (!/^[a-zA-Z]*$/g.test(form.lastnames.value)) {
    alert("Please Enter Last Name only in alphabets!");
    form.lastnames.value.focus();
    return false;
  }
  var age = +document.getElementById("age").value;

  if (!(age > 18 && age < 50)) {
    alert("The age must be a number between 18 and 50");
    return false;
  }
  return true;
}
