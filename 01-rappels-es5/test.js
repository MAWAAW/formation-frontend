var obj = new Object();
obj.name = "toto";
obj.surname = "titi";

for (i in obj) {
    console.log('obj[' + i + '] = ' + obj[i]);
}


var tab = new Array(1, 2, 3, 9)
for (i in tab) {
    console.log(i + " " + tab[i]);
}

