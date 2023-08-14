//step 1: Add Event Handeler for Submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2: Get the Email address from the Enail Field
    // alwasy remember to use dot(.) value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    /* step 3: get password
     a.set id on the html element
     b. get the Element.
     c.get the value from the element
     */

     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;

    //DANGER : DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    /**step4: Verify The Email and password */
    
    if (email == 'sontan@bap.com' && password == 'secret') {
        window.location.href = 'bank.html';
    }else{
        alert('Invalid User');
    }


})