

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
let person_1 = {name: "Geovanni", age: 25}
let person_2 = {name: "Kalle", age: 20 }
let person_3 = {name: "Anders", age: 31}
let person_4 = {name: "Niklas", age: 54}
let person_5 = {name: "Pelle", age: 42}

persons = [person_1, person_2, person_3, person_4, person_5]

function age_tester(persons){
    //gå igenom listan och kolla vilka som är över 30
    // skriv ut namn på dom som är över 30
for (i=0;i<persons.length;i++){
    if (persons[i].age>30){
        console.log(persons[i].name)
    }
}
}

age_tester(persons)
}

module.exports = { uppg8 };