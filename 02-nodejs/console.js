const readline = require('readline');
const service = require('./service')

var listerTousLesPresentateurs = function () {
    var tousLesPresentateurs = service.listerTousLesPresentateurs()
    tousLesPresentateurs.forEach((element, index, array) =>
        console.log(element.firstname)
    )
}

var listerTopPresentateurs = function () {
    var topPresentateurs = service.listerTopPresentateurs()
    topPresentateurs.forEach((element, index, array) =>
        console.log(element.firstname)
    )
}

var listerToutesLesSessions = function () {
    var toutesLesSessions = service.listerToutesLesSessions()
    toutesLesSessions.forEach((element, index, array) =>
        console.log(element.title)
    )
}

var trouverUneSession = function (idSession) {
    var uneSession = service.trouverUneSession(idSession)
    console.log(uneSession)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'PROMPT> '
});

var menu = function () {
    console.log('*** Application Conférence ***');
    console.log('1. Liste de tous les présentateurs');
    console.log('2. Top présentateurs');
    console.log('3. Liste des sessions');
    console.log('4. Détail d\'une session');
}

menu();
rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            listerTousLesPresentateurs();
            menu();
            rl.prompt();
            break;
        case '2':
            listerTopPresentateurs();
            menu();
            rl.prompt();
            break;
        case '3':
            listerToutesLesSessions();
            menu();
            rl.prompt();
            break;
        case '4':
            rl.question('Choisir un idSession>>', (answer) => {
                trouverUneSession(answer);
                menu();
                rl.prompt();
            });
            break;
        default:
            console.log('Option invalide');
            break;
    }
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});
