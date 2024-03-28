$(document).ready(function(){

   var imagesDepart = $('.container-image-first img');
   var imagesFinal = $('.container-image-vide img');
   var tableauPourVerifier = []
   var nomsDesImagesContainer = []


    $('#melange').click(function() {
        imagesDepart.sort(function(){
            return Math.random() - 0.5;
        }).appendTo('.container-image-first')
    })

    $(imagesDepart).click(function (){
        console.log('image cliquée')
        $(this).appendTo('.container-image-vide')
        console.log(imagesFinal)

    })

    $('#verifier').click(function () {
        imagesFinal.each(function () {
            var nomImage = $('this').attr('alt')
            nomsDesImagesContainer.push(nomImage)
        })
        console.log(nomsDesImagesContainer)
    })


    
  }); 