//! untuk while
// var angkot = 1;
// while (angkot <= 10) {
//   console.log("Angkot ke-" + angkot + " " + "beroperasi dengan baik.");
//   angkot++;
// }

//! untuk for
// for (var i = 1; i <= 10; i++) {
//   console.log("ini adalah nomor" + " " + i);
// }

//! untuk if
// var angka = prompt("masukan angka yang ingin di guest");
// if (angka % 2 === 0) {
//   alert(angka + " merupakan bilangan genap");
// } else {
//   alert(angka + " merupakan bilangan ganjil");
// }

//! untuk else if
// var angka = parseInt(prompt("masukan angka yang ingin di guest")); //? parseInt digunakan untuk memaksa nilai prompt menjadi interger
// if (angka % 2 === 0) {
//   alert(angka + " merupakan bilangan genap");
// } else if (angka % 2 === 1) {
//   alert(angka + " merupakan bilangan ganjil");
// } else {
//   alert("yang anda input bukan angka");
// }

//! latihan angkot 2
// var angkot = 1;
// var max = 20;
// var angkotBaik = 11;

// while (angkot <= angkotBaik) {
//   console.log("Angkot ke-" + angkot + " " + "beroperasi dengan baik.");
//   angkot++;
// }
// for (angkot = angkotBaik + 1; angkot <= max; angkot++) {
//   console.log(
//     "angkot ke-" + angkot + " " + "tidak dapat beroperasi dengan baik."
//   );
// }

//! latihan angkot 3
// var angkot = 1;
// var max = 15;
// var angkotBaik = 8;

// for (angkot; angkot <= max; angkot++) {
//   if (angkot <= angkotBaik) {
//     console.log("angkot ke- " + angkot + " beroperasi dengan baik");
//   } else {
//     console.log("angkot ke- " + angkot + " tidak dapat beroperasi dengan baik");
//   }
// }

//! latihan angkot 4
var max = 15;
var angkot = 1;
var angkotBaik = 8;
var angkotLembur = [5, 9, 12];

for (angkot; angkot <= max; angkot++) {
  if (angkot <= angkotBaik && !angkotLembur.includes(angkot)) {
    console.log("angkot ke- " + angkot + " beroperasi dengan baik");
  } else if (angkotLembur.includes(angkot)) {
    console.log("angkot ke- " + angkot + " sedang lembur");
  } else {
    console.log("angkot ke- " + angkot + " tidak dapat beroperasi dengan baik");
  }
}

//! completed looping
// var loop = confirm("apakah kamu inging melanjutkan");
// var counter = 0;

// while (loop === true) {
//   var angka = prompt("masukan angka yang ingin di guest");

//   if (angka.trim() === null) {
//     alert("anda membatalkan penginputan");
//   } else if (angka.trim() === "") {
//     alert("anda tidak memasukan apapun, masukan angka yang ingin dites");
//   } else if (angka.trim() % 2 === 0) {
//     alert(angka + " merupakan bilangan genap");
//   } else if (angka.trim() % 2 === 1) {
//     alert(angka + " merupakan bilangan ganjil");
//   } else {
//     alert("yang anda input bukan angka");
//     loop = false;
//   }

//   counter++;
//   console.log("perulangan telah dilakukan " + counter + " kali");
//   loop = confirm("lagi?");
// }

// alert("terima kasih sudah ikut serta");
