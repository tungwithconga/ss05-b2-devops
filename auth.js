function login(username, password) {
    return username && password;
}

function logout() {
    return true;
}
function isAuthenticated(user) {
    return user != null;
}