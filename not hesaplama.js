// - Tüm derslerin en iyi ögrencilerini bulmasi

const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

//ogrencilerin notlarinin bulunudugu index numarlari
const Hans = 0;
const Ulrich = 1;
const Olaf = 2;
const Otto = 3;
const Tina = 4;
const Rosalina = 5;
const Urs = 6;
const Monika = 7;

// sirasiyla dersler; Matematik, Almanca, Ingilizce ve Cografya
const matematik = 1;
const almanca = 2;
const ingilizce = 3;
const cografya = 4;

// - Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
function ortalamaHesapla(diziAdi, dersAdi) {

    let toplam = 0;

    for (let index = 0; index < diziAdi.length; index++) {

        let not = diziAdi[index][dersAdi];
        toplam = toplam + not
    }
    let Ortalama = toplam / notes.length;

    return Ortalama
}

//mat ortalamasi hesaplamak icin
let result = ortalamaHesapla(notes, matematik);
console.log("Matematik Ortalamasi ", result);

//almanca ortalamasi hesaplamak icin
let result2 = ortalamaHesapla(notes, almanca);
console.log("Almanca Ortalamasi ", result2);

//ingilizce ortalamasi hesaplamak icin
let result3 = ortalamaHesapla(notes, ingilizce);
console.log("ingilizce Ortalamasi ", result3);

//cografya ortalamasi hesaplamak icin
let result4 = ortalamaHesapla(notes, cografya);
console.log("Cografya Ortalamasi ", result4);

//Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi

function yetmisUstuBul(diziAdi, dersAdi) {

    let sonuc = []

    for (let index = 0; index < diziAdi.length; index++) {

        if (diziAdi[index][dersAdi] > 70) {
            sonuc.push(diziAdi[index][0]);
        }

    }
    return sonuc

}
console.log("Mat + 70 ogrenciler ", yetmisUstuBul(notes, matematik));

console.log("alm + 70 ogrenciler ", yetmisUstuBul(notes, almanca));

console.log("ing + 70 ogrenciler", yetmisUstuBul(notes, ingilizce));

console.log("cog + 70 ogrenciler", yetmisUstuBul(notes, cografya));


//Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi

function ortalamaUstuBul(diziAdi, dersAdi) {
    let ortalama = ortalamaHesapla(diziAdi, dersAdi)
    let sonuc = []

    for (let index = 0; index < diziAdi.length; index++) {

        if (diziAdi[index][dersAdi] > ortalama) {
            sonuc.push(diziAdi[index][0]);
        }
    }
    return sonuc

}

console.log("Mat Ortalama Ustu Olanlar ", ortalamaUstuBul(notes, matematik));

console.log("Alm Ortalama Ustu Olanlar ", ortalamaUstuBul(notes, almanca));

console.log("Ing Ortalama Ustu Olanlar ", ortalamaUstuBul(notes, ingilizce));

console.log("Cog Ortalama Ustu Olanlar ", ortalamaUstuBul(notes, cografya));


// - Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi

function enIyiDersiBul(diziAdi, dersSayisi, ogrenciAdi) {

    let enIyiNot = diziAdi[ogrenciAdi][1];

    for (let index = 0; index < dersSayisi; index++) {

        if (diziAdi[ogrenciAdi][index] > enIyiNot) {
            enIyiNot = diziAdi[ogrenciAdi][index];
        }
    }
    if (enIyiNot == diziAdi[ogrenciAdi][1]) {
        console.log("En Iyi Ders Matematik")

    } else if (enIyiNot == diziAdi[ogrenciAdi][2]) {
        console.log("En Iyi Ders Almanca")
    } else if (enIyiNot == diziAdi[ogrenciAdi][3]) {
        console.log("En Iyi Ders Ingilizce")
    } else if (enIyiNot == diziAdi[ogrenciAdi][4]) {
        console.log("En Iyi Ders Cografya")
    }

    return enIyiNot

}

