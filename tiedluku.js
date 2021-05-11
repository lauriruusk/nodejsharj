const fs = require('fs')
const chalk = require('chalk')

// Harj 1
// Tee ohjelma, joka tulostaa annetun tiedoston sisällön. Tiedoston nimi annetaan komentorivillä. Esimerkiksi:
// node harjoitus1.js tiedosto.txt
// Tiedoston nimi tallennetaan seuraavasti:
// const tiedosto = process.argv[2]
// Mikäli tiedostoa ei löydy, tulosta punaisella "Tiedostoa ei löytynyt!". Muussa tapauksessa tulosta tiedoston sisältö kokonaan.
// Käytä värien tulostamiseen Chalk-moduulia. Asenna chalk: npm i chalk

// const tiedosto = process.argv[2]

// try {
//     const dataBuffer = fs.readFileSync(tiedosto)
//     const data = dataBuffer.toString()
//     console.log(data)
// } catch (e) {
//     console.log(chalk.red('Tiedostoa ei löytynyt!'))
// }

// Harj 2
// Tee ohjelma, joka tutkii löytyykö annettu nimi tiedostosta. Käytä liitteenä olevaa tiedostoa nimet.txt. tai tee oma tiedosto, jota käytät. 
// Etsittävä nimi annetaan komentorivillä. Esimerkiksi:
// node harjoitus2.js Liisa
// Annettu nimi tallennetaan seuraavasti:
// const nimi = process.argv[2]
// Mikäli nimeä ei löydy tiedostosta, tulosta punaisella "Ei löytynyt!". Mikäli nimi löytyy tiedostosta, tulosta vihreällä "Löytyi!"

// const nimi = process.argv[2]

// try {
//     const dataBuffer = fs.readFileSync('tiedosto.txt')
//     const data = dataBuffer.toString()
//     if(data.includes(nimi)) {
//         console.log(chalk.green('Löytyi!'))
//     } else {
//         console.log(chalk.red('Ei löytynyt!'))
//     }
// } catch (e) {
//     console.log(chalk.red('Tiedostoa ei löytynyt!'))
// }

// Harj 3

// const email = process.argv[2]

// const validator = require('email-validator')

// console.log(validator.validate(email))

// Tiedoston kirjoitus

// const data = process.argv[2]

// try {
//     fs.writeFileSync('testing.txt', data.toString())
//     console.log(chalk.green('Onnistui!'))
    
// } catch (e) {
//     console.log(chalk.red('error!'))
// }

// Harj 4 esimerkki

// const dataBuffer = fs.readFileSync('olio.json')

// const dataJSON = dataBuffer.toString()

// const olio = JSON.parse(dataJSON)

// olio.ika = 25
// olio.osoite = "Koulukatu"

// olioJSON = JSON.stringify(olio)

// fs.writeFileSync('olio.json', olioJSON)

// Harj 4

// const dataBuffer = fs.readFileSync('nimet.json')

// const dataJSON = dataBuffer.toString()

// const nimilista = JSON.parse(dataJSON)

// nimilista.forEach((n, i) => {
//     console.log(n.nimi + ", " + n.ika)
    
// });

// Harj 5

// const dataBuffer = fs.readFileSync('henkilo.json')

// const dataJSON = dataBuffer.toString()

// const henkilo = JSON.parse(dataJSON)

// henkilo.nimi = "Matti"
// henkilo.ika = 55
// // console.log(henkilo)

// henkiloJSON = JSON.stringify(henkilo)

// fs.writeFileSync('henkilo.json', henkiloJSON)

// Harj 6
// Tallenna kolmen henkilön tiedot henkilot.json -tiedostoon. Henkilöistä tallennetaan nimi, ikä sekä asuinpaikka.

// const hlot = [
//     {
//         nimi: "Matti",
//         ika: 28,
//         asuinpaikka: "Vantaa"
//     },
//     {
//         nimi: "Teppo",
//         ika: 45,
//         asuinpaikka: "Keuruu"
//     },
//     {
//         nimi: "Eeva",
//         ika: 34,
//         asuinpaikka: "Oulu"
//     }
// ]

// hlotJSON = JSON.stringify(hlot)

// fs.writeFileSync('henkilot.json', hlotJSON)

// Harj 7
// Tiedostossa opiskelijat.json on kuusi opiskelijaa. Opiskelijoista on tallennettu nimi ja ikä. Tee funktio, joka palauttaa kaikki täysi-ikäiset 
// opiskelijat. Käytä filter()-metodia. Testaa funktiota ja tulosta kaikki täysi-ikäiset opiskelijat.

const dataBuffer = fs.readFileSync('opiskelijat.json')

const students = dataBuffer.toString()

const adults = students.filter(s => s.ika > 17 )

console.log(adults)
