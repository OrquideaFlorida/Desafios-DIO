//DESAFIO DE CLASSIFICADOR DE NÍVEL O HERÓI
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
//depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo
let heroi = "Capitão Cueca";
let xp = 9890;

if (xp < 1000){
    console.log("O herói de nome " + heroi + " está no nível de Ferro!!!");
}else if (xp >= 1000 && xp <= 2000){
    console.log("O herói de nome " + heroi + " está no nível de Bronze!!!");
}else if (xp > 2000 && xp <= 5000){
    console.log("O herói de nome " + heroi + " está no nível de Prata!!!");
}else if (xp > 5000 && xp <= 7000){
    console.log("O herói de nome " + heroi + " está no nível de Ouro!!!");
}else if (xp > 7000 && xp <= 8000){
    console.log("O herói de nome " + heroi + " está no nível de Platina!!!");
}else if (xp > 8000 && xp <= 9000){
    console.log("O herói de nome " + heroi + " está no nível de Ascendente!!!");
}else if (xp > 9000 && xp <= 10000){
    console.log("Wowww!!!! O herói de nome " + heroi + " está no nível de Imortal!!!");
}else if (xp > 10000){
    console.log(" Incrivel!!! O herói de nome " + heroi + " está no nível de Radiante!!!");
};

