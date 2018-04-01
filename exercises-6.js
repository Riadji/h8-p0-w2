//1 Melakukan looping menggunakan while
var hitung1 = 0;

console.log("LOOPING PERTAMA");
while (hitung1 <20) {
  hitung1 = hitung1 + 2;
  console.log(hitung1 + " - " + "I love coding");
}

console.log("LOOPING KEDUA");
while (hitung1 >0) {
  console.log(hitung1 + " - " + "I will become fullstack developer");
  hitung1 = hitung1 - 2;
}


//2 Melakukan looping menggunakan for
console.log("LOOPING PERTAMA");
for(var hitung2 = 1; hitung2 <= 20; hitung2++) {
  console.log(hitung2 + " - I love coding");
}

console.log("LOOPING KEDUA");
for(var hitung2 = 20; hitung2 > 0; hitung2--) {
  console.log(hitung2 + " - I will become fullstack developer");
}


//3 Angka ganjil, genap
//3a Menghitung ganjil, genap
var hitung3 = 1;

for(var hitung3 = 1; hitung3 <= 100; hitung3++) {
  console.log(hitung3);
  if (hitung3 % 2 == 0) {
    console.log("genap");
  } else {
    console.log("ganjil");
  }
}

//3b Menghitung pertambahan 2
var hitung3 = 1;

for(var hitung3 = 1; hitung3 <= 100; hitung3 = hitung3 + 2) {
  console.log(hitung3);
  if (hitung3 % 3 == 0) {
    console.log(hitung3 + " kelipatan 3");
  } else {
    console.log("");
  }
}

//3c Menghitung pertambahan 5
var hitung3 = 1;

for(var hitung3 = 1; hitung3 <= 100; hitung3 = hitung3 + 5) {
  console.log(hitung3);
  if (hitung3 % 6 == 0) {
    console.log(hitung3 + " kelipatan 6");
  } else {
    console.log("");
  }
}

//3d Menghitung pertambahan 9
var hitung3 = 1;

for(var hitung3 = 1; hitung3 <= 100; hitung3 = hitung3 + 9) {
  console.log(hitung3);
  if (hitung3 % 10 == 0) {
    console.log(hitung3 + " kelipatan 10");
  } else {
    console.log("");
  }
}
