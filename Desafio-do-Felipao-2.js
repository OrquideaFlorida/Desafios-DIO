//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, 
//o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

function rancking(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    let nivel
    if (saldo < 10){
            nivel = "Ferro";
        }else if (saldo >= 10 && saldo <= 20){
            nivel = "Bronze";
        }else if (saldo > 20 && saldo <= 50){
            nivel = "Prata";
        }else if (saldo > 50 && saldo <= 80){
            nivel = "Ouro";
        }else if (saldo > 80 && saldo <= 90){
            nivel = "Diamante";
        }else if (saldo > 90 && saldo <= 100){
            nivel = "Lendario";
        }else{
            nivel = "Imortal";
        }
    const mensagem = `O herói que está no saldo de ${saldo} está no nivel de ${nivel}`;
    console.log(mensagem);
}

rancking(100, 10);


// let vitorias = 100;
// let derrotas = 10;

// let saldo = vitorias - derrotas;

// if (saldo < 10){
//     console.log(`O herói está no nível de Ferro!!!`);
// }else if (saldo >= 10 && saldo <= 20){
//     console.log("O herói está no nível de Bronze!!!");
// }else if (saldo > 20 && saldo <= 50){
//     console.log("O herói está no nível de Prata!!!");
// }else if (saldo > 50 && saldo <= 80){
//     console.log("O herói está no nível de Ouro!!!");
// }else if (saldo > 80 && saldo <= 90){
//     console.log("O herói está no nível de Diamante!!!");
// }else if (saldo > 90 && saldo <= 100){
//     console.log("O herói está no nível de Lendário!!!");
// }else if (saldo > 100){
//     console.log("Wowww!!!! O herói está no nível de Imortal!!!");
// }