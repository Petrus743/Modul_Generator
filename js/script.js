//date
let date = new Date();
let tahun = date.getFullYear();
let bulan = date.getMonth();
let tanggal = date.getDate();

switch (bulan) {
  case 0:
    bulan = "Januari";
    break;
  case 1:
    bulan = "Februari";
    break;
  case 2:
    bulan = "Maret";
    break;
  case 3:
    bulan = "April";
    break;
  case 4:
    bulan = "Mei";
    break;
  case 5:
    bulan = "Juni";
    break;
  case 6:
    bulan = "Juli";
    break;
  case 7:
    bulan = "Agustus";
    break;
  case 8:
    bulan = "September";
    break;
  case 9:
    bulan = "Oktober";
    break;
  case 10:
    bulan = "November";
    break;
  case 11:
    bulan = "Desember";
    break;
}
let tampilTanggal = tanggal + " " + bulan + " " + tahun;

document.getElementById("tanggalwaktu").append(tampilTanggal);

// document.getElementById("tanggalwaktu").innerHTML = dt.toLocaleDateString();

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamberger menu di klik
// document.querySelector("#hamburger-menu").onclick = () => {
//   navbarNav.classList.toggle("active");
// };

// klik di liuar sidebar untuk keluar
// const hamburger = document.querySelector("#hamburger-menu");

// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

// alokasi waktu
function total_waktu() {
  // let jumlah_pertemuan = document.getElementById("jmlpertemuan").value;
  let jam_pembelajaran = document.querySelector(".jmljam").value;

  let total = jam_pembelajaran * 45;

  let display = document.querySelector(".display");

  display.innerHTML = "Total = " + total + "menit";

  return total;
}

// pertemuan

// function pertemuan() {
//   let jumlah_pertemuan = document.getElementById("jmlpertemuan").value;

//   for (let i = 1; i <= jumlah_pertemuan; i++) {
//     let model_pertemuan = document.createElement("h3");
//     let divtombol = document.createElement("div");

//     let btn1 = document.createElement("button");
//     btn1.onclick = inquiry;
//     let btn2 = document.createElement("button");
//     btn2.onclick = problem;
//     let btn3 = document.createElement("button");
//     btn3.onclick = project;
//     let btn4 = document.createElement("button");
//     btn4.onclick = discovery;
//     let masukan = document.createElement("input");

//     let txtmodel1 = document.createTextNode("Inquiry Learning");
//     let txtmodel2 = document.createTextNode("Problem-based Learning");
//     let txtmodel3 = document.createTextNode("Project-based Learning");
//     let txtmodel4 = document.createTextNode("Discovery Learning");

//     btn1.appendChild(txtmodel1);
//     btn2.appendChild(txtmodel2);
//     btn3.appendChild(txtmodel3);
//     btn4.appendChild(txtmodel4);

//     document.getElementById("model_pertemuan").appendChild(divtombol);
//     divtombol.classList.add("tombol" + i);

//     document.querySelector(".tombol" + i).appendChild(model_pertemuan);
//     document.querySelector(".tombol" + i).appendChild(btn1);
//     document.querySelector(".tombol" + i).appendChild(btn2);
//     document.querySelector(".tombol" + i).appendChild(btn3);
//     document.querySelector(".tombol" + i).appendChild(btn4);
//     document.querySelector(".tombol" + i).appendChild(masukan);
//     model_pertemuan.innerHTML = "Pertemuan " + i;

//     let elemen1 = document.createElement("h3");
//     let elemen2 = document.createElement("h4");
//     let elemen3 = document.createElement("h4");
//     let elemen4 = document.createElement("h4");

//     let awaktu1 = document.createElement("h5");
//     let awaktu2 = document.createElement("h5");
//     let awaktu3 = document.createElement("h5");
//     let awaktu4 = document.createElement("h5");
//     let awaktu5 = document.createElement("h5");
//     let awaktu6 = document.createElement("h5");
//     // let awaktu7 = document.createElement("h5");
//     let awaktu8 = document.createElement("h5");

//     let input1 = document.createElement("input");
//     let input2 = document.createElement("input");
//     let input3 = document.createElement("input");
//     let input4 = document.createElement("input");
//     let input5 = document.createElement("input");
//     let input6 = document.createElement("input");
//     // let input7 = document.createElement("input");
//     let input8 = document.createElement("input");

//     let inputwaktu1 = document.createElement("input");
//     let inputwaktu2 = document.createElement("input");
//     let inputwaktu3 = document.createElement("input");
//     let inputwaktu4 = document.createElement("input");
//     let inputwaktu5 = document.createElement("input");
//     let inputwaktu6 = document.createElement("input");
//     // let inputwaktu7 = document.createElement("input");
//     let inputwaktu8 = document.createElement("input");

//     let sintaks1 = document.createElement("p");
//     let sintaks2 = document.createElement("p");
//     let sintaks3 = document.createElement("p");
//     let sintaks4 = document.createElement("p");
//     let sintaks5 = document.createElement("p");
//     // let sintaks6 = document.createElement("p");

//     let divkelas = document.createElement("div");

//     let alert = document.createElement("p");

//     document.getElementById("form_kegiatan").appendChild(divkelas);

//     divkelas.classList.add("kelas" + i);

//     inputwaktu1.classList.add("alokasi1");
//     inputwaktu2.classList.add("alokasi2");
//     inputwaktu3.classList.add("alokasi3");
//     inputwaktu4.classList.add("alokasi4");
//     inputwaktu5.classList.add("alokasi5");
//     inputwaktu6.classList.add("alokasi6");
//     // inputwaktu7.classList.add("alokasi7");
//     inputwaktu8.classList.add("alokasi8");

//     document.querySelector(".kelas" + i).appendChild(elemen1);
//     document.querySelector(".kelas" + i).appendChild(elemen2);
//     document.querySelector(".kelas" + i).appendChild(awaktu1);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu1);
//     document.querySelector(".kelas" + i).appendChild(input1);

//     document.querySelector(".kelas" + i).appendChild(elemen3);
//     document.querySelector(".kelas" + i).appendChild(sintaks1);
//     document.querySelector(".kelas" + i).appendChild(awaktu2);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu2);

//     document.querySelector(".kelas" + i).appendChild(input2);
//     document.querySelector(".kelas" + i).appendChild(sintaks2);
//     document.querySelector(".kelas" + i).appendChild(awaktu3);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu3);

//     document.querySelector(".kelas" + i).appendChild(input3);
//     document.querySelector(".kelas" + i).appendChild(sintaks3);
//     document.querySelector(".kelas" + i).appendChild(awaktu4);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu4);

//     document.querySelector(".kelas" + i).appendChild(input4);
//     document.querySelector(".kelas" + i).appendChild(sintaks4);
//     document.querySelector(".kelas" + i).appendChild(awaktu5);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu5);

//     document.querySelector(".kelas" + i).appendChild(input5);
//     document.querySelector(".kelas" + i).appendChild(sintaks5);
//     document.querySelector(".kelas" + i).appendChild(awaktu6);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu6);

//     document.querySelector(".kelas" + i).appendChild(input6);

//     // document.querySelector(".kelas" + i).appendChild(sintaks6);
//     // document.querySelector(".kelas" + i).appendChild(awaktu7);
//     // document.querySelector(".kelas" + i).appendChild(inputwaktu7);

//     // document.querySelector(".kelas" + i).appendChild(input7);
//     document.querySelector(".kelas" + i).appendChild(elemen4);
//     document.querySelector(".kelas" + i).appendChild(awaktu8);
//     document.querySelector(".kelas" + i).appendChild(inputwaktu8);
//     document.querySelector(".kelas" + i).appendChild(input8);

//     let typeinput = [
//       inputwaktu1,
//       inputwaktu2,
//       inputwaktu3,
//       inputwaktu4,
//       inputwaktu5,
//       inputwaktu6,
//       // inputwaktu7,
//       inputwaktu8,
//     ];

//     for (let l = 0; l < typeinput.length; l++) {
//       typeinput[l].type = "number";
//     }

//     inputwaktu8.onchange = jumlahJam;

//     document.querySelector(".kelas" + i).appendChild(alert);
//     alert.classList.add("pesan");

//     elemen1.innerHTML = "Pertemuan " + i;
//     elemen2.innerHTML = "Pendahuluan";
//     elemen3.innerHTML = "Kegiatan Inti";
//     elemen4.innerHTML = "Penutup";
//     let alokasi_waktu = [
//       awaktu1,
//       awaktu2,
//       awaktu3,
//       awaktu4,
//       awaktu5,
//       awaktu6,
//       // awaktu7,
//       awaktu8,
//     ];

//     for (let k = 0; k < alokasi_waktu.length; k++) {
//       alokasi_waktu[k].innerHTML = "Alokasi Waktu";
//     }

//     let elemen_a = [sintaks1, sintaks2, sintaks3, sintaks4, sintaks5];

//     for (let j = 0; j < elemen_a.length; j++) {
//       elemen_a[j].classList.add("sintak" + j);
//     }
//   }
// }
let hitung_alokasiWaktu = document.querySelector(".waktu_penutup1");
hitung_alokasiWaktu.onchange = jumlahJam;

