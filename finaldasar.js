function Angkot(supir, trake, penumpang, kas) {
  this.supir = supir;
  this.trake = trake;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    while (this.penumpang.length === 0) {
      console.log("Angkot sedang kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        console.log(
          `total pendapatan kita sampai saat ini adalah ${this.kas} `
        );
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot("farhan", ["cacaheum", "cibiru"], [], 0);
let angkot2 = new Angkot("alwand", ["antapani", "ciroyom"], [], 0);
