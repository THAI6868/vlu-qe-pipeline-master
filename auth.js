function login(username, password) {
    if (!username || !password) {
        return false;
    }
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

module.exports = { login };
// Update login logic note
