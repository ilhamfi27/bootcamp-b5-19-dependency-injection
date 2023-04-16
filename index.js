const promptSync = require('prompt-sync'); // dari npm, harus install lewat npm
// const matematika = require('./matematika'); // sama saja
const { jumlah, kurang, kali, bagi } = require('./matematika'); // sama saja

const prompt = promptSync();
const op = prompt('mau operasi apa? ');
const angka1 = parseInt(prompt('masukkan angka 1: '));
const angka2 = parseInt(prompt('masukkan angka 2: '));

let hasil = 0;
if (op == 'jumlah') {
  hasil = jumlah(angka1, angka2);
} else if (op == 'kurang') {
  hasil = kurang(angka1, angka2);
} else if (op == 'kali') {
  hasil = kali(angka1, angka2);
} else if (op == 'bagi') {
  hasil = bagi(angka1, angka2);
} else {
  console.log('bukan operasi!');
}
console.log('hasilnya adalah:', hasil);
