function login() {

    //get username
    let Username = document.getElementById("UsernameInput").value;
    if (localStorage[Username] === undefined) {

        //document.getElementById("loginFailure").innerHTML="Username not recognized. Do you have an account?"
        alert("username not good");
        return false;
    } else {

        let usrObj = JSON.parse(localStorage[Username]);
        let password = document.getElementById("PasswordInput").value;

        if (password === usrObj.password) {
            alert(Username + " logged in.");
            document.getElementById("loginFailure").innerHTML = "";
            sessionStorage.loggedInUsrUsername = Username;

        } else {
            document.getElementById("loginFailure").innerHTML = "password not correct.please try again";
            alert("Password doesnt match");
            return false;
        }
    }
}