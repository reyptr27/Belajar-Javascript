//NaN (not a number)

const first = Number("salah"); //NaN
const total = first + 100;

//akan berisi NaN, karena apabila nilai NaN + number = NaN begitupun seterusnya

document.writeln(total);

//paragraf break
document.writeln('<br>');

//isNaN mengecek variable apakah berisi NaN atau tidak dan return nilai boolean
document.writeln(isNaN(total)); //true

//paragraf break
document.writeln('<br>');

document.writeln(isNaN(100)); //false

//paragraf break
document.writeln('<br>');

document.writeln(isNaN(NaN)); //true

