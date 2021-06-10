// &&

//tabel operator logika && 
/*
true && true = true
true && false = false
false && true = false
false && false = false
*/

let ujian = true;
let absen = false;

let hasil = ujian && absen;
document.writeln(hasil);// hasil false karena ujian = true dan absen = false (lihat table diatas)

//paragraf break
document.writeln('<br>');

// || 

// tabel operator logika ||
/*
true && true = true
true && false = false
false && true = false
false && false = false
*/

hasil = ujian || absen;
document.writeln(hasil);// hasil true (alasan liat table operator lohika ||)

//paragraf break
document.writeln('<br>');

// ! (membalik nilai)

// tabel operator logika !
/*
!true = false
!false = true
*/

!hasil;
document.writeln(hasil);// hasil true karena membalik nilai false dari operasi sebelumnya "||" (selengkapnya lihat table operator !)