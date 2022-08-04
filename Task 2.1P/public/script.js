function signUp(){
    
    
    let data = {
        email:  document.getElementById('email').value
    }
    fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });
}