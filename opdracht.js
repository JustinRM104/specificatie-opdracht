let alleStudenten = [];
let klassen = [];

function laden() {
    if (localStorage.getItem("alleStudenten")) {
        alleStudenten = localStorage.getItem("alleStudenten");
    }

    if (localStorage.getItem("klassen")) {
        alleStudenten = localStorage.getItem("klassen");
    }   
}

function opslaan() {
    localStorage.setItem("alleStudenten", alleStudenten);
    localStorage.setItem("klassen", klassen);
}

function checkKlas(klasnaam) {
    if (!klassen[klasnaam]) {
        klassen[klasnaam] = []; 
    }
}

class Student {
    constructor(nummer, klas) {
        this.nummer = nummer;
        this.klas = klas;

        checkKlas(this.klas);

        alleStudenten.push(this);
        klassen[this.klas].push(this);
    }
}

let justin = new Student(524, "MD2A")

opslaan();

console.log(alleStudenten);
console.log(klassen);
