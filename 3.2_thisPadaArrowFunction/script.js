//! konsep dari arrow function
//*contructor function
// let Mahasiswa = function () {
//   this.nama = "farhan";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`haiii nama saya ${this.nama} dengan umur ${this.umur}`);
//   };
//   console.log(this);
// };
// let farhan = new Mahasiswa();

//*kode yang sama dengan diatas tapi menggunakan arrow function pada constructor function
// let Mahasiswa = function () {
//   this.nama = "farhan";
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`haiii nama saya ${this.nama} dengan umur ${this.umur}`);
//   };
// };
// let farhan = new Mahasiswa();

//! jika disituasi literal object maka arrow function tidak dapat memperoleh variablenya karna this tidak memiliki this
// const Mahasiswa = {
//   nama: "farhan",
//   umur: 20,
//   sayHello: () => {
//     console.log(`haiii nama saya ${this.nama} dengan umur ${this.umur}`);
//     console.log(this);
//   },
// };
//// outputnya adalah haiii nama saya undefine dengan umur undefine

// const Mahasiswa = {
//   nama: "farhan",
//   umur: 20,
//   sayHello: function () {
//     console.log(`haiii nama saya ${this.nama} dengan umur ${this.umur}`);
//   },
// };
////outputnya benar

//* contoh sederhama yang lebih lengkap
// let Mahasiswa = function () {
//   this.nama = "farhan";
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`haiii nama saya ${this.nama} dengan umur ${this.umur}`);
//   };
//   //todo kita gunakan arrow karna jika kita gunakan function declaration maka akan dihoisting dan this akan kebaca window
//   setInterval(() => {
//     //todo maka kita gunakan arrow agar this akan ditelusuri kaas karna arrow tidak memiliki konsep this
//     console.log(this.umur++);
//   }, 1000);
// };
// let farhan = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  //!gunakan variable sementara
  if (this.classList.contains(satu)) {
    //? jika parameter sudah ada ketika dicek maka akan dibalikan menjadi kebalikanya
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
