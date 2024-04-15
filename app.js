
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault;

    if(validateName() && validateEmail() && validatePassword()){
        alert("From Submitted Successfully");
         let name = document.getElementById('name');
         name.value = "";
         let email = document.getElementById('email');
         email.value = "";
         let password = document.getElementById('password');
         password.value = "";
        
    }

});


function validateName(){
    let name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.remove('fa-check');
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!name.match(/^[A-Z a-z]*\s{1}[A-Z a-z]*$/)){
        nameError.innerHTML = "write full name";
        nameError.previousElementSibling.classList.remove('fa-check');
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.remove('fa-check');
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.remove('fa-check');
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}
function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passwordError.innerHTML = "Password is required";
        passwordError.previousElementSibling.classList.remove('fa-check');
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    if(!password.match( /^.+@.+\..+$/)){
        passwordError.innerHTML = "Enter Valid Password";
        passwordError.previousElementSibling.classList.remove('fa-check');
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passwordError.innerHTML = "";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}


