//todo menggunakan for
// const angka = [-1, 4, 7, 2, -5, -2, 8, 9, 5, -3, -7];
// const newAngka = [];
// for (i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

//todo menggunakan filter
// const angka = [-1, 4, 7, 2, -5, -2, 8, 9, 5, -3, -7];
// const newAngka = angka.filter(function (a) { //*tanpa arrow function
//   return a >= 3;
// });
// console.log(newAngka);

// const angka = [-1, 4, 7, 2, -5, -2, 8, 9, 5, -3, -7];
// const newAngka = angka.filter((a) => a >= 3); //*menggunakan arrow function (jika hanya ada 1 return tidak perlu mengunakan kurawal
// console.log(newAngka);

//todo menggunakan map
// const angka = [-1, 4, 7, 2, -5, -2, 8, 9, 5, -3, -7];
// //* langsung menggunakan arrow
// const newAngka = angka.map((a) => a * 2); //todo cara bacanya untuk (a) adalah telusuri semua elemen pada angka dan (=> a*2) lalu kalikan a yang ditemukan dengan 2
// console.log(angka);
// console.log(newAngka);

//todo menggunakan reduce
// const angka = [-1, 4, 7, 2, -5, -2, 8, 9, 5, -3, -7];
// const newAngka = angka.reduce(
//   //todo reduce harus menggunakan 2 argument untuk menjadi parameternya
//   (acumulator, currentValue) => acumulator + currentValue,
//   0 //?nilai 0 merupakan nilai awal dan dapat dirubah
// );
// console.log(newAngka);

//todo menggunakan method chaining yaitu menggabungkan semua method diatas
//? cari angka > 3, kalikan 3, jumlahkan
const angka = [-1, 4, 7, 2, -5, -2, 8, 9, 5, -3, -7];
const newAngka = angka
  .filter((a) => a >= 3) //* 4, 7, 8, 9, 5
  .map((a) => a * 2) //* 8, 14, 16, 18, 10
  .reduce((acc, cur) => acc + cur); //* 66
console.log(newAngka);
