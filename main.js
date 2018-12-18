telefon = "0641234567"
noviTel = ""


for (let i = 0; i < telefon.length; i++) {                  //prelistaj sve clanove
    noviTel += telefon[i]
    if (i == 2) noviTel += "/"                              // posle drugog clana dodaj /
    if (i == 5) noviTel += "-"                              // posle petog clana dodaj -
    if (i == 7) noviTel += "-"                              // posle sedmog clana dodaj - 
}

console.log(noviTel);                                       // ispisi u konzoli

