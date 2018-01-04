var data = require('./data/devfest-2015')

exports.listerTousLesPresentateurs = function () {
    return data.speakers
}

exports.listerToutesLesSessions = function () {
    return data.sessions
}

exports.trouverUneSession = function (idSession) {
    return data.sessions.filter((element, index, array) => element.id == idSession)
}

exports.listerTopPresentateurs = function () {
    return data.speakers.filter((element, index, array) => element.topspeaker == true)
}
