function jogarDados() { 
    const ataque = parseInt(window.document.getElementById('ataque').value);
    const defesa = parseInt(window.document.getElementById('defesa').value);    
    let arrayAtaque = porValoresEmArray(ataque);
    let arrayDefesa = porValoresEmArray(defesa);
    let qntRolagens;

    ataque > defesa ? qntRolagens = ataque : qntRolagens = defesa;

    porValoresEmArray(ataque);
    porValoresEmArray(defesa);

    console.log('Ataque: ' + arrayAtaque);
    console.log('Defesa: ' + arrayDefesa);

    compararAtaqueEDefesa(arrayAtaque, arrayDefesa, qntRolagens)
};

function porValoresEmArray(valor) { 
    let valorOrganizado = [];
    for(let i = 0; i < valor; i++ ) { 
        valorOrganizado.push(Math.floor(Math.random() * 6 + 1));
    }

    valorOrganizado.sort((a, b) => b - a);
    return valorOrganizado;
}

function compararAtaqueEDefesa(arrayAtaque, arrayDefesa, qntRolagens) { 
    let arrayVitoria = [];
    //1 = ataque, 0 = defesa, 2 empate, 3 = undefinied
    for(let i = 0; i < qntRolagens; i++) {        
        if(arrayAtaque[i] > arrayDefesa[i]) { 
            arrayVitoria[i] = 1; 
        } else if (arrayAtaque[i] < arrayDefesa[i]) {
            arrayVitoria[i] = 0; 
        } else if (arrayAtaque[i] == arrayDefesa[i]) {
            arrayVitoria[i] = 2; 
        }
    }

    console.log('Resultado: ' + arrayVitoria);

    resultado(arrayVitoria)
}

function resultado(resultados) { 
    let vitDefesa = 0;
    let vitAtaque = 0;
    let empate = 0;

    for(let i = 0; i < resultados.length; i++) { 
        if(resultados[i] == 0) { 
            vitDefesa = vitDefesa + 1;
        } else if(resultados[i] == 1) { 
            vitAtaque = vitAtaque + 1;
        } else if(resultados[i] == 2){ 
            empate = empate + 1;
        }
    }

    console.log('Defesa: ' + vitDefesa + ' e ataque: ' + vitAtaque + '. Empates: '+empate);

}