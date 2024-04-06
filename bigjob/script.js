const calendar = document.getElementById('calendar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentYear, currentMonth;

function createCalendar(year, month) {
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

    const monthDays = new Date(year, month + 1, 0).getDate(); //Recupère le dernier jour du mois demandé
    const firstDayIndex = new Date(year, month, 1).getDay(); //Recupère le premier jouer du mois demandé
    console.log(firstDayIndex)
    
    const monthDiv = document.createElement('div'); //Crée un div
    monthDiv.classList.add('month'); //Ajoute la class month
    monthDiv.innerHTML = `<h2>${monthNames[month]} ${year}</h2>`; //Ajoute un H2 avec le nom du mois et l'année

    const weekdaysDiv = document.createElement('div'); //Crée un div
    weekdaysDiv.classList.add('weekdays'); //Ajoute la class "weekdays"

    const daysDiv = document.createElement('div'); //crée une div
    daysDiv.classList.add('days'); //ajoute la classe days

    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDayDiv = document.createElement('div');
        emptyDayDiv.classList.add('day');
        emptyDayDiv.style.width = '12%'; // Ajout du style de largeur
        daysDiv.appendChild(emptyDayDiv);
    }
    
    for (let i = 1; i <= monthDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.textContent = i;
        dayDiv.style.width = '12%'; // Ajout du style de largeur
        daysDiv.appendChild(dayDiv);

        // Ajout de l'événement de clic à chaque jour
        dayDiv.addEventListener('click', function() {showModal(i, month, year); // Fonction à appeler lors du clic
        });
    }

    function saveDateToJSON(day, month, year) {
        const data = {
            day: day,
            month: month + 1,
            year: year
        };
    
        // Convertit l'objet JSON en chaîne JSON
        const jsonData = JSON.stringify(data);
    
        // Enregistre les données dans un fichier JSON local
        // Dans ce cas, on utilise localStorage, mais vous pouvez ajuster cela selon vos besoins
        localStorage.setItem('savedDate', jsonData);
    
        console.log('Date sauvegardée avec succès :', jsonData);
    }
    
    function attachClickEventToDays() {
        const days = document.querySelectorAll('.day');
    
        days.forEach(day => {
            day.addEventListener('click', function() {
                const dayOfMonth = parseInt(this.textContent);
                saveDateToJSON(dayOfMonth, currentMonth, currentYear);
                showModal(dayOfMonth, currentMonth, currentYear);
            });
        });
    }
    
    // Appel de la fonction pour attacher les événements de clic aux jours du mois
    attachClickEventToDays();
    

    function showModal(day, month, year) {
        const modal = document.getElementById('modal');
        const modalDate = document.getElementById('modal-date');
        modalDate.textContent = `Jour sélectionné : ${day}, Mois : ${month + 1}, Année : ${year}`;
    
        // Afficher la modale
        modal.style.display = 'block';
    
        // Gérer la fermeture de la modale lors du clic sur le bouton de fermeture (×)
        const closeButton = document.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });    
     }
    
    

    monthDiv.appendChild(weekdaysDiv);
    monthDiv.appendChild(daysDiv);

    calendar.innerHTML = '';
    calendar.appendChild(monthDiv);
}

function showPrevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentYear, currentMonth);
}

function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createCalendar(currentYear, currentMonth);
}

prevBtn.addEventListener('click', showPrevMonth);
nextBtn.addEventListener('click', showNextMonth);

const now = new Date();
currentYear = now.getFullYear();
currentMonth = now.getMonth();

createCalendar(currentYear, currentMonth);
