//Form validation

const form= document.getElementById('form');
const username=document.getElementById('username');
const name=document.getElementById('name');
const password=document.getElementById('password');
const confirm_password=document.getElementById('password2');
const email= document.getElementById('email');

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    checkInputs();
});

function checkinputs() {
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwdValue=password.value.trim();
    const passwd2Value=confirm_password.value.trim();

    if(usernameValue==='') {
        setErrorFor(username,'Username cannot be empty');
    } else{
        setSuccessFor(username);
    }
    
    if(emailValue=='') {
        setErrorFor(email,'Email cannot be empty')
    } else if(!isEmail(emailValue)) {
        setEmailFor(email,'Email is not valid')
    } else{
        setSuccessFor(email);
    }

}
function setErrorFor(input,message) {
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');

    small.innerText=message;

    formControl.className='form-control error';
}

function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}