function jumlahJam() {
  let jumlahjam = document.querySelector(".jmljam").value;
  let total_jp = jumlahjam * 45;
  let sintakhide = document.querySelector(".sintakhide");

  if (sintakhide.style.display === "block") {
    let waktu_pendahuluan1 = document.querySelector(
      ".waktu_pendahuluan1"
    ).value;
    let waktu_pendahuluan2 = document.querySelector(
      ".waktu_pendahuluan2"
    ).value;
    let waktu_pendahuluan3 = document.querySelector(
      ".waktu_pendahuluan3"
    ).value;
    let waktu_inti1 = document.querySelector(".input_waktu1").value;
    let waktu_inti2 = document.querySelector(".input_waktu2").value;
    let waktu_inti3 = document.querySelector(".input_waktu3").value;
    let waktu_inti4 = document.querySelector(".input_waktu4").value;
    let waktu_inti5 = document.querySelector(".input_waktu5").value;
    let waktu_inti6 = document.querySelector(".input_waktu6").value;
    let waktu_penutup = document.querySelector(".waktu_penutup1").value;

    waktu1 = parseInt(waktu_pendahuluan1);
    waktu2 = parseInt(waktu_pendahuluan2);
    waktu3 = parseInt(waktu_pendahuluan3);
    waktu4 = parseInt(waktu_inti1);
    waktu5 = parseInt(waktu_inti2);
    waktu6 = parseInt(waktu_inti3);
    waktu7 = parseInt(waktu_inti4);
    waktu8 = parseInt(waktu_inti5);
    waktu9 = parseInt(waktu_inti6);
    waktu10 = parseInt(waktu_penutup);

    total_menit =
      waktu1 +
      waktu2 +
      waktu3 +
      waktu4 +
      waktu5 +
      waktu6 +
      waktu7 +
      waktu8 +
      waktu9 +
      waktu10;

    return total_menit;

    // if (total_menit !== total_jp) {
    //   alert("Alokasi waktu tidak sesuai!");
    // }
  } else {
    let waktu_pendahuluan1 = document.querySelector(
      ".waktu_pendahuluan1"
    ).value;
    let waktu_pendahuluan2 = document.querySelector(
      ".waktu_pendahuluan2"
    ).value;
    let waktu_pendahuluan3 = document.querySelector(
      ".waktu_pendahuluan3"
    ).value;
    let waktu_inti1 = document.querySelector(".input_waktu1").value;
    let waktu_inti2 = document.querySelector(".input_waktu2").value;
    let waktu_inti3 = document.querySelector(".input_waktu3").value;
    let waktu_inti4 = document.querySelector(".input_waktu4").value;
    let waktu_inti5 = document.querySelector(".input_waktu5").value;
    let waktu_penutup = document.querySelector(".waktu_penutup1").value;

    waktu1 = parseInt(waktu_pendahuluan1);
    waktu2 = parseInt(waktu_pendahuluan2);
    waktu3 = parseInt(waktu_pendahuluan3);
    waktu4 = parseInt(waktu_inti1);
    waktu5 = parseInt(waktu_inti2);
    waktu6 = parseInt(waktu_inti3);
    waktu7 = parseInt(waktu_inti4);
    waktu8 = parseInt(waktu_inti5);
    waktu10 = parseInt(waktu_penutup);

    total_menit =
      waktu1 +
      waktu2 +
      waktu3 +
      waktu4 +
      waktu5 +
      waktu6 +
      waktu7 +
      waktu8 +
      waktu10;

    return total_menit;

    // if (total_menit !== total_jp) {
    //   alert("Alokasi waktu tidak sesuai!");
    // }
  }
}

//profil pelajar
function beriman() {
  let input = document.createElement("p");
  input.innerHTML = "Beriman dan bertakwa kepada Tuhan yang Maha Esa";

  document.getElementById("p5").appendChild(input);
}

function gt() {
  let input = document.createElement("p");
  input.innerHTML = "Gotong Royong";

  document.getElementById("p5").appendChild(input);
}

// function hapusProfil() {
//   let gt = document.getElementById("p5");
//   p5.removeChild(p5.lastChild);
// }

function mandiri() {
  let input = document.createElement("p");
  input.innerHTML = "Mandiri";

  document.getElementById("p5").appendChild(input);
}

function kreatif() {
  let input = document.createElement("p");
  input.innerHTML = "Kreatif";

  document.getElementById("p5").appendChild(input);
}

function kritis() {
  let input = document.createElement("p");
  input.innerHTML = "Bernalar kritis";

  document.getElementById("p5").appendChild(input);
}

function Berkebinekaan() {
  let input = document.createElement("p");
  input.innerHTML = "Berkebhinekaan global";

  document.getElementById("p5").appendChild(input);
}

function Bertakwa() {
  let input = document.createElement("p");
  input.innerHTML = "Beriman dan bertakwa kepada Tuhan yang Maha Esa";

  document.getElementById("p5").appendChild(input);
}

// model pembelajaran
function inquiry() {
  let model = document.querySelector(".modelPertemuan");
  let sintaks1 = document.querySelector(".sintak0");
  let sintaks2 = document.querySelector(".sintak1");
  let sintaks3 = document.querySelector(".sintak2");
  let sintaks4 = document.querySelector(".sintak3");
  let sintaks5 = document.querySelector(".sintak4");
  let sintaks6 = document.querySelector(".sintak5");
  let sintakHide = document.querySelector(".sintakhide");
  let inputmodel = document.querySelector(".inputModel");
  let S1 = document.querySelector(".s1");
  let S2 = document.querySelector(".s2");
  let S3 = document.querySelector(".s3");
  let S4 = document.querySelector(".s4");
  let S5 = document.querySelector(".s5");
  let S6 = document.querySelector(".s6");

  model.innerHTML = "Inquiry Learning";

  sintakHide.style.display = "block";

  sintaks1.innerHTML = "<b>Orientasi<b>";
  sintaks2.innerHTML = "<b>Merumuskan masalah</b>";
  sintaks3.innerHTML = "<b>Merumuskan hipotesis</b>";
  sintaks4.innerHTML = "<b>Mengumpulkan data</b>";
  sintaks5.innerHTML = "<b>Menguji hipotesis</b>";
  sintaks6.innerHTML = "<b>Menarik kesimpulan</b>";

  inputmodel.innerHTML = "Inquiry Learning";

  S1.innerHTML = "<b>Orientasi</b>";
  S2.innerHTML = "<b>Merumuskan masalah</b>";
  S3.innerHTML = "<b>Merumuskan hipotesis</b>";
  S4.innerHTML = "<b>Mengumpulkan data</b>";
  S5.innerHTML = "<b>Menguji hipotesis</b>";
  S6.innerHTML = "<b>Menarik kesimpulan</b>";
  S6.style.display = "block";
}

function problem() {
  let model = document.querySelector(".modelPertemuan");
  let sintaks1 = document.querySelector(".sintak0");
  let sintaks2 = document.querySelector(".sintak1");
  let sintaks3 = document.querySelector(".sintak2");
  let sintaks4 = document.querySelector(".sintak3");
  let sintaks5 = document.querySelector(".sintak4");
  let sintaks6 = document.querySelector(".sintak5");
  let sintakHide = document.querySelector(".sintakhide");
  let inputmodel = document.querySelector(".inputModel");

  let S1 = document.querySelector(".s1");
  let S2 = document.querySelector(".s2");
  let S3 = document.querySelector(".s3");
  let S4 = document.querySelector(".s4");
  let S5 = document.querySelector(".s5");
  let S6 = document.querySelector(".s6");

  model.innerHTML = "Problem-based Learning";

  sintakHide.style.display = "none";

  sintaks1.innerHTML = "<b>Orientasi pada masalah</b>";
  sintaks2.innerHTML = "<b>Mengorganisasikan peserta didik untuk belajar</b>";
  sintaks3.innerHTML =
    "<b>Membimbing penyelidikan individu maupun kelompok</b>";
  sintaks4.innerHTML = "<b>Mengembangkan dan menyajikan hasil karya</b>";
  sintaks5.innerHTML =
    "<b>Menganalisis dan mengevaluasi proses pemecahan masalah</b>";

  inputmodel.innerHTML = "Problem-based Learning";

  S1.innerHTML = "<b>Orientasi pada masalah</b>";
  S2.innerHTML = "<b>Mengorganisasikan peserta didik untuk belajar</b>";
  S3.innerHTML = "<b>Membimbing penyelidikan individu maupun kelompok</b>";
  S4.innerHTML = "<b>Mengembangkan dan menyajikan hasil karya</b>";
  S5.innerHTML =
    "<b>Menganalisis dan mengevaluasi proses pemecahan masalah</b>";

  S6.style.display = "none";
}

