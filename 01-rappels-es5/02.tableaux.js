console.log("02 - Tableaux");

var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"]

villes.forEach((element, index, array) => console.log(element))

console.log("lettreADansToutesLesVilles == " +
    villes.every(function (e) {
        return e.indexOf('a') > -1
    })
);

console.log("auMoinsUneVilleAvecUnTiret == " +
    villes.some(function (e) {
        return e.indexOf('-') > -1
    })
);

var villeSansTiretSansEspace = villes.filter((element, index, array) => element.indexOf('-') == -1 && element.indexOf(' ') == -1)
console.log(villeSansTiretSansEspace)

var villesMajusculeSeTerminantParS = villes
    .filter((element, index, array) => element.slice(-1) == 's')
    .map((element, index, array) => element.toUpperCase())
console.log(villesMajusculeSeTerminantParS)