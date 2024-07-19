/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const TEAMS_ENDPOINT = 'teams.json';
const PLAYERS_ENDPOINT = 'players.json';

type Player = {
  id: number;
  firstName: string,
  lastName: string,
  teamId: number
}
type Team = {
  id: number,
  abbreviation: string;
  teamName: string,
  simpleName: string,
  location: string,
  players?: Player[]
};
type NBATeams = {
  teams: Team[]
}
type NBAPlayers = {
  players: Player[]
}

fetch(TEAMS_ENDPOINT)
  .then((res: Response) => res.json())
  .then((nbaTeams: NBATeams) => {
    nbaTeams.teams.forEach(team => {
      const outputDiv: Element = document.querySelector('#output')!;
      const nbaTeamCard: HTMLDivElement = document.createElement('div');
      nbaTeamCard.classList.add('teamCard');
      const teamName: HTMLHeadingElement = document.createElement('h2');
      teamName.textContent = team.teamName;
      const simpleName: HTMLHeadingElement = document.createElement('h2');
      simpleName.textContent = team.simpleName;
      const abbreviation: HTMLHeadingElement = document.createElement('h2');
      abbreviation.textContent = team.abbreviation;
      const location: HTMLHeadingElement = document.createElement('h2');
      location.textContent = team.location;
      const playersButton: HTMLButtonElement = document.createElement('button');
      playersButton.textContent = 'Players';
      playersButton.addEventListener('click', () => {
        fetch(PLAYERS_ENDPOINT)
          .then((res: Response) => res.json())
          .then((nbaPlayers: NBAPlayers) => {
            team.players = nbaPlayers.players.filter(p => p.teamId === team.id);
            const dialogEl: HTMLDialogElement = document.createElement('dialog');
            const wrapperDiv: HTMLDivElement = document.createElement('div');
            wrapperDiv.classList.add("detailedPlayersWrapper");
            console.log(team.players);
            if (team.players)
              team.players.forEach(player => {
                const playerDiv: HTMLDivElement = document.createElement('div');
                playerDiv.classList.add("playerDiv");
                const playerName: HTMLHeadingElement = document.createElement('h4');
                playerName.textContent = player.firstName + ' ' + player.lastName;
                playerDiv.appendChild(playerName);
                wrapperDiv.appendChild(playerDiv);
              });
            const exitButton: HTMLButtonElement = document.createElement('button');
            exitButton.textContent = `Less`;
            exitButton.addEventListener('click', () => {
              dialogEl.remove();
            });
            dialogEl.append(wrapperDiv, exitButton);
            nbaTeamCard.appendChild(dialogEl);
            window.onclick = function (event: Event) {
              if (event.target === dialogEl) {
                dialogEl.remove();
              }
            }
            dialogEl.showModal();
          });
      });
      nbaTeamCard.append(teamName, simpleName, abbreviation, location, playersButton);
      outputDiv.appendChild(nbaTeamCard);
    });
  });