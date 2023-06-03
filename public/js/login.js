 const loginHandler = async (event) => {
    event.preventDefault();

    // grab values from form
    const username = document.querySelector('#login-user').value;
    const password = document.querySelector('#login-password').value;

    if (username && password) {
        console.log('About to send fetch request');

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('Success!');
            document.location.replace('/dashboard');
        } else {
            var body = await response.json();
            alert(body.message);
        }
    }
};

document.querySelector('#login-form').addEventListener('submit', loginHandler);