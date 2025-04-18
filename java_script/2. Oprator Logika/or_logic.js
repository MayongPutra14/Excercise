const benar = "Y";
const yes = "y";

let Loggout = prompt("Tekan Y atau y Untuk Loggout");

if (Loggout === "Y" || Loggout === "y"){
    console.log("Kamu Loggout dengan ", Loggout)
}else {
    console.log("Kamu tidak Loggout dengan 'Y' ataupun 'y'");
}
