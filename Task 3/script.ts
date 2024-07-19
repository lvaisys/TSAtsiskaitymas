/* ------------------------------ TASK 3 -----------------------------------
Perpanaudokite aprašytą type'ą, kad sukurti naujus tipus, kuriuos priskyrus kintamiesiems, visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą. Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.

Pastaba: Aprašyto tipo NEKEISTI
-------------------------------------------------------------------------- */

type TipasNaudoti = {
  marke: string,
  modelis: string,
  metai: number,
  spalva: string,
  kilometrazas: number
};
type TransportoPriemone = {
  [Key in keyof TipasNaudoti]?: TipasNaudoti[Key]
}
const dviratis: TransportoPriemone = {
  metai: 1999,
  spalva: ''
};
const naujaMasina: TransportoPriemone = {
  marke: '',
  modelis: '',
  metai: 2025,
  spalva: ''
};
type IstorinėTransportoPriemone = TipasNaudoti & {
  surudyjesDugnas: boolean
}
const senaMasina: IstorinėTransportoPriemone = {
  marke: '',
  modelis: '',
  metai: 2025,
  spalva: '',
  kilometrazas: 999999,
  surudyjesDugnas: true
};