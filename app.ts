function dologin() {
  if (document.getElementById("btnlogin").innerHTML == "Login") {
    document.getElementById("btnlogin").innerHTML = "Logout";
    document.getElementById("btnlogin").className = "btn btn btn-danger";
    document.getElementById("expedit").className = "card cvisible";
    console.log("Apreto");
  } else {
    document.getElementById("btnlogin").innerHTML = "Login";
    document.getElementById("btnlogin").className = "btn btn btn-primary";
    document.getElementById("expedit").className = "card cinvisible";
    
  }
}
