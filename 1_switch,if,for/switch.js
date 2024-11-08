// var nilai = parseInt(prompt("masukan angka anda: ")); //? parseInt() digunakann untuk mengubah string ke interger

// switch (nilai) {
//   case 1:
//     alert("Anda memasukkan angka " + nilai);
//     break;
//   case 2:
//     alert("anda memasukan angka " + nilai);
//     break;
//   case 3:
//     alert("anda memasukan angka " + nilai);
//     break;
//   default:
//     alert("masukan angka antara 1-3");
// }

// var nilai = prompt(
//   "coba pilih makanan yang anda sukai \ncontoh = ikan, nasi, ayam, bakwan, pregedel, bir"
// );

// switch (nilai) {
//   case "ikan":
//   case "nasi":
//   case "ayam":
//     alert("makanan yang anda pilih makanan SEHAT!!");
//     break;
//   case "bakwan":
//   case "pregedel":
//   case "bir":
//     alert("makanan yang anda pilih makanan TIDAK SEHAT!!!!");
//     break;
//   default:
//     alert("PILIH MAKANAN SESUAI DENGAN KRITERIA DIATAS!!!");
// }

//!bintang sama rata 5
// var i = "";
// for (var s = 0; s <= 5; s++) {
//   for (var j = 0; j <= 5; j++) {
//     i += "*";
//   }
//   i += "\n";
// }
// console.log(i);

//!bintang dari sedikit kebanyak nempel kiri
// var m = "";
// for (var a = 0; a <= 5; a++) {
//   for (var b = 0; b <= a; b++) {
//     m += " *";
//   }
//   m += "\n";
// }
// console.log(m);

//! bintangnya dari banyak kesedikit depet kekanan
// var l = "";
// var rows = 5;
// for (var a = rows; a >= 1; a--) {
//   for (var c = 1; c <= rows - a; c++) {
//     l += ".";
//   }
//   for (var b = 1; b <= a; b++) {
//     l += "*";
//   }
//   l += "\n";
// }
// console.log(l);

//!segitiga sama kaki
// var a = "";
// var rows = 4;

// for (var b = 0; b <= rows; b++) {
//   for (var d = 1; d <= rows - b; d++) {
//     a += " ";
//   }
//   for (var c = 0; c <= b * 2; c++) {
//     a += "*";
//   }
//   a += "\n";
// }
// console.log(a);

//!belah ketupat bintang
// var a = "";
// var rowsPlus = 5;
// var rowsMinus = 0;
// var rowsTotal = 10;
// for (var b = 0; b <= rowsTotal; b++) {
//   if (b <= 5) {
//     // Bagian atas piramida
//     for (var c = rowsMinus; c <= rowsPlus - b; c++) {
//       a += " ";
//     }
//     for (var d = 0; d <= b * 2; d++) {
//       a += "*";
//     }
//   } else {
//     // Bagian bawah piramida
//     for (var c = 5; c <= b - rowsMinus; c++) {
//       a += " ";
//     }
//     for (var d = 0; d <= (rowsTotal - b) * 2; d++) {
//       a += "*";
//     }
//   }
//   a += "\n";
// }
// console.log(a);
