// digunakan untuk membaca input dari terminal.
const readline = require("readline");

// objek readline yang akan membaca input dari terminal dan menampilkan output ke terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  variabel array yang akan menyimpan nilai siswa
let nilai = [];
// prompt yang akan muncul untuk meminta input nilai siswa atau karakter "q" sebagai tanda selesai
rl.setPrompt("Masukkan nilai siswa atau ketik 'q' jika selesai: ");
//  fungsi yang akan menampilkan prompt ke terminal
rl.prompt();
// event listener yang akan memproses input nilai siswa dari pengguna.
rl.on("line", (nilai_siswa) => {
  if (nilai_siswa !== "q") {
    nilai.push(parseInt(nilai_siswa));
    rl.prompt();
  } else {
    rl.close();

    let nilai_tertinggi = Math.max.apply(null, nilai);
    let nilai_terendah = Math.min.apply(null, nilai);

    let total_nilai = 0;
    for (let i = 0; i < nilai.length; i++) {
      total_nilai += nilai[i];
    }
    let rata_rata = total_nilai / nilai.length;

    let lulus = 0;
    let tidak_lulus = 0;
    for (let i = 0; i < nilai.length; i++) {
      if (nilai[i] >= 60) {
        lulus++;
      } else {
        tidak_lulus++;
      }
    }

    nilai.sort(function (a, b) {
      return a - b;
    });

    let nilai_90 = nilai.filter(function (n) {
      return n === 90;
    });

    let nilai_100 = nilai.filter(function (n) {
      return n === 100;
    });

    console.log("Nilai tertinggi: " + nilai_tertinggi);
    console.log("Nilai terendah: " + nilai_terendah);
    console.log("Rata-rata nilai: " + rata_rata);
    console.log("Jumlah siswa lulus: " + lulus);
    console.log("Jumlah siswa tidak lulus: " + tidak_lulus);
    console.log(
      "Nilai siswa urut dari terendah ke tertinggi: " + nilai.join(", ")
    );
    console.log("Siswa dengan nilai 90: " + nilai_90.join(", "));
    console.log("Siswa dengan nilai 100: " + nilai_100.join(", "));
  }
});
