// Gestionnaire de clic pour le bouton Admin Login
document.getElementById('loginBtn').addEventListener('click', () => {
    const username = prompt('Nom d\'utilisateur:');
    const password = prompt('Mot de passe:');

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        window.location.href = 'admin.html';
    } else {
        alert('Identifiants incorrects');
    }
}); 