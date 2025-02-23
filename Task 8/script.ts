/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document
  .querySelector('form')?.addEventListener('change', (e: Event) => {
    e.preventDefault();

    const value: number = (document.querySelector('#meter') as HTMLInputElement).valueAsNumber;

    const outputDiv: Element = document.querySelector('#output')!;
    outputDiv.replaceChildren();

    const centimetrai: number = value * 100;
    const coliai: number = value * 39.37;
    const pedos: number = value * 3.281;
    const mylios: number = value / 1609;
    const jardai: number = value * 1.094;

    const centimetraiP: HTMLParagraphElement = document.createElement('p');
    centimetraiP.textContent = 'Centimetrai (cm): ' + centimetrai;
    const coliaiP: HTMLParagraphElement = document.createElement('p');
    coliaiP.textContent = 'Coliai (in): ' + coliai;
    const pedosP: HTMLParagraphElement = document.createElement('p');
    pedosP.textContent = 'Pėdos (ft): ' + pedos;
    const myliosP: HTMLParagraphElement = document.createElement('p');
    myliosP.textContent = 'Mylios (mi): ' + mylios;
    const jardaiP: HTMLParagraphElement = document.createElement('p');
    jardaiP.textContent = 'Jardai (yd): ' + jardai;
    outputDiv.append(centimetraiP, coliaiP, pedosP, myliosP, jardaiP);
  })