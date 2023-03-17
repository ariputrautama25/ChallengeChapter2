// Input nilai siswa dan menyimpannya dalam array
let nilai = [];
let input_nilai = prompt("Masukkan nilai siswa (ketik 'q' untuk selesai):");
while (input_nilai !== "q") {
    nilai.push(parseFloat(input_nilai));
    input_nilai = prompt("Masukkan nilai siswa (ketik 'q' untuk selesai):");
}

// Menghitung nilai tertinggi, nilai terendah, dan rata-rata
let nilai_tertinggi = Math.max(...nilai);
let nilai_terendah = Math.min(...nilai);
let rata_rata = nilai.reduce((total, nilai) => total + nilai, 0) / nilai.length;

// Menghitung jumlah siswa lulus dan tidak lulus
let lulus = nilai.filter(nilai => nilai >= 60);
let t_lulus = lulus.length;
let t_tidak_lulus = nilai.length - t_lulus;

// Mengurutkan nilai siswa secara menaik
nilai.sort((a, b) => a - b);
// Menampilkan output
console.log(`Nilai tertinggi adalah: ${nilai_tertinggi}`);
console.log(`Nilai terendah adalah: ${nilai_terendah}`);
console.log(`Mencari rata-rata: ${rata_rata}`);
console.log(`Jumlah siswa lulus: ${t_lulus}`);
console.log(`Jumlah siswa tidak lulus: ${t_tidak_lulus}`);
console.log(`Nilai siswa yang telah diurutkan: ${nilai}`);

// Mencari dan menampilkan siswa dengan nilai 90 dan 100
let nilai_90 = nilai.filter(nilai => nilai === 90);
let nilai_100 = nilai.filter(nilai => nilai === 100);
console.log(`Siswa dengan nilai 90: ${nilai_90}`);
console.log(`Siswa dengan nilai 100: ${nilai_100}`);

// program ini dijalankan menggunakan index.html di berjalan di browser
// dan untuk melihatnya bisa dengan inspect dan ke console