let aujd = new Date();
let annee = aujd.getFullYear();

function joursDansAnnee(annee) {
    // Vérifier si l'année est bissextile
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true; // Si bissextile, l'année a 366 jours
    } else {
        return false; // Sinon, l'année a 365 jours
    }
}