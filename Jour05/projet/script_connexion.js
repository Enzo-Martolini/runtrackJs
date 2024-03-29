document.addEventListener("DOMContentLoaded", function() {
    var email_verify = false; // Variable de vérification pour l'email
    var password_verify = false; // Variable de vérification pour le mot de passe
    var button = document.getElementById("submit");

    document.getElementById('email').addEventListener('input', function() { // Verifie que le champ n'est pas vide, et qu'il soit au bon format
        var email = document.getElementById("email").value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
            document.getElementById("error_mail").style.display = "block";
            email_verify = false;
        } else {
            document.getElementById("error_mail").style.display = "none";
            email_verify = true;
        }
    });

    document.getElementById('motdepasse').addEventListener('input', function() {
        var mdp = document.getElementById("motdepasse").value;
        var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.*\s).*$/;
    
        if (mdp.length < 6) {
            document.getElementById("error_password").style.display = "block";
            document.getElementById("error_password_contain").style.display = "none";
            password_verify = false;
        } else if (!passwordRegex.test(mdp)) { 
            document.getElementById("error_password").style.display = "none";
            document.getElementById("error_password_contain").style.display = "block";
            password_verify = false;
        } else {
            document.getElementById("error_password").style.display = "none";
            document.getElementById("error_password_contain").style.display = "none";
            password_verify = true;
        }
    });
document.addEventListener('input', function(){
    if (surname_verify && name_verify && email_verify && password_verify && address_verify && postal_verify) {
        
        document.getElementById("submit").style.display = "block";

    } else {
        document.getElementById("submit").style.display = "none";
    }
})
});
