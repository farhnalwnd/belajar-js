//!contoh penjumlahan 2 volumm kubus
// function jumlahDuaKubus(a, b) {
//   const kubus1 = a * a * a;
//   const kubus2 = b * b * b;

//   const total = kubus1 + kubus2;

//   return total;
// }
// alert(jumlahDuaKubus(3, 5));
// alert(jumlahDuaKubus(8, 9));
// alert(jumlahDuaKubus(1, 6));

//! jika ingin mengisi array tanpa mempedulikan parameter maka gunakan array arguments
// function penambahan() {
//   let hasil = 0;
//   for (i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// let total = penambahan(1, 2, 3, 4, 5, 6);
// alert(total);

//! rumus function declaration adalah [ function identifier/nama fungsi(parameter opsional){function body}
//! rumus function expression adalah [ function identifier/nama fungsi opsional(parameter opsional){function body}]

//! contoh function declaration [ function identifier/nama fungsi(parameter opsional){function body}
// function tampilPesen(nama, umur) {
//   alert("hello " + nama);
//   alert("umur saya " + umur);
// }
// tampilPesen("ahmad", "15");

//! rumus function expression adalah [ function identifier/nama fungsi opsional(parameter opsional){function body}]
let tampilPesen = function (nama, umur) {
  alert("hello " + nama);
  alert("umur saya " + umur);
};

tampilPesen("ahmad", "15");
