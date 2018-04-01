//Balik kata
function balikKata(kata) {
    var reverse = "";

    for(var susun = kata.length - 1; susun >= 0; susun--) {
        reverse += kata[susun];
    }
    return reverse;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
