// //* contoh object literal
// //! sebaiknya digunakan hanya untuk 1 object
// var mhs = {
//   nama: "farhan alwanda",
//   umur: 20,
//   ips: [3.45, 3.57, 3.88, 3.24],
//   alamat: {
//     jalan: "jalan terusan",
//     kelurahan: "kelurahan sukasari",
//     kecamatan: "kecamatan sukasari",
//     kabupaten: "kabupaten sukasari",
//     provinsi: "jawa timur",
//   },
//   tapilanIdentitas: function () {
//     return (
//       "hai semuanya nama saya adalah " +
//       this.nama +
//       "\nusia saya tahun ini adalah " +
//       this.umur +
//       " tahun\n" +
//       "dan saya tingal di " +
//       this.alamat.jalan +
//       ", " +
//       this.alamat.kelurahan +
//       ", " +
//       this.alamat.kabupaten +
//       ", " +
//       this.alamat.provinsi
//     );
//   },
// };
// mhs.tapilanIdentitas();

// //* contoh function declaration
// function buatObjectOtomatis(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs; //!harus ada return untuk declaration jika membuat object
// }
// var mhs3 = buatObjectOtomatis("andy", 123124, "wwwada@gmail.com", "IT");
// var mhs4 = buatObjectOtomatis("budy", 6322468, "ffegh@gmail.com", "IS");

// //* contoh object constructor
// function Mahasiswa(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }
// var mhs5 = new Mahasiswa("badrul", 62217672, "afefabu@gmail.com", "BA"); //! manggilnya make new

//!cara memanggil object
// //? 1.function declaration
// function hallo() {
//   console.log("hello world");
// }
// hallo();

// function hallo() {
//   console.log(this);
//   console.log("hello world");
// }
// this.hallo(); //* this mengembalikan objek global

//? 2. object literal
// var tes = {};
// tes.gelo = function () {
//   console.log("gello world");
// };
// tes.gelo();

// var tes = { a: "a", b: "b" };
// tes.gelo = function () {
//   console.log(this); //* this mengembalikan objek yang besangkutan
//   console.log("gello world");
// };
// tes.gelo();

//? 3. object constructor
// function Hallo() {
//   console.log("haiii semua");
// }
// new Hallo();

// function Hallo() {
//   console.log(this); //* this mengembalikan objek yang baru dibuat
//   console.log("haiii semua");
// }
// var obj1 = new Hallo();
// var obj2 = new Hallo();
