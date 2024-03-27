let numbers = [2, 5, 8, 253, 78, 6];
let tri = [];

function asc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function desc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function trier(order, array) {
    tri = []; // Réinitialiser tri avant chaque tri
    if (order === "asc") {
        asc(array);
    } else if (order === "desc") {
        desc(array);
    }

    for (number of array) {
        tri.push(number); // Ajouter chaque élément trié à tri
    }
    
    return tri;
}

let resultAsc = trier('asc', numbers.slice());
console.log("Tableau trié par ordre croissant :", resultAsc);

let resultDesc = trier('desc', numbers.slice());
console.log("Tableau trié par ordre décroissant :", resultDesc);

// Tableau de tri

var tableauNonTrie = [ 4, 7 , 56, 675, 32, 6];
var tableauTrieAsc = [];
var tableauTrieDes = [];

function ascendant (array){

    for ( i = 0; i < array.length - 1; i++){
        for ( j = 0; j < array.length - i - 1; j++){
            if (array[j]>array[j+1]){
                var temp = array[j];
                array[j] = array[j + 1];
                array[j+1]= temp;
            }

        }
    }

    for (numbers of array) {
        tableauTrieAsc.push(numbers)
    }
}

function descendant (array){

    for ( i = 0; i < array.length - 1; i++){
        for ( j = 0; j < array.length - i - 1; j++){
            if (array[j]<array[j+1]){
                var temp = array[j];
                array[j] = array[j + 1];
                array[j+1]= temp;
            }

        }
    }

    for (numbers of array) {
        tableauTrieDes.push(numbers)
    }
}


descendant(tableauNonTrie)
ascendant(tableauNonTrie)

console.log(tableauTrieAsc)
console.log(tableauTrieDes)