function project() {
  let model = document.querySelector(".modelPertemuan");
  let sintaks1 = document.querySelector(".sintak0");
  let sintaks2 = document.querySelector(".sintak1");
  let sintaks3 = document.querySelector(".sintak2");
  let sintaks4 = document.querySelector(".sintak3");
  let sintaks5 = document.querySelector(".sintak4");
  let sintaks6 = document.querySelector(".sintak5");
  let sintakHide = document.querySelector(".sintakhide");
  let inputmodel = document.querySelector(".inputModel");

  let S1 = document.querySelector(".s1");
  let S2 = document.querySelector(".s2");
  let S3 = document.querySelector(".s3");
  let S4 = document.querySelector(".s4");
  let S5 = document.querySelector(".s5");
  let S6 = document.querySelector(".s6");

  model.innerHTML = "Project-based Learning";

  sintakHide.style.display = "block";

  sintaks1.innerHTML = "<b>Pertanyaan Mendasar</b>";
  sintaks2.innerHTML = "<b>Mendesain Perencanaan Produk</b>";
  sintaks3.innerHTML = "<b>Menyusun Jadwal Pembuatan";
  sintaks4.innerHTML = "<b>Memonitor Keaktifan dan Perkembangan Proyek</b>";
  sintaks5.innerHTML = "<b>Menguji Hasil</b>";
  sintaks6.innerHTML = "<b>Evaluasi Pengalaman Belajar</b>";

  inputmodel.innerHTML = "Project-based Learning";

  S1.innerHTML = "<b>Pertanyaan Mendasar</b>";
  S2.innerHTML = "<b>Mendesain Perencanaan Produk</b>";
  S3.innerHTML = "<b>Menyusun Jadwal Pembuatan</b>";
  S4.innerHTML = "<b>Memonitor Keaktifan dan Perkembangan Proyek</b>";
  S5.innerHTML = "<b>Menguji Hasil</b>";
  S6.innerHTML = "<b>valuasi Pengalaman Belajar</b>";
  S6.style.display = "block";
}

function discovery() {
  let model = document.querySelector(".modelPertemuan");
  let sintaks1 = document.querySelector(".sintak0");
  let sintaks2 = document.querySelector(".sintak1");
  let sintaks3 = document.querySelector(".sintak2");
  let sintaks4 = document.querySelector(".sintak3");
  let sintaks5 = document.querySelector(".sintak4");
  let sintaks6 = document.querySelector(".sintak5");
  let sintakHide = document.querySelector(".sintakhide");
  let inputmodel = document.querySelector(".inputModel");

  let S1 = document.querySelector(".s1");
  let S2 = document.querySelector(".s2");
  let S3 = document.querySelector(".s3");
  let S4 = document.querySelector(".s4");
  let S5 = document.querySelector(".s5");
  let S6 = document.querySelector(".s6");

  model.innerHTML = "Discovery Learning";

  sintakHide.style.display = "block";

  sintaks1.innerHTML = "<b>Pemberian Rangsang</b>";
  sintaks2.innerHTML = "<b>Pernyataan atau Identifikasi Masalah</b>";
  sintaks3.innerHTML = "<b>Pengumpulan Data</b>";
  sintaks4.innerHTML = "<b>Pengolahan Data</b>";
  sintaks5.innerHTML = "<b>Pembuktian</b>";
  sintaks6.innerHTML = "<b>Menarik kesimpulan</b>";

  inputmodel.innerHTML = "Discovery Learning";

  S1.innerHTML = "<b>Pemberian Rangsang</b>";
  S2.innerHTML = "<b>Pernyataan atau Identifikasi Masalah</b>";
  S3.innerHTML = "<b>Pengumpulan Data</b>";
  S4.innerHTML = "<b>Pengolahan Data</b>";
  S5.innerHTML = "<b>Pembuktian</b>";
  S6.innerHTML = "<b>Menarik kesimpulan</b>";
  S6.style.display = "block";
}

//pendekatan
function contextual() {
  let elemen = document.querySelector(".pendekatanPembelajaran");
  let inputPendekatan = document.querySelector(".inputPendekatan");
  elemen.innerHTML = "Contextual Teaching and Learning";
  inputPendekatan.innerHTML = "Contextual Teaching and Learning";
}

function tpack() {
  let elemen = document.querySelector(".pendekatanPembelajaran");
  let inputPendekatan = document.querySelector(".inputPendekatan");
  elemen.innerHTML = "TPACK (Technological Pedagogic Content Knowledge)";
  inputPendekatan.innerHTML =
    "TPACK (Technological Pedagogic Content Knowledge)";
}

function saintifik() {
  let elemen = document.querySelector(".pendekatanPembelajaran");
  let inputPendekatan = document.querySelector(".inputPendekatan");
  elemen.innerHTML = "Saintifik";
  inputPendekatan.innerHTML = "Saintifik";
}

function steam() {
  let elemen = document.querySelector(".pendekatanPembelajaran");
  let inputPendekatan = document.querySelector(".inputPendekatan");
  elemen.innerHTML =
    "STEAM (Science, Technology, Engineering, Art, and Mathematics)";
  inputPendekatan.innerHTML =
    "STEAM (Science, Technology, Engineering, Art, and Mathematics)";
}

// metode pembelajaran

let metode1 = document.querySelector(".ceramah");
let metode2 = document.querySelector(".diskusi");
let metode3 = document.querySelector(".demonstrasi");
let metode4 = document.querySelector(".eksperimen");
let metode5 = document.querySelector(".tanyajawab");

metode1.onclick = Ceramah;
metode2.onclick = Diskusi;
metode3.onclick = Demonstrasi;
metode4.onclick = Eksperimen;
metode5.onclick = TanyaJawab;

function Ceramah() {
  let metode = document.querySelector(".metodePembelajaran");
  let inputMetode = document.querySelector(".inputMetode");
  metode.innerHTML = "Metode Ceramah";
  inputMetode.innerHTML = "Metode Ceramah";
}
function Diskusi() {
  let metode = document.querySelector(".metodePembelajaran");
  let inputMetode = document.querySelector(".inputMetode");
  metode.innerHTML = "Metode Diskusi";
  inputMetode.innerHTML = "Metode Diskusi";
}
function Demonstrasi() {
  let metode = document.querySelector(".metodePembelajaran");
  let inputMetode = document.querySelector(".inputMetode");
  metode.innerHTML = "CMetode Demonstrasi";
  inputMetode.innerHTML = "Metode Demonstrasi";
}
function Eksperimen() {
  let metode = document.querySelector(".metodePembelajaran");
  let inputMetode = document.querySelector(".inputMetode");
  metode.innerHTML = "Metode Eksperimen";
  inputMetode.innerHTML = "Metode Eksperimen";
}
function TanyaJawab() {
  let metode = document.querySelector(".metodePembelajaran");
  let inputMetode = document.querySelector(".inputMetode");
  metode.innerHTML = "Metode Tanya Jawab";
  inputMetode.innerHTML = "Metode Tanya Jawab";
}

// tambah kegitan
function tambahOrientasi() {
  let input = document.createElement("input");

  document.getElementById("orientasi").appendChild(input);
}

function hapusOrientasi() {
  let mengamati = document.getElementById("orientasi");
  orientasi.removeChild(orientasi.lastChild);
}

function tambahMotivasi() {
  let input = document.createElement("input");
  document.getElementById("motivasi").appendChild(input);
}

function hapusMotivasi() {
  let mengamati = document.getElementById("motivasi");
  motivasi.removeChild(motivasi.lastChild);
}

function tambahApersepsi() {
  let input = document.createElement("input");
  document.getElementById("apersepsi").appendChild(input);
}

function hapusApersepsi() {
  let mengamati = document.getElementById("apersepsi");
  apersepsi.removeChild(apersepsi.lastChild);
}

function tambahMengamati() {
  let input = document.createElement("input");
  document.getElementById("mengamati").appendChild(input);
}

function hapusMengamati() {
  let mengamati = document.getElementById("mengamati");
  mengamati.removeChild(mengamati.lastChild);
}

function tambahMenanya() {
  let input = document.createElement("input");
  document.getElementById("menanya").appendChild(input);
}

function hapusMenanya() {
  let mengamati = document.getElementById("menanya");
  menanya.removeChild(menanya.lastChild);
}

function tambahMengeksplorasi() {
  let input = document.createElement("input");
  document.getElementById("mengeksplorasi").appendChild(input);
}

function hapusMengeksplorasi() {
  let mengamati = document.getElementById("mengeksplorasi");
  mengeksplorasi.removeChild(mengeksplorasi.lastChild);
}

function tambahMenalar() {
  let input = document.createElement("input");
  document.getElementById("menalar").appendChild(input);
}

function hapusMenalar() {
  let mengamati = document.getElementById("menalar");
  menalar.removeChild(menalar.lastChild);
}

//download

let btn_download = document.querySelector(".unduh");
btn_download.onclick = download;

function download() {
  let popup = document.getElementById("hasiljadi");
  let xidentitas = document.querySelector(".identitas");
  let xprofil = document.querySelector(".profil");
  let xcapaian = document.querySelector(".capaianPembelajaran");
  let xtujuan = document.querySelector(".tujuanPembelajaran");
  let xindikator = document.querySelector(".indikator");
  let xpemantik = document.querySelector(".pertanyaanPemantik");
  let xsarana = document.querySelector(".saranaPrasarana");
  let xstrategi = document.querySelector(".strategiPembelajaran");
  let xtarget = document.querySelector(".target");
  let xkegiatan = document.querySelector(".kegiatan");
  let xasesmen = document.querySelector(".asesmen");
  let xpengayaan = document.querySelector(".pengayaan");
  let xrefleksiguru = document.querySelector(".refleksiGuru");
  let xrefleksisiswa = document.querySelector(".refleksiSiswa");

  if (jumlahJam() !== total_waktu()) {
    alert("Alokasi waktu tidak sesuai!");
  } else {
    popup.style.display = "block";
    xidentitas.style.display = "none";
    xprofil.style.display = "none";
    xcapaian.style.display = "none";
    xtujuan.style.display = "none";
    xindikator.style.display = "none";
    xpemantik.style.display = "none";
    xsarana.style.display = "none";
    xstrategi.style.display = "none";
    xtarget.style.display = "none";
    xkegiatan.style.display = "none";
    xasesmen.style.display = "none";
    xpengayaan.style.display = "none";
    xrefleksiguru.style.display = "none";
    xrefleksisiswa.style.display = "none";
  }
}

