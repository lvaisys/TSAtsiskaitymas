/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */

function someFunction(par: string): number  {
  let oneAddedPreviously = false;
  let result = '';
  for (let i:number = 0; i < par.length; i++) {
    result += oneAddedPreviously ? '0' : '1';
    oneAddedPreviously = !oneAddedPreviously;
  }
  return Number(result);
}

console.log(someFunction("tralala"));
console.log(someFunction("tralal"));
console.log(someFunction("a"));