function validateHTMlform() {

  var fname = document.getElementById("textname").value;
  if(fname == "" || !/^[a-zA-Z]*$/g.test(fname)){
    alert("Please enter first name (Alphabets Only)");
    fname.focus();
    return false;
  }

  var lname = document.getElementById("lastname").value;
  if(lname == "" || !/^[a-zA-Z]*$/g.test(lname)){
    alert("Please enter last name (Alphabets Only)");
    lname.focus();
    return false;
  }

  var age = document.getElementById("age").value;
  if (!(age > 18 && age < 50)) {
    alert("The age must be a number between 18 and 50");
    return false;
  }
  return true;
}