//panggil var

//nama

let nama = document.querySelector(".nama");
nama.onchange = namaPen;

function namaPen() {
  let namaPenyusun = document.querySelector(".nama").value;
  let identitas = document.querySelector(".identitas1");
  let namaterang = document.querySelector(".nama_terang");
  // document.querySelector(".identitas1").append(namaPenyusun);
  identitas.innerHTML = namaPenyusun;
  namaterang.innerHTML = namaPenyusun;
}

//sekolah
let sekolah = document.querySelector(".sekolah");
sekolah.onchange = Sekolah;

function Sekolah() {
  let sekolah = document.querySelector(".sekolah").value;
  let identitas = document.querySelector(".identitas2");
  // document.querySelector(".identitas2").append(sekolah);
  identitas.innerHTML = sekolah;
}

//tahun
let tahunAjaran = document.querySelector(".tahun");
tahunAjaran.onchange = Tahun;

function Tahun() {
  let tahun = document.querySelector(".tahun").value;
  let identitas = document.querySelector(".identitas3");
  // document.querySelector(".identitas3").append(tahun);
  identitas.innerHTML = tahun;
}

// jenjang
let jenjang = document.querySelector(".jenjang");
jenjang.onchange = Jenjang;

function Jenjang() {
  let jenjang = document.querySelector(".jenjang").value;
  let identitas = document.querySelector(".identitas4");
  // document.querySelector(".identitas4").append(jenjang);
  identitas.innerHTML = jenjang;
}

//fase

let fase = document.querySelector(".fase");
fase.onchange = Fase;

function Fase() {
  let fase = document.querySelector(".fase").value;
  let identitas = document.querySelector(".identitas5");
  // document.querySelector(".identitas5").append(fase);
  identitas.innerHTML = fase;
}

//mata pelajaran
let mPelajaran = document.querySelector(".mataPelajaran");
mPelajaran.onchange = m_pelajaran;

function m_pelajaran() {
  let mataPel = document.querySelector(".mataPelajaran").value;
  let identitas = document.querySelector(".identitas6");
  // document.querySelector(".identitas6").append(mataPel);
  identitas.innerHTML = mataPel;
}

//alokasi
let alokasi = document.querySelector(".alokasiWaktu");
alokasi.onchange = Alokasi;

function Alokasi() {
  let alokasiWaktu = total_waktu();
  let identitas = document.querySelector(".identitas7");
  // document.querySelector(".identitas7").append(alokasiWaktu);
  identitas.innerHTML = alokasiWaktu + " Menit";
}

//materi
// let materi = document.querySelector(".materiPokok");
// materi.onchange = Materi;

// function Materi() {
//   let materi = document.querySelector(".materiPokok").value;
//   document.querySelector(".identitas7").append(materi);
// }

//model
// let modelP = document.querySelector(".model");
// modelP.onchange = Model;

// function Model() {
//   let model = document.querySelector(".model").value;
//   document.querySelector(".identitas8").append(model);
// }

//p5
let profil1 = document.querySelector(".profilPelajar1");
profil1.onchange = Profil1;

function Profil1() {
  let profil = document.querySelector(".profilPelajar1").value;
  let elemen_profil1 = document.querySelector(".inputProfil1");
  // document.querySelector(".inputProfil1").append(profil);
  elemen_profil1.innerHTML = profil;
}

let profil2 = document.querySelector(".profilPelajar2");
profil2.onchange = Profil2;

function Profil2() {
  let profil = document.querySelector(".profilPelajar2").value;
  let elemen_profil2 = document.querySelector(".inputProfil2");
  // document.querySelector(".inputProfil2").append(profil);
  elemen_profil2.innerHTML = profil;
}

let profil3 = document.querySelector(".profilPelajar3");
profil3.onchange = Profil3;

function Profil3() {
  let profil = document.querySelector(".profilPelajar3").value;
  let elemen_profil3 = document.querySelector(".inputProfil3");
  // document.querySelector(".inputProfil3").append(profil);
  elemen_profil3.innerHTML = profil;
}

let profil4 = document.querySelector(".profilPelajar4");
profil4.onchange = Profil4;

function Profil4() {
  let profil = document.querySelector(".profilPelajar4").value;
  let elemen_profil4 = document.querySelector(".inputProfil4");
  // document.querySelector(".inputProfil4").append(profil);
  elemen_profil4.innerHTML = profil;
}

let profil5 = document.querySelector(".profilPelajar5");
profil5.onchange = Profil5;

function Profil5() {
  let profil = document.querySelector(".profilPelajar5").value;
  let elemen_profil5 = document.querySelector(".inputProfil5");
  // document.querySelector(".inputProfil5").append(profil);
  elemen_profil5.innerHTML = profil;
}

//capaian
let capaian = document.querySelector(".capaian");
capaian.onchange = Capaian;

function Capaian() {
  let capaian_pembelajaran = document.querySelector(".capaian").value;
  let elemen_capaian = document.querySelector(".inputCapaian");
  // document.querySelector(".inputCapaian").append(capaian_pembelajaran);
  elemen_capaian.innerHTML = capaian_pembelajaran;
}

//tujuan pembelajaran
let tujuan = document.querySelector(".tujuan1");
tujuan.onchange = Tujuan1;

function Tujuan1() {
  let tujuanPembelajaran = document.querySelector(".tujuan1").value;
  let elemen_tujuan1 = document.querySelector(".inputTujuan1");
  // document.querySelector(".inputTujuan1").append(tujuanPembelajaran);
  elemen_tujuan1.innerHTML = tujuanPembelajaran;
}

let tujuan2 = document.querySelector(".tujuan2");
tujuan2.onchange = Tujuan2;

function Tujuan2() {
  let tujuanPembelajaran = document.querySelector(".tujuan2").value;
  let elemen_tujuan2 = document.querySelector(".inputTujuan2");
  // document.querySelector(".inputTujuan2").append(tujuanPembelajaran);
  elemen_tujuan2.innerHTML = tujuanPembelajaran;
}

let tujuan3 = document.querySelector(".tujuan3");
tujuan3.onchange = Tujuan3;

function Tujuan3() {
  let tujuanPembelajaran = document.querySelector(".tujuan3").value;
  let elemen_tujuan3 = document.querySelector(".inputTujuan3");
  // document.querySelector(".inputTujuan3").append(tujuanPembelajaran);
  elemen_tujuan3.innerHTML = tujuanPembelajaran;
}

let tujuan4 = document.querySelector(".tujuan4");
tujuan4.onchange = Tujuan4;

function Tujuan4() {
  let tujuanPembelajaran = document.querySelector(".tujuan4").value;
  let elemen_tujuan4 = document.querySelector(".inputTujuan4");
  elemen_tujuan4.innerHTML = tujuanPembelajaran;
}

let tujuan5 = document.querySelector(".tujuan5");
tujuan5.onchange = Tujuan5;

function Tujuan5() {
  let tujuanPembelajaran = document.querySelector(".tujuan5").value;
  let elemen_tujuan5 = document.querySelector(".inputTujuan5");
  elemen_tujuan5.innerHTML = tujuanPembelajaran;
}

//indikator pembelajaran

let indikator1 = document.querySelector(".indikator1");
indikator1.onchange = Indikator1;

function Indikator1() {
  let indikatorPembelajaran = document.querySelector(".indikator1").value;
  let elemen_indikator1 = document.querySelector(".inputIndikator1");
  // document.querySelector(".inputIndikator1").append(indikatorPembelajaran);
  elemen_indikator1.innerHTML = indikatorPembelajaran;
}

let indikator2 = document.querySelector(".indikator2");
indikator2.onchange = Indikator2;

function Indikator2() {
  let indikatorPembelajaran = document.querySelector(".indikator2").value;
  let elemen_indikator2 = document.querySelector(".inputIndikator2");
  // document.querySelector(".inputIndikator2").append(indikatorPembelajaran);
  elemen_indikator2.innerHTML = indikatorPembelajaran;
}

let indikator3 = document.querySelector(".indikator3");
indikator3.onchange = Indikator3;

function Indikator3() {
  let indikatorPembelajaran = document.querySelector(".indikator3").value;
  let elemen_indikator3 = document.querySelector(".inputIndikator3");
  // document.querySelector(".inputIndikator3").append(indikatorPembelajaran);
  elemen_indikator3.innerHTML = indikatorPembelajaran;
}

let indikator4 = document.querySelector(".indikator4");
indikator4.onchange = Indikator4;

