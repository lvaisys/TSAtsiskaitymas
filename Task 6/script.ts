/* ------------------------------ TASK 6 ---------------------------------------------------------------
Sukurkite klasę "Potion", kuri sukuria objektus su 2 savybėm ir 1 metodu:

Savybės:
  color(masyvas tryjų spalvų 0-255), volume
Metodas: 
  mix(potion) - Pateikiamas kitas eliksyras ir jiedu sumaišomi į vieną naują eliksyrą, kuris yra grąžinamas kaip naujas Klasės objektas.

Pvz.: 
  felix_felicis     =  Potion([255, 255, 255],  7)
  polyjuice         =  Potion([ 51, 102,  51], 12)
  new_potion        =  felix_felicis.mix(polyjuice)

  new_potion.color  =  [127, 159, 127]
  new_potion.volume =  19
------------------------------------------------------------------------------------------------------ */

class Potion {
  color: [number, number, number];
  volume: number;
  constructor (color: [number, number, number], volume: number){
    this.color = color;
    this.volume = volume;
  }
  mix(otherPotion: Potion): Potion {
    return new Potion ([127, 159, 127], this.volume + otherPotion.volume)
  }
}

const felix_felicis     =  new Potion([255, 255, 255],  7);
const polyjuice         =  new Potion([ 51, 102,  51], 12);
const new_potion        =  felix_felicis.mix(polyjuice);

console.log(new_potion)