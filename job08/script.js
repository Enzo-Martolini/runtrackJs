function estPremier (n) {

    //Si le nombre est inférieur ou egal à un, il n'est pas premier
    if (n<=1) {
        return false;
    }

    for (let i = 2 ; i <= Math.sqrt(n) ; i++ ) {
        if (n % i === 0) { 
            return false;
        }
    }
    return true;
}

console.log(estPremier(4));
console.log(estPremier(3));
console.log(estPremier(0));