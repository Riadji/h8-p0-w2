var nama = "";
var peran = "";

if(nama == ""){
  console.log("Nama harus diisi!");
}
else if(peran == ""){
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}
else if(peran == "Ksatria") {
  console.log("Halo Ksatria" + nama + ",kamu dapat menyerang dengan senjatamu!");
}
else if(peran == "Tabib") {
	console.log("Halo Tabib " + nama +",kamu akan membantu temanmu yang terluka.");
}
else if(peran == "Penyhir") {
	console.log("Halo Penyihir" + nama + ",ciptakan keajaiban yang membantu kemenanganmu!");
}
