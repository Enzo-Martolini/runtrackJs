$(document).ready(function(){

    var images = $('.container-image-first img');
    var imagesArrivée = $('.container-image-first img');


    $('#btn').click(function() {


        images.sort(function() {
            return Math.random() - 0.5;
        })
        .appendTo('.container-image-first')

        console.log(images)
    })

    $(images).click(function(){
        $(this).appendTo('.container-image-vide');
    }) //Melange mes images puis les renvois dans sa div



    var nomsDesImages = []; // Tableau pour stocker les noms des images

    // Parcourir chaque image et ajouter son attribut 'alt' au tableau
    images.each(function() {
        var nomImage = $(this).attr('alt');
        nomsDesImages.push(nomImage);
    });

    // Afficher les noms des images dans la console
    console.log(nomsDesImages);

    $("#verifier").click(function(){
        images2 = $('.container-image-vide img');
        var nomsDesImages2 = [];

        images2.each(function() {
            var nomImage2 = $(this).attr('alt');
            nomsDesImages2.push(nomImage2);
        });

        console.log(nomsDesImages2)

        if (comparerTableaux(nomsDesImages, nomsDesImages2)) {
            $('#ok').css('display', 'block');  
            $('#no').css('display', 'none');  
        } else {
            console.log("Les tableaux ne sont pas identiques.");
            $('#no').css('display', 'block'); 
            $('#ok').css('display', 'none'); 

        }
    })

    function comparerTableaux(nomImage, nomImage2) {
        // Vérifier d'abord si les deux tableaux ont la même longueur
        if (nomImage.length !== nomImage2.length) {
            return false;
        }
    
        // Parcourir chaque élément des deux tableaux
        for (var i = 0; i < nomImage.length; i++) {
            // Si les éléments correspondants diffèrent, les tableaux ne sont pas identiques
            if (nomImage[i] !== nomImage2[i]) {
                return false;
            }
        }
    
        // Si aucun élément ne diffère, les tableaux sont identiques
        return true;
    }
})