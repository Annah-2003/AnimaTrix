function attemptLogin() {
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate checking credentials against a JSON database
    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.username === username && user.password === password);
            if (user) {
                alert('Login successful!');
            } else {
                alert('Invalid username or password');
            }
        })
        .catch(error => console.error('Error:', error));
}
