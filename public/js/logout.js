const logoutHandler = async (event) => {
    const response = await fetch('api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        var body = await response.json();
        alert(body.message);
    }
}

document.querySelector('#logout').addEventListener('click', logoutHandler);