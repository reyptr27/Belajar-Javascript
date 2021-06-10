const number1 = parseInt('100.1');//mengubah string ke number tapi tidak menerima float(desimal)
const number2 = parseFloat('100.1');//mengubah string ke number ,menerima bilangan bulat atau float(desimal)
const number3 = Number('100.1');//mengubah string ke number ,menerima bilangan bulat atau float(desimal)

document.writeln(number1);

//paragraf break
document.writeln('<br>');

document.writeln(number2);

//paragraf break
document.writeln('<br>');

document.writeln(number3);

//paragraf break
document.writeln('<br>');

//input bukan number

const number4 = parseInt('100.1salah'); //mentolerir input string yang isinya bukan cuma number (kesalahan harus didepan apabila dibelakang akan bernilai NaN)
const number5 = parseFloat('100.1salah');  //mentolerir input string yang isinya bukan cuma number (kesalahan harus didepan apabila dibelakang akan bernilai NaN)
const number6 = Number('100.1salah'); // tidak mentolerir salah input (hanya menerima number)

document.writeln(number4);

//paragraf break
document.writeln('<br>');

document.writeln(number5);

//paragraf break
document.writeln('<br>');

document.writeln(number6);

//paragraf break
document.writeln('<br>');

//number to string
const number7 = 100;
const number8 = 100;

const hasil = number7.toString() + number8.toString();
document.writeln(hasil);