const joursFeries = [
    new Date(aujd.getFullYear(), 0, 1), // Jour de l'An
    new Date(aujd.getFullYear(), 4, 1), // Fête du Travail
    new Date(aujd.getFullYear(), 4, 8), // Victoire 1945
    new Date(aujd.getFullYear(), 6, 14), // Fête Nationale
    new Date(aujd.getFullYear(), 7, 15), // Assomption
    new Date(aujd.getFullYear(), 10, 1), // Toussaint
    new Date(aujd.getFullYear(), 10, 11), // Armistice
    new Date(aujd.getFullYear(), 11, 25), // Noël
    new Date(aujd.getFullYear(), 11, 26) // Saint Etienne
];


function jourFerie(date) {
    for (const element of joursFeries) {
        if (date.getTime() === element.getTime()) {
            return true;
        }
    }
    return false;
}

function isWeekend (date) {
    jourSemaine = date.getDay()

    if (jourSemaine == 0 || jourSemaine == 6) {
        return true
        }
    return false
}

function jourTravaille(date) {
    if (jourFerie(date)) {
        console.log(date + ' est un jour férié');
    } else if (isWeekend(date)) {
        console.log(date + ' est un jour de weekend');
    } else {
        console.log(date + ' est un jour ouvert');
    }
}

// Obtention de la date d'hier
let hier = new Date();
hier.setDate(aujd.getDate() - 2);

let nouvelAn= new Date(2024, 0, 1);


jourTravaille(aujd)
// Appel de la fonction pour déterminer le type de jour pour hier
jourTravaille(hier);
// Appel de la fonction pour le jour de paque
jourTravaille(nouvelAn);