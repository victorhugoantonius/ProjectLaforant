let submit = document.getElementById('submit'); 
console.log(submit);

// function valPassword(password , tempPassword)
// {
//     if(password != tempPassword) return false;
//     return true;
// }


submit.addEventListener('click' , function() {
    let email = document.querySelector('#email').value;
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let agreement = document.querySelector('#agreement').checked;    

    let error = '';


    
    if (email != "" && username != "" && password != ""){
        
    }else{
        alert('You must fill in the data completely!');
    }

// validasi email
    if(email.indexOf("@")!=-1 && email.indexOf(".")!=-1){

        }else{
            error = 'Email must be contain @ and .';
        }


// validasi username
    if(username.length <= 8)
    {
        error = 'Username must be created with more than 8 characters';
    }

    if(username[0] < 'A' || username[0] > 'Z') {
        error = 'Username must be started by Capital'
    }

// validasi password
    if(password.length >= 10 || password.length <= 5){
        error = 'Password must be created with more than 5 characters and less than 10 characters';
    }

// agreement
    if(agreement === false){
        error = 'The Agreement must be accepted';
    }

    
    let messageValue = document.querySelector('#message');

    if(error === '') {
            alert("Successfully created the account");
        }
    else{
            messageValue.textContent = error;
            messageValue.style.fontFamily = 'fantasy';
            messageValue.fontsize = '14px';
            messageValue.style.color = 'red';
        }

    if(error === '') {
            messageValue.textContent = 'Success';
            messageValue.style.fontFamily = 'fantasy';
            messageValue.fontsize = '14px';
            messageValue.style.color = 'limegreen';
        }
});