function opentab(tabName) {
    var loginContents = document.getElementById("login");
    var signupContents = document.getElementById("signup"); 
    signupContents.style.display = (tabName === "signup") ? 'block' : 'none';
    loginContents.style.display = (tabName === "login") ? 'block' : 'none';
}