function Indikator4() {
  let indikatorPembelajaran = document.querySelector(".indikator4").value;
  let elemen_indikator4 = document.querySelector(".inputIndikator4");
  elemen_indikator4.innerHTML = indikatorPembelajaran;
}

let indikator5 = document.querySelector(".indikator5");
indikator5.onchange = Indikator5;

function Indikator5() {
  let indikatorPembelajaran = document.querySelector(".indikator5").value;
  let elemen_indikator5 = document.querySelector(".inputIndikator5");
  elemen_indikator5.innerHTML = indikatorPembelajaran;
}

//pertanyaan pemantik
let pemantik1 = document.querySelector(".pertanyaan1");
pemantik1.onchange = Pemantik1;

function Pemantik1() {
  let pertanyaanPemantik = document.querySelector(".pertanyaan1").value;
  let elemen_pemantik1 = document.querySelector(".inputPemantik1");
  // document.querySelector(".inputPemantik1").append(pertanyaanPemantik);
  elemen_pemantik1.innerHTML = pertanyaanPemantik;
}

let pemantik2 = document.querySelector(".pertanyaan2");
pemantik2.onchange = Pemantik2;

function Pemantik2() {
  let pertanyaanPemantik = document.querySelector(".pertanyaan2").value;
  let elemen_pemantik2 = document.querySelector(".inputPemantik2");
  // document.querySelector(".inputPemantik2").append(pertanyaanPemantik);
  elemen_pemantik2.innerHTML = pertanyaanPemantik;
}

let pemantik3 = document.querySelector(".pertanyaan3");
pemantik3.onchange = Pemantik3;

function Pemantik3() {
  let pertanyaanPemantik = document.querySelector(".pertanyaan3").value;
  let elemen_pemantik3 = document.querySelector(".inputPemantik3");
  elemen_pemantik3.innerHTML = pertanyaanPemantik;
}

let pemantik4 = document.querySelector(".pertanyaan4");
pemantik4.onchange = Pemantik4;

function Pemantik4() {
  let pertanyaanPemantik = document.querySelector(".pertanyaan4").value;
  let elemen_pemantik4 = document.querySelector(".inputPemantik4");
  elemen_pemantik4.innerHTML = pertanyaanPemantik;
}

let pemantik5 = document.querySelector(".pertanyaan5");
pemantik5.onchange = Pemantik5;

function Pemantik5() {
  let pertanyaanPemantik = document.querySelector(".pertanyaan5").value;
  let elemen_pemantik5 = document.querySelector(".inputPemantik5");
  elemen_pemantik5.innerHTML = pertanyaanPemantik;
}

//sarana prasarana
let sarana1 = document.querySelector(".sarana1");
sarana1.onchange = Sarana1;

function Sarana1() {
  let sarpras = document.querySelector(".sarana1").value;
  let elemen_sarana1 = document.querySelector(".inputSarana1");
  // document.querySelector(".inputSarana1").append(pertanyaanPemantik);
  elemen_sarana1.innerHTML = sarpras;
}

let sarana2 = document.querySelector(".sarana2");
sarana2.onchange = Sarana2;

function Sarana2() {
  let sarpras = document.querySelector(".sarana2").value;
  let elemen_sarana2 = document.querySelector(".inputSarana2");
  // document.querySelector(".inputSarana2").append(pertanyaanPemantik);
  elemen_sarana2.innerHTML = sarpras;
}

let sarana3 = document.querySelector(".sarana3");
sarana3.onchange = Sarana3;

function Sarana3() {
  let sarpras = document.querySelector(".sarana3").value;
  let elemen_sarana3 = document.querySelector(".inputSarana3");
  // document.querySelector(".inputSarana3").append(pertanyaanPemantik);
  elemen_sarana3.innerHTML = sarpras;
}

let sarana4 = document.querySelector(".sarana4");
sarana4.onchange = Sarana4;

function Sarana4() {
  let sarpras = document.querySelector(".sarana4").value;
  let elemen_sarana4 = document.querySelector(".inputSarana4");
  // document.querySelector(".inputSarana4").append(pertanyaanPemantik);
  elemen_sarana4.innerHTML = sarpras;
}

let sarana5 = document.querySelector(".sarana5");
sarana5.onchange = Sarana5;

function Sarana5() {
  let sarpras = document.querySelector(".sarana5").value;
  let elemen_sarana5 = document.querySelector(".inputSarana5");
  elemen_sarana5.innerHTML = sarpras;
}

//Materi Ajar
let materi1 = document.querySelector(".materi1");
materi1.onchange = Materi1;

function Materi1() {
  let materiAjar = document.querySelector(".materi1").value;
  let elemen_materi1 = document.querySelector(".inputMateri1 ");
  // document.querySelector(".inputMateri1").append(materiAjar);
  elemen_materi1.innerHTML = materiAjar;
}

let materi2 = document.querySelector(".materi2");
materi2.onchange = Materi2;

function Materi2() {
  let materiAjar = document.querySelector(".materi2").value;
  let elemen_materi2 = document.querySelector(".inputMateri2");
  // document.querySelector(".inputMateri2").append(materiAjar);
  elemen_materi2.innerHTML = materiAjar;
}

let materi3 = document.querySelector(".materi3");
materi3.onchange = Materi3;

function Materi3() {
  let materiAjar = document.querySelector(".materi3").value;
  let elemen_materi3 = document.querySelector(".inputMateri3");
  // document.querySelector(".inputMateri3").append(materiAjar);
  elemen_materi3.innerHTML = materiAjar;
}

let materi4 = document.querySelector(".materi4");
materi4.onchange = Materi4;

function Materi4() {
  let materiAjar = document.querySelector(".materi4").value;
  let elemen_materi4 = document.querySelector(".inputMateri4");
  // document.querySelector(".inputMateri2").append(materiAjar);
  elemen_materi4.innerHTML = materiAjar;
}

let materi5 = document.querySelector(".materi5");
materi5.onchange = Materi5;

function Materi5() {
  let materiAjar = document.querySelector(".materi5").value;
  let elemen_materi5 = document.querySelector(".inputMateri5");
  elemen_materi5.innerHTML = materiAjar;
}

//target peserta didik

let target = document.querySelector(".targetPeserta");
target.onchange = Target;

function Target() {
  let targetPesertaDidik = document.querySelector(".targetPeserta").value;
  let elemen_target = document.querySelector(".inputTarget");
  // document.querySelector(".inputTarget").append(targetPesertaDidik);
  elemen_target.innerHTML = targetPesertaDidik;
}

//kegiatan
//pendahuluan orientasi
let Orientasi1 = document.querySelector(".orientasi1");
Orientasi1.onchange = penOrientasi1;

function penOrientasi1() {
  let orientasi1 = document.querySelector(".orientasi1").value;
  let elemen_orientasi1 = document.querySelector(".inputOrientasi1");
  // document.querySelector(".inputOrientasi1").append(orientasi1);
  elemen_orientasi1.innerHTML = orientasi1;
}

let Orientasi2 = document.querySelector(".orientasi2");
Orientasi2.onchange = penOrientasi2;

function penOrientasi2() {
  let orientasi2 = document.querySelector(".orientasi2").value;
  let elemen_orientasi2 = document.querySelector(".inputOrientasi2");
  // document.querySelector(".inputOrientasi2").append(orientasi2);
  elemen_orientasi2.innerHTML = orientasi2;
}

let Orientasi3 = document.querySelector(".orientasi3");
Orientasi3.onchange = penOrientasi3;

function penOrientasi3() {
  let orientasi3 = document.querySelector(".orientasi3").value;
  let elemen_orientasi3 = document.querySelector(".inputOrientasi3");
  // document.querySelector(".inputOrientasi3").append(orientasi3);
  elemen_orientasi3.innerHTML = orientasi3;
}

let Orientasi4 = document.querySelector(".orientasi4");
Orientasi4.onchange = penOrientasi4;

function penOrientasi4() {
  let orientasi4 = document.querySelector(".orientasi4").value;
  let elemen_orientasi4 = document.querySelector(".inputOrientasi4");
  elemen_orientasi4.innerHTML = orientasi4;
}

let Orientasi5 = document.querySelector(".orientasi5");
Orientasi5.onchange = penOrientasi5;

function penOrientasi5() {
  let orientasi5 = document.querySelector(".orientasi5").value;
  let elemen_orientasi5 = document.querySelector(".inputOrientasi5");
  elemen_orientasi5.innerHTML = orientasi5;
}

//motivasi
let motivasi1 = document.querySelector(".motivasi1");
motivasi1.onchange = penMotivasi1;

function penMotivasi1() {
  let motivasi = document.querySelector(".motivasi1").value;
  let elemen_motivasi1 = document.querySelector(".inputMotivasi1");
  // document.querySelector(".inputMotivasi1").append(motivasi);
  elemen_motivasi1.innerHTML = motivasi;
}

let motivasi2 = document.querySelector(".motivasi2");
motivasi2.onchange = penMotivasi2;

function penMotivasi2() {
  let motivasi = document.querySelector(".motivasi2").value;
  let elemen_motivasi2 = document.querySelector(".inputMotivasi2");
  // document.querySelector(".inputMotivasi2").append(motivasi);
  elemen_motivasi2.innerHTML = motivasi;
}

