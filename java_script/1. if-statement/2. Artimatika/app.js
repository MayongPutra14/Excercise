

// console.log("====================================");
// console.log("= Melakukan Perhitungan Aritmatika =");
// console.log("====================================");
// console.log("1. Penjumlahan");
// console.log("2. Pengurangan");
// console.log("3. Perkalian");
// console.log("4. Pembagian");
// console.log("5. Modulo");
// console.log("6. Eksponen");
// console.log("====================================");

// let nilai = prompt("Pilih Nomor Oprasi Perhitungan: ");

// nilai = Number(nilai);

// if (nilai === 1){
//     let PenjumlahanSatu = Number(prompt("Masukan Nilai A: "));
//     let PenjumlahanDua = Number(prompt("Masukan Nilai B: "));
//     let HasilPenjumlahan = PenjumlahanSatu + PenjumlahanDua;
//     console.log("Hasil Penjumlahan dari A + B = ", HasilPenjumlahan, typeof HasilPenjumlahan)
// }

// if (nilai === 1){
//     let PenjumlahanSatu = prompt("Masukan Nilai A: ");
//     let PenjumlahanDua = prompt("Masukan Nilai B: ");
//     let HasilPenjumlahan = PenjumlahanSatu + PenjumlahanDua;
//     console.log("Hasil Penjumlahan dari A + B = ", HasilPenjumlahan, typeof HasilPenjumlahan)
// }




let nama = prompt("Masukan Nama Anda: ");

if (nama.length >= 6) {

    if( nama.indexOf(' ') === -1){
        console.log("Valid");
    } else {
        console.log("Tidak Boleh ada spasi");
    }
    console.log("Lebih dari 6 karakter!!!");
}else {
    console.log("Kurang dari 6 Karakter")
}

let password = 'rahasia';
password.indexOf(' ');