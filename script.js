let s = 4;
let v = ''; 
let c = 0 ;

const QUESTION = 3;


for(let nbrEtage = 0; nbrEtage < QUESTION; nbrEtage++){
    s += 1;
    c++;
    for(let nbrline = 1; nbrline < s; nbrline++){
        console.log(v += '*');
        v += '*';
    }
    v = '*'.repeat(c * 2);
}

