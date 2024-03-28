document.addEventListener("DOMContentLoaded", function() {

    async function getText() { //Definition de la fonction getText()
        var response = await fetch('expression.txt'); //Récupère le fichier fichier expression.txt
        var text = await response.text(); //Récupère le text dans la réponse
        var paragraph = document.createElement('p'); //Crée une balise <p>
        paragraph.textContent = text; //Ajoute le texte dans la balise
        document.body.appendChild(paragraph); //Ajoute la balise avec son texte dans le body
      }
    
      // Ajoutez un écouteur d'événements au bouton
      document.getElementById('button').addEventListener('click', async function() {
    
        console.log('hello world');
        getText()
    

      })


  });
 