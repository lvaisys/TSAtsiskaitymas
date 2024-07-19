/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
var _a;
(_a = document
    .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (e) {
    e.preventDefault();
    var value = document.querySelector('#meter').valueAsNumber;
    var outputDiv = document.querySelector('#output');
    outputDiv.replaceChildren();
    var centimetrai = value * 100;
    var coliai = value * 39.37;
    var pedos = value * 3.281;
    var mylios = value / 1609;
    var jardai = value * 1.094;
    var centimetraiP = document.createElement('p');
    centimetraiP.textContent = 'Centimetrai (cm): ' + centimetrai;
    var coliaiP = document.createElement('p');
    coliaiP.textContent = 'Coliai (in): ' + coliai;
    var pedosP = document.createElement('p');
    pedosP.textContent = 'Pėdos (ft): ' + pedos;
    var myliosP = document.createElement('p');
    myliosP.textContent = 'Mylios (mi): ' + mylios;
    var jardaiP = document.createElement('p');
    jardaiP.textContent = 'Jardai (yd): ' + jardai;
    outputDiv.append(centimetraiP, coliaiP, pedosP, myliosP, jardaiP);
});
