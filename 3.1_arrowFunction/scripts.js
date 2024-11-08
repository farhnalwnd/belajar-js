//! contoh arrow function
//todo beda dengan fungsi ekpresi hanya pada tanda panahnya yang mana arrow function menggunakan panah sedangkan expression meggunakan kata function
//* contoh 1
// let tampilanNama = (nama) => {
//   return(`hello ${nama}`);
// };
// tampilanNama("farhan");

//* contoh 2
// let tampilanNama = (nama, umur) => {
//   return(`hello ${nama}, apakah usia kamu adalah ${umur}`);
// };
// tampilanNama("farhan", 20);

//* contoh 3
// let tampilanNama = (nama, umur) =>
//     `hello ${nama}, apakah usia kamu adalah ${umur}`;
//   console.log(tampilanNama("farhan", 20));

//* implist return yaitu ketika parameter hanya satu dan output hanya return kita tidak perlu menuliskan return
// let tampilanNama = (nama) => `hallo ${nama}`;
// console.log(tampilanNama("farhan"));

//* ketika tidak ada parameter kita bisa membuat seperti dibawah
// let sapa = () => `hello beb`;
// console.log(sapa());

//*contoh peenggunaan arrow function
//?berikut contoh ketika kita tidak menggunakan arrow function
// let mahasiswa = ["farhan alwanda", "nadia putri salsabil", "mulyono sebastian"];
// let panjangNama = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(panjangNama);

//?dan berikut contoh ketika menggunakan arrow function
// let mahasiswa = [
//   "farhan alwanda",
//   "nadia putri salsabil",
//   "mulyono sebastian",
//   "wagyu a4",
// ];
// let panjangNama = mahasiswa.map((nama) => nama.length); //todo hilangkan tulisan function dan return
// console.log(panjangNama);

//*cara agar kita dapat mengambil array dan mengubah menjadi object (gunakan bungkus {} dengan () seperti berikut ({isi object})
let mahasiswa = [
  "farhan alwanda",
  "nadia putri salsabil",
  "mulyono sebastian",
  "wagyu a4",
];
let dataNama = mahasiswa.map((nama) => ({ nama: nama, jmlhuruf: nama.length }));
console.table(dataNama);
