//STORING DATA ABOUT USER
function StoreUser() {

    var usrObject = {};
    usrObject.text = document.getElementById("Username").value;
    usrObject.password = document.getElementById("PasswordInput").value;
    usrObject.date = document.getElementById("Dob").value;
    usrObject.address = document.getElementById("Address").value;
    usrObject.score = 0;

    //Store user

    localStorage[usrObject.text] = JSON.stringify(usrObject);

}
// VALIDATING DATA 

function validation() {

    var username = document.getElementById("Username").value;
    var password = document.getElementById("PasswordInput").value;
    var password2 = document.getElementById("ConfirmPasswordInput").value;

    if (username == "" || password == "") {
        alert("All field required");
        return false;
    } else if (username.length < 4) {
        alert("Username must be greater than 4 characters");
        return false;
    } else if (password.length < 9) {
        alert("Password must be greater than 8 characters");
        return false;
    } else {
        return true;
    }
}
// VALIDATING CONFIRM PASSWORD 
function validatePassword() {

    var password1 = document.getElementById("PasswordInput").value;
    var password2 = document.getElementById("ConfirmPasswordInput").value;

    if (password2 == "") {
        alert("Confirm password can't be empty");
        return false;
    } else if (password2 != password1) {
        alert("Password doesn't match");
        return false

    } else {
        return true;
    }
}

//IF RETURN TRUE STORE DATA
function call() {
    if (validation() != false && validatePassword() != false) {
        StoreUser();
    }
}