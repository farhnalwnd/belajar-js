//* function  literal
// let Mahasiswa1 = {
//   nama: "farhan alwanda",
//   energi: 20,
//   suplier: function (makan) {
//     this.energi += makan;
//     console.log(`${this.nama} telah makan, dan energi menjadi ${this.energi}`);
//   },
// };

// let Mahasiswa2 = {
//   nama: "mardiansyah",
//   energi: 15,
//   suplier: function (makan) {
//     this.energi += makan;
//     console.log(`${this.nama} telah makan, dan energi menjadi ${this.energi}`);
//   },
// };

//* function declaration
// function mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energy;

//   mahasiswa.suplement = function (makan) {
//     this.energi += makan;
//     console.log(
//       `${this.nama} telah makan sebanyak ${makan} maka energi bertambah menjadi ${this.energi}`
//     );
//   };
//   return mahasiswa;
// }
// let farhan = mahasiswa("farhan alwanda", 15);
// let ahmad = mahasiswa("ahmad mahmuda", 15);

//todo: contoh agar lebih efisiens untuk memori tetapi masih sedikit rumit ketika menambahkan objek baru
// const asupanMahasiswa = {
//   suplement: function (makan) {
//     this.energi += makan;
//     console.log(
//       `${this.nama} telah makan sebanyak ${makan} maka energi bertambah menjadi ${this.energi}`
//     );
//   },
//   olahraga: function (jam) {
//     this.energi -= jam;
//     console.log(
//       `${this.nama} telah melakukan olahraga sebanyak ${jam} maka energi berkurang menjadi ${this.energi}`
//     );
//   },
// };

// function mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energy;
//   mahasiswa.suplement = asupanMahasiswa.suplement;
//   mahasiswa.olahraga = asupanMahasiswa.olahraga;

//   return mahasiswa;
// }
// let farhan = mahasiswa("farhan alwanda", 15);
// let ahmad = mahasiswa("ahmad mahmuda", 15);

//todo: contoh agar lebih hemat memori dan simple saat menambahkan object
// const asupanMahasiswa = {
//   suplement: function (makan) {
//     this.energi += makan;
//     console.log(
//       `${this.nama} telah makan sebanyak ${makan} maka energi bertambah menjadi ${this.energi}`
//     );
//   },
//   olahraga: function (jam) {
//     this.energi -= jam;
//     console.log(
//       `${this.nama} telah melakukan olahraga sebanyak ${jam} maka energi berkurang menjadi ${this.energi}`
//     );
//   },
// };

// function mahasiswa(nama, energy) {
//   let mahasiswa = Object.create(asupanMahasiswa); //! gunakan Object.create untuk menghubungkan antara kedua object
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energy;

//   return mahasiswa;
// }
// let farhan = mahasiswa("farhan alwanda", 15);
// let ahmad = mahasiswa("ahmad mahmuda", 15);

//* constructor function
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energi = energy;

//   this.suplement = function (makan) {
//     this.energi += makan;
//     console.log(
//       `${this.nama} telah makan sebanyak ${makan} maka energi bertambah menjadi ${this.energi}`
//     );
//   };
// }
// let farhan = new Mahasiswa("farhan alwanda", 15);
// let ahmad = new Mahasiswa("ahmad mahmuda", 15);

//todo: berikut adalah cara menggunakan prototype dimana lebih efisiens caranya dari segala aspek sebelumnya
// function Mahasiswa(nama, energi) {
//   //! yang terjadi dibelakang layar sebagai berikut
//   // // let this = (nama function dari object);
//   this.nama = nama;
//   this.energi = energi;
// }
// Mahasiswa.prototype.suplement = function (makan) {
//   this.energi += makan;
//   console.log(`${this.nama} telah makan, dan energi menjadi ${this.energi}`);
// };

// Mahasiswa.prototype.olahraga = function (jam) {
//   this.energi /= jam * 0.8;
//   console.log(
//     `${this.nama} telah melakukan olahraga sebanyak ${jam} maka energi berkurang menjadi ${this.energi}`
//   );
// };
// // // return this;
// let farhan = new Mahasiswa("farhan alwanda", 10);

//todo: contoh ketika menggunakan class ketika kasus seperti ini yaitu dengan menggunaka constructor
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  suplement(makan) {
    this.energi += makan;
    console.log(`${this.nama} telah makan, dan energi menjadi ${this.energi}`);
  }

  olahraga(jam) {
    this.energi /= jam * 0.8;
    console.log(
      `${this.nama} telah melakukan olahraga sebanyak ${jam} maka energi berkurang menjadi ${this.energi}`
    );
  }
}
// // return this;
let farhan = new Mahasiswa("farhan alwanda", 10);
