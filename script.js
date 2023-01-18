let s = 4 /* cette variable va définir le nombre de ligne à chaque étage, elle s'acrémente de 1 à chaque étage*/

let v = '' /* cette variable contiendra les étoiles, pour former le sapin*/

let c = 0 /* cette variable sert à content le nombre d'étage, afin de l'utiliser pour défenir le nombre d'étoiles en fonction des étoiles. */

const QUESTION = 3 /* cette variable définie le nombre d'étages */


for(let nbrEtage = 0; nbrEtage < QUESTION; nbrEtage++){
    s += 1
    c++;
    for(let nbrline = 1; nbrline < s; nbrline++){
        console.log(v += '*')
        v += '*'
    }
    v = '*'.repeat(c * 2)
}

