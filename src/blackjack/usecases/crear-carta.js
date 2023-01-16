/**
 * Dibuja carta en pantalla
 * @param {HTMLElement} divJoC cartas en pantalla
 * @param {string} carta carta que saca del deck 
 */
export const crearCarta = (divJoC,carta) => {
const imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
imgCarta.classList.add('carta');
divJoC.append( imgCarta );
}