console.log("Hans", enIyiDersiBul(notes, 4, Hans));

console.log("Ulrich", enIyiDersiBul(notes, 4, Ulrich));

console.log("Olaf", enIyiDersiBul(notes, 4, Olaf));

console.log("Otto", enIyiDersiBul(notes, 4, Otto));

console.log("Tina", enIyiDersiBul(notes, 4, Tina));

console.log("Rosalina", enIyiDersiBul(notes, 4, Rosalina));

console.log("Urs", enIyiDersiBul(notes, 4, Urs));

console.log("Monika", enIyiDersiBul(notes, 4, Monika));


// - Sinifin en kötü oldugu dersi gostermesi

function enKotuDersiBul(diziAdi, dersSayisi, ogrenciAdi) {

    let enKotuNot = diziAdi[ogrenciAdi][1];

    for (let index = 0; index < dersSayisi; index++) {

        if (diziAdi[ogrenciAdi][index] < enKotuNot) {
            enKotuNot = diziAdi[ogrenciAdi][index];
        }
    }
    if (enKotuNot == diziAdi[ogrenciAdi][1]) {
        console.log("En Kotu Ders Matematik")

    } else if (enKotuNot == diziAdi[ogrenciAdi][2]) {
        console.log("En Kotu Ders Almanca")
    } else if (enKotuNot == diziAdi[ogrenciAdi][3]) {
        console.log("En Kotu Ders Ingilizce")
    } else if (enKotuNot == diziAdi[ogrenciAdi][4]) {
        console.log("En Kotu Ders Cografya")
    }

    return enKotuNot

}

console.log("Hans", enKotuDersiBul(notes, 4, Hans));

console.log("Ulrich", enKotuDersiBul(notes, 4, Ulrich));

console.log("Olaf", enKotuDersiBul(notes, 4, Olaf));

console.log("Otto", enKotuDersiBul(notes, 4, Otto));

console.log("Tina", enKotuDersiBul(notes, 4, Tina));

console.log("Rosalina", enKotuDersiBul(notes, 4, Rosalina));

console.log("Urs", enKotuDersiBul(notes, 4, Urs));

console.log("Monika", enKotuDersiBul(notes, 4, Monika));


// - Tüm derslerin en iyi ögrencilerini bulmasi

function enIyiOgrenciyiBul(diziAdi, dersAdi) {

    let enIyiNot = diziAdi[0][dersAdi];

    for (let index = 0; index < diziAdi.length; index++) {

        if (diziAdi[index][dersAdi] > enIyiNot) {
            enIyiNot = diziAdi[index][dersAdi];
        }
    }
    if (enIyiNot == diziAdi[0][dersAdi]) {
        console.log("En Iyi ogrenci Hans")

    } else if (enIyiNot == diziAdi[1][dersAdi]) {
        console.log("En Iyi ogrenci Ulrich")
    } else if (enIyiNot == diziAdi[2][dersAdi]) {
        console.log("En Iyi ogrenci Olaf")
    } else if (enIyiNot == diziAdi[3][dersAdi]) {
        console.log("En Iyi ogrenci Ottto")
    } else if (enIyiNot == diziAdi[4][dersAdi]) {
        console.log("En Iyi ogrenci Tina")
    } else if (enIyiNot == diziAdi[5][dersAdi]) {
        console.log("En Iyi ogrenci Rosalina")
    } else if (enIyiNot == diziAdi[6][dersAdi]) {
        console.log("En Iyi ogrenci Urs")
    } else if (enIyiNot == diziAdi[7][dersAdi]) {
        console.log("En Iyi ogrenci Monika")
    }


    return enIyiNot

}

console.log("Matematikte ", enIyiOgrenciyiBul(notes, matematik));

console.log("Almancada ", enIyiOgrenciyiBul(notes, almanca));

console.log("Ingilizcede ", enIyiOgrenciyiBul(notes, ingilizce));

console.log("Cografyada ", enIyiOgrenciyiBul(notes, cografya));