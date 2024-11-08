var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  namaPenumpang = namaPenumpang.toLowerCase();
  if (penumpang.length === 0) {
    penumpang.push(namaPenumpang);
    console.log(namaPenumpang + " memasuki angkot");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === namaPenumpang) {
        console.log("penumpang sudah ada sebelumnya");
        return penumpang;
      }
    }
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] === undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
    }
    penumpang.push(namaPenumpang);
    console.log(namaPenumpang + " memasuki angkot");
    return penumpang;
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  namaPenumpang = namaPenumpang.toLowerCase();
  if (penumpang.length === 0) {
    console.log("Angkot masih kosong");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        console.log(namaPenumpang + " keluar dari angkot");
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " belum ada di angkot");
        return penumpang;
      }
    }
  }
};
