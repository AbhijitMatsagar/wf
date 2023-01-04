function ValidateEmail() {
  var mail = document.getElementById("mail").value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    alert("You have entered an invalid email address!");
    mail.focus();
    return false;
  } else {
    alert("valid email address!");
    mail.focus();
    return true;
  }
}
