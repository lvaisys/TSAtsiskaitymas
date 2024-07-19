/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
var ENDPOINT = 'NBA.json';
fetch(ENDPOINT)
    .then(function (res) { return res.json(); })
    .then(function (nba) {
    var outputDiv = document.querySelector("#output");
    nba.teams.forEach(function (team) {
        var nbaTeamCard = document.createElement('div');
        ;
        nbaTeamCard.classList.add('teamCard');
        var teamName = document.createElement('h2');
        teamName.textContent = team.name;
        nbaTeamCard.appendChild(teamName);
        team.players.forEach(function (player) {
            var playerCard = document.createElement('div');
            ;
            playerCard.classList.add('teamPlayer');
            var playerName = document.createElement('h4');
            playerName.textContent = player.firstName;
            var playerLastName = document.createElement('h4');
            playerLastName.textContent = player.lastName;
            var playerLink = document.createElement('a');
            playerLink.textContent = 'LearnMore';
            playerLink.href = player.googleSearch;
            playerCard.append(playerName, playerLastName, playerLink);
            nbaTeamCard.appendChild(playerCard);
        });
        outputDiv === null || outputDiv === void 0 ? void 0 : outputDiv.appendChild(nbaTeamCard);
    });
});