let motivasi3 = document.querySelector(".motivasi3");
motivasi3.onchange = penMotivasi3;

function penMotivasi3() {
  let motivasi = document.querySelector(".motivasi3").value;
  let elemen_motivasi3 = document.querySelector(".inputMotivasi3");
  elemen_motivasi3.innerHTML = motivasi;
}

let motivasi4 = document.querySelector(".motivasi4");
motivasi4.onchange = penMotivasi4;

function penMotivasi4() {
  let motivasi = document.querySelector(".motivasi4").value;
  let elemen_motivasi4 = document.querySelector(".inputMotivasi4");
  elemen_motivasi4.innerHTML = motivasi;
}

let motivasi5 = document.querySelector(".motivasi5");
motivasi5.onchange = penMotivasi5;

function penMotivasi5() {
  let motivasi = document.querySelector(".motivasi5").value;
  let elemen_motivasi5 = document.querySelector(".inputMotivasi5");
  elemen_motivasi5.innerHTML = motivasi;
}

//apersepsi
let apersepsi1 = document.querySelector(".apersepsi1");
apersepsi1.onchange = penApersepsi1;

function penApersepsi1() {
  let apersepsi = document.querySelector(".apersepsi1").value;
  let elemen_apersepsi1 = document.querySelector(".inputApersepsi1");
  // document.querySelector(".inputApersepsi1").append(apersepsi);
  elemen_apersepsi1.innerHTML = apersepsi;
}
let apersepsi2 = document.querySelector(".apersepsi2");
apersepsi2.onchange = penApersepsi2;

function penApersepsi2() {
  let apersepsi = document.querySelector(".apersepsi2").value;
  let elemen_apersepsi2 = document.querySelector(".inputApersepsi2");
  // document.querySelector(".inputApersepsi2").append(apersepsi);
  elemen_apersepsi2.innerHTML = apersepsi;
}

let apersepsi3 = document.querySelector(".apersepsi3");
apersepsi3.onchange = penApersepsi3;

function penApersepsi3() {
  let apersepsi = document.querySelector(".apersepsi3").value;
  let elemen_apersepsi3 = document.querySelector(".inputApersepsi3");
  // document.querySelector(".inputApersepsi3").append(apersepsi);
  elemen_apersepsi3.innerHTML = apersepsi;
}

let apersepsi4 = document.querySelector(".apersepsi4");
apersepsi4.onchange = penApersepsi4;

function penApersepsi4() {
  let apersepsi = document.querySelector(".apersepsi4").value;
  let elemen_apersepsi4 = document.querySelector(".inputApersepsi4");
  // document.querySelector(".inputApersepsi4").append(apersepsi);
  elemen_apersepsi4.innerHTML = apersepsi;
}

let apersepsi5 = document.querySelector(".apersepsi5");
apersepsi5.onchange = penApersepsi5;

function penApersepsi5() {
  let apersepsi = document.querySelector(".apersepsi5").value;
  let elemen_apersepsi5 = document.querySelector(".inputApersepsi5");
  // document.querySelector(".inputApersepsi5").append(apersepsi);
  elemen_apersepsi5.innerHTML = apersepsi;
}

let apersepsi6 = document.querySelector(".apersepsi6");
apersepsi6.onchange = penApersepsi6;

function penApersepsi6() {
  let apersepsi = document.querySelector(".apersepsi6").value;
  let elemen_apersepsi6 = document.querySelector(".inputApersepsi6");
  // document.querySelector(".inputApersepsi6").append(apersepsi);
  elemen_apersepsi6.innerHTML = apersepsi;
}

let apersepsi7 = document.querySelector(".apersepsi7");
apersepsi7.onchange = penApersepsi17;

function penApersepsi17() {
  let apersepsi = document.querySelector(".apersepsi7").value;
  let elemen_apersepsi7 = document.querySelector(".inputApersepsi7");
  // document.querySelector(".inputApersepsi7").append(apersepsi);
  elemen_apersepsi7.innerHTML = apersepsi;
}

let wPendahuluan = document.querySelector(".waktu_pendahuluan3");
wPendahuluan.onchange = alokasi_pendahuluan;

function alokasi_pendahuluan() {
  let waktuPendahuluan1 = document.querySelector(".waktu_pendahuluan1").value;
  let waktuPendahuluan2 = document.querySelector(".waktu_pendahuluan2").value;
  let waktuPendahuluan3 = document.querySelector(".waktu_pendahuluan3").value;
  let jmlWaktu = document.querySelector(".inputWaktuPendahuluan");

  waktu1 = parseInt(waktuPendahuluan1);
  waktu2 = parseInt(waktuPendahuluan2);
  waktu3 = parseInt(waktuPendahuluan3);

  let totalPendahuluan = waktu1 + waktu2 + waktu3;

  jmlWaktu.innerHTML = totalPendahuluan + " Menit";
}

// kegiatan inti
//sintaks1
let sin1int1 = document.querySelector(".sintak0Inti1");
sin1int1.onchange = Sin1int1;

function Sin1int1() {
  let inputSintak = document.querySelector(".sintak0Inti1").value;
  let elemen_inti1 = document.querySelector(".input1Inti1");
  // document.querySelector(".input1Inti1").append(inputSintak);
  elemen_inti1.innerHTML = inputSintak;
}

let sin1int2 = document.querySelector(".sintak0Inti2");
sin1int2.onchange = Sin1int2;

function Sin1int2() {
  let inputSintak = document.querySelector(".sintak0Inti2").value;
  let elemen_inti2 = document.querySelector(".input1Inti2");
  // document.querySelector(".input1Inti2").append(inputSintak);
  elemen_inti2.innerHTML = inputSintak;
}

let sin1int3 = document.querySelector(".sintak0Inti3");
sin1int3.onchange = Sin1int3;

function Sin1int3() {
  let inputSintak = document.querySelector(".sintak0Inti3").value;
  let elemen_inti3 = document.querySelector(".input1Inti3");
  // document.querySelector(".input1Inti3").append(inputSintak);
  elemen_inti3.innerHTML = inputSintak;
}

let sin1int4 = document.querySelector(".sintak0Inti4");
sin1int4.onchange = Sin1int4;

function Sin1int4() {
  let inputSintak = document.querySelector(".sintak0Inti4").value;
  let elemen_inti4 = document.querySelector(".input1Inti4");
  elemen_inti4.innerHTML = inputSintak;
}

let sin1int5 = document.querySelector(".sintak0Inti5");
sin1int5.onchange = Sin1int5;

function Sin1int5() {
  let inputSintak = document.querySelector(".sintak0Inti5").value;
  let elemen_inti5 = document.querySelector(".input1Inti5");
  elemen_inti5.innerHTML = inputSintak;
}

//sintaks2
let sin2int1 = document.querySelector(".sintak1Inti1");
sin2int1.onchange = Sin2int1;

function Sin2int1() {
  let inputSintak = document.querySelector(".sintak1Inti1").value;
  let elemen_inti1 = document.querySelector(".input2Inti1");
  // document.querySelector(".input2Inti1").append(inputSintak);
  elemen_inti1.innerHTML = inputSintak;
}

let sin2int2 = document.querySelector(".sintak1Inti2");
sin2int2.onchange = Sin2int2;

function Sin2int2() {
  let inputSintak = document.querySelector(".sintak1Inti2").value;
  let elemen_inti2 = document.querySelector(".input2Inti2");
  // document.querySelector(".input2Inti2").append(inputSintak);
  elemen_inti2.innerHTML = inputSintak;
}

let sin2int3 = document.querySelector(".sintak1Inti3");
sin2int3.onchange = Sin2int3;

function Sin2int3() {
  let inputSintak = document.querySelector(".sintak1Inti3").value;
  let elemen_inti3 = document.querySelector(".input2Inti3");
  // document.querySelector(".input2Inti3").append(inputSintak);
  elemen_inti3.innerHTML = inputSintak;
}

let sin2int4 = document.querySelector(".sintak1Inti4");
sin2int4.onchange = Sin2int4;

function Sin2int4() {
  let inputSintak = document.querySelector(".sintak1Inti4").value;
  let elemen_inti4 = document.querySelector(".input2Inti4");
  elemen_inti4.innerHTML = inputSintak;
}

let sin2int5 = document.querySelector(".sintak1Inti5");
sin2int5.onchange = Sin2int5;

function Sin2int5() {
  let inputSintak = document.querySelector(".sintak1Inti5").value;
  let elemen_inti5 = document.querySelector(".input2Inti5");
  elemen_inti5.innerHTML = inputSintak;
}

//sintak3
let sin3int1 = document.querySelector(".sintak2Inti1");
sin3int1.onchange = Sin3int1;

