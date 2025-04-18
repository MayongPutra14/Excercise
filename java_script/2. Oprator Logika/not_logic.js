console.log("Bayangkan Mesin Ini dalah perempuan");
console.log("Kamu Mau pulang gak?");
console.log("0. Tidak");
console.log("1. Iya");
let jawaban = prompt("Kamu Mau Pulang Gk?: ");
let jawabanSatu = false;
let jawabanDua = true;

// JawabanCewek = Boolean(jawaban)
hasil = Number(jawaban)


if (!hasil) {
    console.log("Aku mau Pulang ||","ini jawaban yang user berikan" , jawabanSatu);
}else{
    console.log("Aku gk mau pulang T T");
}
