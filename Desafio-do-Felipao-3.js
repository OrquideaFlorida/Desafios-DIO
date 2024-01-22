//DESAFIO DE CLASSES DE UM JOGO

//Crie uma classe generica que represente um herói de uma aventura e
//deve ter um método chamado atacar

//nome, idade, tipo
//mago - magia
//guerreiro - espada
//monge - artes marciais
//ninja - shuriken

class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    apresentar(){
        console.log(`O nosso herói se chama ${this.nome}, e possui ${this.idade} anos...`);
    }
    atacar(){
        let ataque;

        switch(this.tipo){
            case "mago":
                ataque = 'magia';
                break;

            case "guerreiro":
                ataque = 'espada';
                break;

            case "monge":
                ataque = 'artes marciais';
                break;

            case "ninja":
                ataque = 'shuriken';
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}!!!`);
    }
   
};

const feiticeiro = new Heroi("Gandalf", 200, "mago");
feiticeiro.apresentar();
feiticeiro.atacar();
console.log("----------------------------------------------");

const heroiDeVerdade = new Heroi("Fly", 12, "guerreiro");
heroiDeVerdade.apresentar();
heroiDeVerdade.atacar();
console.log("-----------------------------------------------");

const budista = new Heroi("Cohen", 42, "monge");
budista.apresentar();
budista.atacar();
console.log("-----------------------------------------------");

const shadow = new Heroi("Gaiden", 29, "ninja");
shadow.apresentar();
shadow.atacar();
console.log("-----------------------------------------------");


