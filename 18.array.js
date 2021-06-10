// array

let arrayKosong = [];
let nama = ['Hello', 'World', '!'];

console.table(nama); //menampilkan data array menjadi table di console

const array = [];

array.push('Hello', 'World!', 'Test'); //menambah data ke array

const arrayIndex = array[0]; //menampilkan data array pada index[0]

array[1] ='diubah'; //mengubah isi data array index[1]

delete array[2]; //menghapus data array index[2] (tetapi index data tidak bergeser dan panjang array tetap)

array[2] = 'dihapus'; //menambah isi data array yang sebelumnya telah dihapus

array.push(['array', 'multidimensional']); //array multidimensional (array didalam array)

const panjangArray = array.length; //menampilkan panjang array

console.table(array); //menampilkan data array menjadi table di console
console.info(arrayIndex); //menampilkan data index 0 di info console
console.info(panjangArray); //menampilkan panjang Array di info console
