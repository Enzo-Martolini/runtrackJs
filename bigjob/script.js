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

    /*const weekdays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    weekdays.forEach(day => {
        const weekdayDiv = document.createElement('div');
        weekdayDiv.classList.add('weekday');
        weekdayDiv.textContent = day;
        weekdaysDiv.appendChild(weekdayDiv);
    }); */
    //Pour chaque jour, crée une div avec la class weekdays, ajoute le weekdayss[day], pour l'ajoute la div weekday à la div weekdays
    //Donc dans la dic weekdays, on a une div weekday pour chaque jour de la semaine

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
