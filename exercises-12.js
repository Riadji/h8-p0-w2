//Konversi menit
function konversiMenit(menit){
    return ( menit - ( menit % 60 )) / 60 + ":" + menit % 60
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));
