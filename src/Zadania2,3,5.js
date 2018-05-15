// Zadanie 2
    const myList = [1,2,3];

    for(let i = 0; i < myList.length; i++) {
        console.log(myList[i]);
    }

// Zadanie 3

function isPalindrom(string) {
    return string == string.split('').reverse().join('');
}

//Zadanie 4

class Kot {
    constructor(imie, waga) {
        this.imie = imie;
        this.waga = waga;
      }
    
    miaucz() {
        console.log(`Nazywam się ${imie} i wazę ${waga} kg`);
    }
}
