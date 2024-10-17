//* cara mendeclare array
// var binatang = ["kucing", "tikus", "itik", "buaya", "harimau", "singa"]; //?pertama

// var binatang = [];
// binatang = ["kucing", "tikus", "itik", "buaya", "harimau", "singa"]; //? kedua

//* manipulasi array
// var arr = ["a", 1, true];
// console.log(arr); //! menampilkan semua isi array

// console.log(arr[0]); //! mengambil pada index tertentu

//* menambah isi array
// var arr = [];
// arr[0] = "farhand";
// arr[1] = "alwand";
// arr[2] = "tamvan";

// console.log(arr);

//* menghapus isi array
// var arr = ["farhan", "alwand", "tamvan"]; //! menghapus manual
// arr[1] = undefined;
// console.log(arr);

//* menampilkan isi array
// var arr = ["farhan", "alwand", "tamvan", "mamuda", "subardia", "cheng"];
// for (i = 0; i < arr.length; i++) {
//   //! .length artinya membuat js menghitung index arraynya otomatis
//   console.log("mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

//* method pada array
//? 1.join (memasukan seusatu keantara index array sesuai argument yang diberikan dan defaultnya adalah ,)
// var arr = ["farhan", "alwand", "tamvan"];
// console.log(arr.join(" - "));

//? 2. push dan pop(menambahkan dan menghilangkan elemen baru di akhir array)
// var arr = ["farhan", "alwand", "tamvan"];
// arr.push("pa cheng"); //! menambah elemen di akhir array dan bisa beberapa elemen
// arr.pop(); //! menghilankan elemen diakhir array dan hanya bisa satu"
// console.log(arr.join(" - "));

//? 3.unshift dan shift (menambahkan dan menghilangkan elemen baru di awal array)
// var arr = ["farhan", "alwand", "tamvan"];
// arr.unshift("pa cheng", "badrul"); //! menambah elemen diawal array
// arr.shift(); //! menghilankan elemen diawal array
// console.log(arr.join(" - "));

//? 4. slice (mengambil bagian array dan memasukan ke array baru)
//todo slice(awal, akhir)
// var arr = ["farhan", "alwand", "tamvan", "badrul", "bardjo", "pirman"];
// var arr2 = arr.slice(1, 5); //! elemen 5 tidak masuk ke array setelah di slice hanya sampai sebelumnya
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

//? 5.splice (menyisipkan index kedalam array)
// var arr = ["farhan", "alwand", "tamvan", "badrul"];
// //todo splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, .....)
// arr.splice(1, 0, "ahmad", "thomio", "xzal");
// console.log(arr.join(" - "));

//? 6.forEach (hanya memanggil array)
// var mhs = ["farhan", "alwand", "tamvan", "badrul", "bardjo", "pirman"];
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// mhs.forEach(function (a, b) {
//   //! untuk parameter ke1 = elemen, parameter ke2 = index
//   console.log("mahasiswa ke-" + (b + 1) + " adalah " + a);
// });
// angka.forEach(function (a) {
//   console.log(a);
// });

//? 7.map (sama seperti forEach tapi dia dapat dan efisien jika hasilnya dipindahkan ke variable array yang baru / memanggil dan mengembalikan kembali array)
// var angka = [1, 2, 3, 1, 2, 3, 1, 2, 3];
// var angka2 = angka.map(function (a) {
//   return a * 2;
// });
// console.log(angka2.join(" - "));

//? 8. sort (mengurutkan karakter pertama)
// var angka = [3, 2, 1, 7, 5, 4, 9, 8, 10, 11, 19, 20, 21, 28];
// console.log(angka.join(" - "));
// // angka.sort();
// // console.log(angka.join(" - "));
// angka.sort(function (a, b) {
//   return a - b; //! parameter disini untuk membandingan nilai setiap element
// });
// console.log(angka.join(" - "));

//? 9.filter (mengambil array dan memasukan dalam array baru menggunakan function)
// var angka = [
//   3, 3, 5, 2, 1, 7, 5, 3, 5, 7, 8, 7, 6, 4, 3, 2, 8, 7, 9, 6, 4, 2, 3, 5, 1, 2,
//   4, 6, 8, 4,
// ];

// var angka2 = angka.filter(function (a) {
//   return a > 7;
// });

// console.log(angka2.join(" - "));

//? 10.find (mengabil 1 element sesuai perintah dan tidak disimpan dalam bentuk array)
// var angka = [2, 3, 4, 8, 1, 9];

// var angka2 = angka.find(function (a) {
//   return a > 4;
// });
// console.log(angka2);

// //! contoh dari function expression lebih simple dari diatas
// console.log(
//   angka.find(function (a) {
//     return a > 4;
//   })
// );
