    const citationsBladeRunner = [
        "J'ai vu des choses que vous, les humains, ne pourriez pas croire.",
        "Il est temps de mourir.",
        "Ce n'est que si on est mort qu'on peut aller au ciel.",
        "Toutes ces choses disparaîtront, comme des larmes dans la pluie.",
        "Je veux plus de vie, Père.",
        "La lumière qui brille deux fois plus vite brûle deux fois plus court.",
        "J'ai fait une erreur. Ça arrive même aux meilleurs.",
        "Je veux que tu me dises ce que c'est que vraiment aimer quelqu'un.",
        "Des souvenirs, tu en as toute ta vie. Mais il y a ceux que tu te rappelles. Et puis il y a ceux que ton imagination t'invente.",
        "J'en ai assez de tout ça. Assez de leçons à apprendre. Assez de questions sans réponse.",
    ];

    var maDiv = document.getElementById("worldDiv");

    // Créer un nouveau paragraphe
    var paragraphe = document.createElement("p");
    var chiffre = chiffreAleatoire()

    function chiffreAleatoire() {
        // Générer un nombre aléatoire entre 0 et 9
        return Math.floor(Math.random() * 10);
    }

    function ajouterParagraphe(chiffre) {


        
        // Ajouter le texte à l'intérieur du paragraphe en utilisant le chiffre aléatoire
        paragraphe.textContent = citationsBladeRunner[chiffre];
        
        // Ajouter le paragraphe à la div
        maDiv.appendChild(paragraphe);
    }