function Sin3int1() {
  let inputSintak = document.querySelector(".sintak2Inti1").value;
  let elemen_inti = document.querySelector(".input3Inti1");
  // document.querySelector(".input3Inti1").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin3int2 = document.querySelector(".sintak2Inti2");
sin3int2.onchange = Sin3int2;

function Sin3int2() {
  let inputSintak = document.querySelector(".sintak2Inti2").value;
  let elemen_inti = document.querySelector(".input3Inti2");
  // document.querySelector(".input3Inti2").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin3int3 = document.querySelector(".sintak2Inti3");
sin3int3.onchange = Sin3int3;

function Sin3int3() {
  let inputSintak = document.querySelector(".sintak2Inti3").value;
  let elemen_inti = document.querySelector(".input3Inti3");
  // document.querySelector(".input3Inti3").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin3int4 = document.querySelector(".sintak2Inti4");
sin3int4.onchange = Sin3int4;

function Sin3int4() {
  let inputSintak = document.querySelector(".sintak2Inti4").value;
  let elemen_inti = document.querySelector(".input3Inti4");
  // document.querySelector(".input3Inti4").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin3int5 = document.querySelector(".sintak2Inti5");
sin3int5.onchange = Sin3int5;

function Sin3int5() {
  let inputSintak = document.querySelector(".sintak2Inti5").value;
  let elemen_inti = document.querySelector(".input3Inti5");
  elemen_inti.innerHTML = inputSintak;
}

//sintaks4
let sin4int1 = document.querySelector(".sintak3Inti1");
sin4int1.onchange = Sin4int1;

function Sin4int1() {
  let inputSintak = document.querySelector(".sintak3Inti1").value;
  let elemen_inti = document.querySelector(".input4Inti1");
  // document.querySelector(".input4Inti1").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin4int2 = document.querySelector(".sintak3Inti2");
sin4int2.onchange = Sin4int2;

function Sin4int2() {
  let inputSintak = document.querySelector(".sintak3Inti2").value;
  let elemen_inti = document.querySelector(".input4Inti2");
  // document.querySelector(".input4Inti2").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin4int3 = document.querySelector(".sintak3Inti3");
sin4int3.onchange = Sin4int3;

function Sin4int3() {
  let inputSintak = document.querySelector(".sintak3Inti3").value;
  let elemen_inti = document.querySelector(".input4Inti3");
  // document.querySelector(".input4Inti3").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin4int4 = document.querySelector(".sintak3Inti4");
sin4int4.onchange = Sin4int4;

function Sin4int4() {
  let inputSintak = document.querySelector(".sintak3Inti4").value;
  let elemen_inti = document.querySelector(".input4Inti4");
  // document.querySelector(".input4Inti4").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin4int5 = document.querySelector(".sintak3Inti5");
sin4int5.onchange = Sin4int5;

function Sin4int5() {
  let inputSintak = document.querySelector(".sintak3Inti5").value;
  let elemen_inti = document.querySelector(".input4Inti5");
  elemen_inti.innerHTML = inputSintak;
}

//sintaks5
let sin5int1 = document.querySelector(".sintak4Inti1");
sin5int1.onchange = Sin5int1;

function Sin5int1() {
  let inputSintak = document.querySelector(".sintak4Inti1").value;
  let elemen_inti = document.querySelector(".input5Inti1");
  // document.querySelector(".input5Inti1").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin5int2 = document.querySelector(".sintak4Inti2");
sin5int2.onchange = Sin5int2;

function Sin5int2() {
  let inputSintak = document.querySelector(".sintak4Inti2").value;
  let elemen_inti = document.querySelector(".input5Inti2");
  // document.querySelector(".input5Inti2").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin5int3 = document.querySelector(".sintak4Inti3");
sin5int3.onchange = Sin5int3;

function Sin5int3() {
  let inputSintak = document.querySelector(".sintak4Inti3").value;
  let elemen_inti = document.querySelector(".input5Inti3");
  // document.querySelector(".input5Inti3").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin5int4 = document.querySelector(".sintak4Inti4");
sin5int4.onchange = Sin5int4;

function Sin5int4() {
  let inputSintak = document.querySelector(".sintak4Inti4").value;
  let elemen_inti = document.querySelector(".input5Inti4");
  // document.querySelector(".input5Inti4").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin5int5 = document.querySelector(".sintak4Inti5");
sin5int5.onchange = Sin5int5;

function Sin5int5() {
  let inputSintak = document.querySelector(".sintak4Inti5").value;
  let elemen_inti = document.querySelector(".input5Inti5");
  elemen_inti.innerHTML = inputSintak;
}

//sintaks6

let sin6int1 = document.querySelector(".sintak5Inti1");
sin6int1.onchange = Sin6int1;

function Sin6int1() {
  let inputSintak = document.querySelector(".sintak5Inti1").value;
  let elemen_inti = document.querySelector(".input6Inti1");
  // document.querySelector(".input6Inti1").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin6int2 = document.querySelector(".sintak5Inti2");
sin6int2.onchange = Sin6int2;

function Sin6int2() {
  let inputSintak = document.querySelector(".sintak5Inti2").value;
  let elemen_inti = document.querySelector(".input6Inti2");
  // document.querySelector(".input6Inti2").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin6int3 = document.querySelector(".sintak5Inti3");
sin6int3.onchange = Sin6int3;

function Sin6int3() {
  let inputSintak = document.querySelector(".sintak5Inti3").value;
  let elemen_inti = document.querySelector(".input6Inti3");
  // document.querySelector(".input6Inti3").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sin6int4 = document.querySelector(".sintak5Inti4");
sin6int4.onchange = Sin6int4;

function Sin6int4() {
  let inputSintak = document.querySelector(".sintak5Inti4").value;
  let elemen_inti = document.querySelector(".input6Inti4");
  elemen_inti.innerHTML = inputSintak;
}

let sin6int5 = document.querySelector(".sintak5Inti5");
sin6int5.onchange = Sin6int5;

function Sin6int5() {
  let inputSintak = document.querySelector(".sintak5Inti5").value;
  let elemen_inti = document.querySelector(".input6Inti5");
  // document.querySelector(".input6Inti2").append(inputSintak);
  elemen_inti.innerHTML = inputSintak;
}

let sintakhide = document.querySelector(".sintakhide");
let wInti2 = document.querySelector(".input_waktu5");
wInti2.onchange = alokasi_inti;

let wInti1 = document.querySelector(".input_waktu6");
wInti1.onchange = alokasi_inti;

function alokasi_inti() {
  if (sintakhide.style.display === "block") {
    let waktuInti1 = document.querySelector(".input_waktu1").value;
    let waktuInti2 = document.querySelector(".input_waktu2").value;
    let waktuInti3 = document.querySelector(".input_waktu3").value;
    let waktuInti4 = document.querySelector(".input_waktu4").value;
    let waktuInti5 = document.querySelector(".input_waktu5").value;
    let waktuInti6 = document.querySelector(".input_waktu6").value;
    let jmlWaktu = document.querySelector(".inputWaktuInti");

    waktu1 = parseInt(waktuInti1);
    waktu2 = parseInt(waktuInti2);
    waktu3 = parseInt(waktuInti3);
    waktu4 = parseInt(waktuInti4);
    waktu5 = parseInt(waktuInti5);
    waktu6 = parseInt(waktuInti6);

    let totalInti = waktu1 + waktu2 + waktu3 + waktu4 + waktu5 + waktu6;

    jmlWaktu.innerHTML = totalInti + " Menit";
  } else {
    let waktuInti1 = document.querySelector(".input_waktu1").value;
    let waktuInti2 = document.querySelector(".input_waktu2").value;
    let waktuInti3 = document.querySelector(".input_waktu3").value;
    let waktuInti4 = document.querySelector(".input_waktu4").value;
    let waktuInti5 = document.querySelector(".input_waktu5").value;
    let jmlWaktu = document.querySelector(".inputWaktuInti");

    waktu1 = parseInt(waktuInti1);
    waktu2 = parseInt(waktuInti2);
    waktu3 = parseInt(waktuInti3);
    waktu4 = parseInt(waktuInti4);
    waktu5 = parseInt(waktuInti5);

    let totalInti = waktu1 + waktu2 + waktu3 + waktu4 + waktu5;

    jmlWaktu.innerHTML = totalInti + "Menit";
  }
}

//penutup

let penutup1 = document.querySelector(".penutup1");
penutup1.onchange = Penutup1;

function Penutup1() {
  let inputPenutup = document.querySelector(".penutup1").value;
  let elemen_penutup = document.querySelector(".inputPenutup1");
  // document.querySelector(".inputPenutup1").append(inputPenutup);
  elemen_penutup.innerHTML = inputPenutup;
}

let penutup2 = document.querySelector(".penutup2");
penutup2.onchange = Penutup2;

function Penutup2() {
  let inputPenutup = document.querySelector(".penutup2").value;
  let elemen_penutup = document.querySelector(".inputPenutup2");
  // document.querySelector(".inputPenutup2").append(inputPenutup);
  elemen_penutup.innerHTML = inputPenutup;
}

let penutup3 = document.querySelector(".penutup3");
penutup3.onchange = Penutup3;

function Penutup3() {
  let inputPenutup = document.querySelector(".penutup3").value;
  let elemen_penutup = document.querySelector(".inputPenutup3");
  // document.querySelector(".inputPenutup3").append(inputPenutup);
  elemen_penutup.innerHTML = inputPenutup;
}

let penutup4 = document.querySelector(".penutup4");
penutup4.onchange = Penutup4;

function Penutup4() {
  let inputPenutup = document.querySelector(".penutup4").value;
  let elemen_penutup = document.querySelector(".inputPenutup4");
  // document.querySelector(".inputPenutup4").append(inputPenutup);
  elemen_penutup.innerHTML = inputPenutup;
}

let penutup5 = document.querySelector(".penutup5");
penutup5.onchange = Penutup5;

function Penutup5() {
  let inputPenutup = document.querySelector(".penutup5").value;
  let elemen_penutup = document.querySelector(".inputPenutup5");
  elemen_penutup.innerHTML = inputPenutup;
}

let wPenutup = document.querySelector(".waktu_penutup1");
wPenutup.onchange = alokasi_Penutup;

function alokasi_Penutup() {
  let waktuPenutup1 = document.querySelector(".waktu_penutup1").value;

  let jmlWaktu = document.querySelector(".inputWaktuPenutup");

  waktu1 = parseInt(waktuPenutup1);

  let totalInti = waktu1;

  jmlWaktu.innerHTML = totalInti + " Menit";
}

//assesmen
// let ases1 = document.querySelector(".asesmen1");
// ases1.onchange = Ases1;
// let ases2 = document.querySelector(".asesmen2");
// ases2.onchange = Ases2;
// let ases3 = document.querySelector(".asesmen3");
// ases3.onchange = Ases3;

// let penilaian1 = document.querySelector(".formatif");
// let penilaian2 = document.querySelector(".sumatif");
// let j_penilaian = document.querySelector(".jenisPenilaian");
// penilaian1.onclick = penilaianFormatif;
// penilaian2.onclick = penilaianSumatif;

function Teknik1() {
  let teknik1 = document.querySelector(".teknik1").value;
  let input_teknik = document.querySelector(".inputTeknik1");
  input_teknik.innerHTML = teknik1;
}
function Teknik2() {
  let teknik2 = document.querySelector(".teknik2").value;
  let input_teknik = document.querySelector(".inputTeknik2");
  input_teknik.innerHTML = teknik2;
}
function Teknik3() {
  let teknik3 = document.querySelector(".teknik3").value;
  let input_teknik = document.querySelector(".inputTeknik3");
  input_teknik.innerHTML = teknik3;
}
// function Instrumen1() {
//   let Instumen1 = document.querySelector(".instrumen1").value;
//   let input_instrumen = document.querySelector(".inputInstrumen1");
//   input_instrumen.innerHTML = Instumen1;
// }
// function Instrumen2() {
//   let Instumen2 = document.querySelector(".instrumen2").value;
//   let input_instrumen = document.querySelector(".inputInstrumen2");
//   input_instrumen.innerHTML = Instumen2;
// }
// function Instrumen3() {
//   let Instumen3 = document.querySelector(".instrumen3").value;
//   let input_instrumen = document.querySelector(".inputInstrumen3");
//   input_instrumen.innerHTML = Instumen3;
// }

// let penilaian1 = document.querySelector(".formatif");
// let penilaian2 = document.querySelector(".sumatif");
// let j_penilaian = document.querySelector(".jenisPenilaian");
// penilaian1.onclick = penilaianFormatif;
// penilaian2.onclick = penilaianSumatif;

// function penilaianFormatif() {
//   j_penilaian.innerHTML = "Formatif";
// }
// function penilaianSumatif() {
//   j_penilaian.innerHTML = "Sumatif";
// }

function Ases1() {
  let inputAsesmen = document.querySelector(".asesmen1").value;
  let elemen_asesmen = document.querySelector(".inputassesmen1");
  // document.querySelector(".inputassesmen1").append(inputAsesmen);
  elemen_asesmen.innerHTML = inputAsesmen;
}

function Ases2() {
  let inputAsesmen = document.querySelector(".asesmen2").value;
  let elemen_asesmen = document.querySelector(".inputassesmen2");
  // document.querySelector(".inputassesmen2").append(inputAsesmen);
  elemen_asesmen.innerHTML = inputAsesmen;
}

function Ases3() {
  let inputAsesmen = document.querySelector(".asesmen3").value;
  let elemen_asesmen = document.querySelector(".inputassesmen3");
  // document.querySelector(".inputassesmen3").append(inputAsesmen);
  elemen_asesmen.innerHTML = inputAsesmen;
}

//pengayaan
let pengayaan1 = document.querySelector(".remidial1");
pengayaan1.onchange = Pengayaan1;

function Pengayaan1() {
  let inputPengayaan = document.querySelector(".remidial1").value;
  let elemen_pengayaan = document.querySelector(".inputremidi1");
  // document.querySelector(".inputremidi1").append(inputPengayaan);
  elemen_pengayaan.innerHTML = inputPengayaan;
}

let pengayaan2 = document.querySelector(".remidial2");
pengayaan2.onchange = Pengayaan2;

function Pengayaan2() {
  let inputPengayaan = document.querySelector(".remidial2").value;
  let elemen_pengayaan = document.querySelector(".inputremidi2");
  // document.querySelector(".inputremidi2").append(inputPengayaan);
  elemen_pengayaan.innerHTML = inputPengayaan;
}

let pengayaan3 = document.querySelector(".remidial3");
pengayaan3.onchange = Pengayaan3;

function Pengayaan3() {
  let inputPengayaan = document.querySelector(".remidial3").value;
  let elemen_pengayaan = document.querySelector(".inputremidi3");
  // document.querySelector(".inputremidi3").append(inputPengayaan);
  elemen_pengayaan.innerHTML = inputPengayaan;
}

//refleksi guru
let refGuru1 = document.querySelector(".guru1");
refGuru1.onchange = RefGuru1;

function RefGuru1() {
  let refleksGuru = document.querySelector(".guru1").value;
  let elemen_rGuru = document.querySelector(".inputGuru1");
  // document.querySelector(".inputGuru1").append(refleksGuru);
  elemen_rGuru.innerHTML = refleksGuru;
}

let refGuru2 = document.querySelector(".guru2");
refGuru2.onchange = RefGuru2;

function RefGuru2() {
  let refleksGuru = document.querySelector(".guru2").value;
  let elemen_rGuru = document.querySelector(".inputGuru2");
  // document.querySelector(".inputGuru2").append(refleksGuru);
  elemen_rGuru.innerHTML = refleksGuru;
}

let refGuru3 = document.querySelector(".guru3");
refGuru3.onchange = RefGuru3;

function RefGuru3() {
  let refleksGuru = document.querySelector(".guru3").value;
  let elemen_rGuru = document.querySelector(".inputGuru3");
  // document.querySelector(".inputGuru3").append(refleksGuru);
  elemen_rGuru.innerHTML = refleksGuru;
}

//refleksi siswa
let refSiswa1 = document.querySelector(".siswa1");
refSiswa1.onchange = RefSiswa1;

function RefSiswa1() {
  let refleksSiswa = document.querySelector(".siswa1").value;
  let elemen_rSiswa = document.querySelector(".inputSiswa1");
  elemen_rSiswa.innerHTML = refleksSiswa;
  // document.querySelector(".inputSiswa1").append(refleksSiswa);
}

let refSiswa2 = document.querySelector(".siswa2");
refSiswa2.onchange = RefSiswa2;

function RefSiswa2() {
  let refleksSiswa = document.querySelector(".siswa2").value;
  let elemen_rSiswa = document.querySelector(".inputSiswa2");
  // document.querySelector(".inputSiswa2").append(refleksSiswa);
  elemen_rSiswa.innerHTML = refleksSiswa;
}

let refSiswa3 = document.querySelector(".siswa3");
refSiswa3.onchange = RefSiswa3;

function RefSiswa3() {
  let refleksSiswa = document.querySelector(".siswa3").value;
  let elemen_rSiswa = document.querySelector(".inputSiswa3");
  // document.querySelector(".inputSiswa3").append(refleksSiswa);
  elemen_rSiswa.innerHTML = refleksSiswa;
}

function kembali() {
  let popup = document.getElementById("hasiljadi");
  let xidentitas = document.querySelector(".identitas");
  let xprofil = document.querySelector(".profil");
  let xcapaian = document.querySelector(".capaianPembelajaran");
  let xtujuan = document.querySelector(".tujuanPembelajaran");
  let xindikator = document.querySelector(".indikator");
  let xpemantik = document.querySelector(".pertanyaanPemantik");
  let xsarana = document.querySelector(".saranaPrasarana");
  let xstrategi = document.querySelector(".strategiPembelajaran");
  let xtarget = document.querySelector(".target");
  let xkegiatan = document.querySelector(".kegiatan");
  let xasesmen = document.querySelector(".asesmen");
  let xpengayaan = document.querySelector(".pengayaan");
  let xrefleksiguru = document.querySelector(".refleksiGuru");
  let xrefleksisiswa = document.querySelector(".refleksiSiswa");

  popup.style.display = "none";
  xidentitas.style.display = "block";
  xprofil.style.display = "block";
  xcapaian.style.display = "block";
  xtujuan.style.display = "block";
  xindikator.style.display = "block";
  xpemantik.style.display = "block";
  xsarana.style.display = "block";
  xstrategi.style.display = "block";
  xtarget.style.display = "block";
  xkegiatan.style.display = "block";
  xasesmen.style.display = "block";
  xpengayaan.style.display = "block";
  xrefleksiguru.style.display = "block";
  xrefleksisiswa.style.display = "block";
}

// print function
// const print = () => {
//   let actContents = document.body.innerHTML;
//   document.body.innerHTML = actContents;
//   window.print();
// };
