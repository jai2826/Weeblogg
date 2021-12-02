function showpassword() {
    var x = document.getElementById("mypassword");
    var y = document.getElementById("myconfirmpassword");
    if (x.type === "password" || y.type ==="password") {
      x.type = "text";
      y.type="text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }