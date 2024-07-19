/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

type Player = {
  firstName: string,
  lastName: string,
  googleSearch: string
}
type Team = {
  id: number,
  name: string,
  players: Player[]
};
type NBA = {
  teams: Team[]
}

const ENDPOINT = 'NBA.json';

fetch(ENDPOINT)
  .then(res => res.json())
  .then((nba: NBA) => {
    const outputDiv: Element = document.querySelector(`#output`)!;
    nba.teams.forEach(team => {
      const nbaTeamCard: HTMLDivElement = document.createElement('div');;
      nbaTeamCard.classList.add('teamCard');
      const teamName: HTMLHeadingElement = document.createElement('h2');
      teamName.textContent = team.name;
      nbaTeamCard.appendChild(teamName);
      team.players.forEach(player => {
        const playerCard: HTMLDivElement = document.createElement('div');;
        playerCard.classList.add('teamPlayer');
        const playerName: HTMLHeadingElement = document.createElement('h4');
        playerName.textContent = player.firstName;
        const playerLastName: HTMLHeadingElement = document.createElement('h4');
        playerLastName.textContent = player.lastName;
        const playerLink: HTMLAnchorElement = document.createElement('a');
        playerLink.textContent = 'LearnMore';
        playerLink.href = player.googleSearch;
        playerCard.append(playerName, playerLastName, playerLink);
        nbaTeamCard.appendChild(playerCard);
      });
      outputDiv?.appendChild(nbaTeamCard);
    });
  });