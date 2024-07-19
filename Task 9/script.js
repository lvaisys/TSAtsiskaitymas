/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
var TEAMS_ENDPOINT = 'teams.json';
var PLAYERS_ENDPOINT = 'players.json';
fetch(TEAMS_ENDPOINT)
    .then(function (res) { return res.json(); })
    .then(function (nbaTeams) {
    nbaTeams.teams.forEach(function (team) {
        var outputDiv = document.querySelector('#output');
        var nbaTeamCard = document.createElement('div');
        nbaTeamCard.classList.add('teamCard');
        var teamName = document.createElement('h2');
        teamName.textContent = team.teamName;
        var simpleName = document.createElement('h2');
        simpleName.textContent = team.simpleName;
        var abbreviation = document.createElement('h2');
        abbreviation.textContent = team.abbreviation;
        var location = document.createElement('h2');
        location.textContent = team.location;
        var playersButton = document.createElement('button');
        playersButton.textContent = 'Players';
        playersButton.addEventListener('click', function () {
            fetch(PLAYERS_ENDPOINT)
                .then(function (res) { return res.json(); })
                .then(function (nbaPlayers) {
                team.players = nbaPlayers.players.filter(function (p) { return p.teamId === team.id; });
                var dialogEl = document.createElement('dialog');
                var wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add("detailedPlayersWrapper");
                console.log(team.players);
                if (team.players)
                    team.players.forEach(function (player) {
                        var playerDiv = document.createElement('div');
                        playerDiv.classList.add("playerDiv");
                        var playerName = document.createElement('h4');
                        playerName.textContent = player.firstName + ' ' + player.lastName;
                        playerDiv.appendChild(playerName);
                        wrapperDiv.appendChild(playerDiv);
                    });
                var exitButton = document.createElement('button');
                exitButton.textContent = "Less";
                exitButton.addEventListener('click', function () {
                    dialogEl.remove();
                });
                dialogEl.append(wrapperDiv, exitButton);
                nbaTeamCard.appendChild(dialogEl);
                window.onclick = function (event) {
                    if (event.target === dialogEl) {
                        dialogEl.remove();
                    }
                };
                dialogEl.showModal();
            });
        });
        nbaTeamCard.append(teamName, simpleName, abbreviation, location, playersButton);
        outputDiv.appendChild(nbaTeamCard);
    });
});
