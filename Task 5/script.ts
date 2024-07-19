/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */


function resolveGame(player1: string, player2: string): string {
  if (player2 === "rock" || player2 === "paper" || player2 === "scissors")
    switch (player1) {
      case player2:
        return 'Draw!'
      case "rock":
        return player2 === "paper" ? "Player 2 won!" : "Player 1 won!"
      case "paper":
        return player2 === "scissors" ? "Player 2 won!" : "Player 1 won!"
      case "scissors":
        return player2 === "rock" ? "Player 2 won!" : "Player 1 won!"
      default:
        break;
    }
  return "Bad input"
}

console.log(resolveGame("scissors", "paper"));
console.log(resolveGame("scissors", "rock"));
console.log(resolveGame("paper", "rock"));
console.log(resolveGame("paper", "paper"));