const masuk = confirm('Yakin mau masuk ?');

if (masuk) {
   const nama = prompt('masukkan nama anda');
   alert(`Hello ${nama}`);
} else {
    alert('selamat tinggal!');
}