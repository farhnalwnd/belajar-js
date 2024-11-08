let repeat = confirm(
  "selamat datang digame tebak angka, apakah kamu siap melanjutkan?"
);

while (repeat == true) {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  let randomNumber = generateRandomNumber();
  console.log(randomNumber);

  alert("tebak angka dari 1 -10 ");
  let answer = parseInt(prompt("coba tebak angka yang benar"));
  for (let i = 4; i >= 0; i--) {
    if (i === 0) {
      alert("Anda gagal, angka yang benar adalah " + randomNumber);
    } else if (answer === randomNumber) {
      alert("selamat anda benar jawabanya adalah " + randomNumber);
      break;
    } else if (answer <= randomNumber) {
      alert("angka yang anda masukan terlalu kecil");
      answer = parseInt(
        prompt("coba tebak lagi nilai yang benar!! kesempatan anda sisa " + i)
      );
    } else if (answer >= randomNumber) {
      alert("angka yang anda masukan terlalu besar");
      answer = parseInt(
        prompt("coba tebak lagi nilai yang benar!! kesempatan anda sisa " + i)
      );
    }
  }
  repeat = confirm("ingin coba lagi??");
}
alert("sampai jumpa lain kali");
