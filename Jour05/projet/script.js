document.addEventListener("DOMContentLoaded", function() {
    var surname_verify = false; // Variable de vérification pour le nom
    var name_verify = false; // Variable de vérification pour le prénom
    var email_verify = false; // Variable de vérification pour l'email
    var password_verify = false; // Variable de vérification pour le mot de passe
    var address_verify = false; // Variable de vérification pour l'adresse
    var postal_verify = false; // Variable de vérification pour le code postal
    var button = document.getElementById("submit");

    document.getElementById('nom').addEventListener('input', function() { // Verifie que le champ n'est pas vide
        var surname = document.getElementById("nom").value;
        if (surname.length <= 0){
            document.getElementById("error_surname").style.display = "block";
            surname_verify = false;
        } else {
            document.getElementById("error_surname").style.display = "none";
            surname_verify = true;
        }
    });

    document.getElementById('prenom').addEventListener('input', function() { // Verifie que le champ n'est pas vide
        var name = document.getElementById("prenom").value;
        if (name.length <= 0){
            document.getElementById("error_name").style.display = "block";
            name_verify = false;
        } else {
            document.getElementById("error_name").style.display = "none";
            name_verify = true;
        }
    });

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

    document.getElementById('adresse').addEventListener('input', function() { // Verifie que le champ n'est pas vide
        var address = document.getElementById("adresse").value;
        if (address.length <= 0){
            document.getElementById("error_adress").style.display = "block";
            address_verify = false;
        } else {
            document.getElementById("error_adress").style.display = "none";
            address_verify = true;
        }
    });

    document.getElementById('codepostal').addEventListener('input', function() { // Verifie que le champ n'est pas vide, et qu'il soit au bon format
        var postal = document.getElementById("codepostal").value;
        var postalRegex = /^[0-9]+$/;
        if (postal.length <=0){
            document.getElementById("error_postal_empty").style.display = "block";
            document.getElementById("error_postal_contain").style.display = "none";
            document.getElementById("error_postal_five").style.display = "none";
            postal_verify = false;
        } else if (!postalRegex.test(postal)) {
            document.getElementById("error_postal_empty").style.display = "none";
            document.getElementById("error_postal_contain").style.display = "block";
            document.getElementById("error_postal_five").style.display = "none";
            postal_verify = false;
        } else if (postal.length !=5) {
            document.getElementById("error_postal_empty").style.display = "none";
            document.getElementById("error_postal_five").style.display = "block";
            document.getElementById("error_postal_contain").style.display = "none";
            postal_verify = false;
        } else {
            document.getElementById("error_postal_empty").style.display = "none";
            document.getElementById("error_postal_contain").style.display = "none";
            document.getElementById("error_postal_five").style.display = "none";
            postal_verify = true;
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
