//! guna dari closure salah satunya untuk membuat fucntion factory, atau sebuah private method

// function init() {
//   let nama = "farhan";
//   let umur = 33;
//   function tampilNama() {
//     //* Dinamakan closure karna menggunakan variable dari fungsi parent
//     console.log(nama);
//     console.log(umur);
//   }
//   tampilNama();
// }
// init();

//! contoh dari function factory yang mana pendekatan dari closure
// function init() {
//   return function (nama, umur) {
//     //* Dinamakan closure karna menggunakan variable dari fungsi parent
//     console.log(`${nama} - ${umur}`);
//   };
// }
// let tampilNama = init();
// tampilNama("farhan", 12);
// tampilNama("muhamdi", 14);

//! berikut contoh factory function (membuat function sesuai dengan function yang lain)
// function ucapanHormat(status) {
//   return function (nama) {
//     console.log(`hollaaa ${status} ${nama} lama tak jumpa`);
//   };
// }
// let sambutBoss = ucapanHormat("Boss");
// let sambutPekerja = ucapanHormat("bung");
// let sambutAnakBuah = ucapanHormat("woi");

// sambutBoss("farhan");
// sambutPekerja("mahmud");
// sambutPekerja("mulyo");
// sambutAnakBuah("mardi");

//! contoh dari private function
//?ketika menggunakan kode dibawah maka counter akan terganggu
// let counter = 0;
// let add = function () {
//   counter++;
//   console.log(counter);
// };
// add();
// add();
// add();
// counter = 100;
// add();
// add();
// add();

//todo maka kita bisa menggunakan closure sebagai private function
// let count = function () {
//   let counter = 1;
//   return function () {
//     return counter++;
//   };
// };
// let test = count();
// console.log(test());
// console.log(test());
// console.log(test());

//*tips kita tidak perlu membuat variable untuk fucntion test untuk menjalankanya tetapi cukup jalankan fungsi langusng di variable count
let count = (function () {
  let counter = 1;
  return function () {
    return counter++;
  };
})(); //* tambahkan (isi fungsi) ();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
