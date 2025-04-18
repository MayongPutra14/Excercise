// let username = prompt("Masukan Username Anda: ");
// let password = prompt("Masukan Password Anda: ");

// if (
//   username.length >= 10 &&
//   username.indexOf(" ") === -1 &&
//   password.indexOf(" ") === -1
// ) {
//   console.log("Kamu behasil Login");
//   console.log("====================================");
//   console.log("= Melakukan Perhitungan Aritmatika =");
//   console.log("====================================");
//   console.log("1. Penjumlahan");
//   console.log("2. Pengurangan");
//   console.log("3. Perkalian");
//   console.log("4. Pembagian");
//   console.log("5. Modulo");
//   console.log("6. Eksponen");
//   console.log("====================================");

//   let nilai = prompt("Pilih Nomor Oprasi Perhitungan: ");

//   nilai = Number(nilai);

//   if (nilai === 1) {
//     let PenjumlahanSatu = Number(prompt("Masukan Nilai A: "));
//     let PenjumlahanDua = Number(prompt("Masukan Nilai B: "));
//     let HasilPenjumlahan = PenjumlahanSatu + PenjumlahanDua;
//     console.log(
//       "Hasil Penjumlahan dari A + B = ",
//       HasilPenjumlahan,
//       typeof HasilPenjumlahan
//     );
//   }
// } else {
//   console.log("Username atau Password Salah!!");
// }


let nama = "Gilang Mayong";
let nim = 123;


let user = prompt("Username Anda: ");
let password = prompt("Password Anda: ");

convertPassword = Number(password);

if(nama === user && nim === convertPassword) {
    console.log("Kamu adalah mahasiswa Insan Tazakka");
}else{
    console.log("Akun Anda Belum Terdaftar!");
    console.log("Silahkan Daftar Terlebih Dahulu!");
    
    let nama = "Wulan";
    let nim = 123;
    let user = prompt("Username Anda: ");
    let password = prompt("Password Anda: ");
    convertPassword = Number(password);
    
    if(nama === user && nim === convertPassword) {
        console.log("Selamat Akun Anda Telah Terdaftar Silahkan Login");
    }
}