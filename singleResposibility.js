/* O principio da responsabilidade única é o principio que afirma onde uma classe possui uma funcionalidade única*/

/* GERAR CLIMA */
const CLIMA_PROIBIR_USO = [
    "furacao",
    "ciclone",
    "diluvio",
    "vulcao em erupcao",
];

const LISTA_CLIMA = [
    "ensolarado",
    "chuvoso",
    "nublado",
    "parcialmente nublado",
    "neve",
    "granizo",
    ...CLIMA_PROIBIR_USO
];

const CLIMA_HOJE = LISTA_CLIMA[Math.floor(Math.random()*LISTA_CLIMA.length)];

class Log{
    // um método estático é quando um método pode ser executado mesmo a classe não sendo instânciada
     static logarMovimento(modelo){
         console.log(`O carro ${modelo} está andando`);
     }
     // um método estático é quando um método pode ser executado mesmo a classe não sendo instânciada
     static logarErro(mensagem){
         console.error(mensagem)
     } 
 }
 

class Carro{
    constructor(modelo, km){
       this.modelo = modelo;
       this.km = km;       
    }

    movimentar(distanciaKm){
       if(CLIMA_PROIBIR_USO.find(clima => clima == CLIMA_HOJE)){
        Log.logarErro(`Esse carro ${this.modelo} não pode andar devido ao clima: ${CLIMA_HOJE}`);
        return;
       }
       this.km += distanciaKm;
       Log.logarMovimento(this.modelo);
    }  

} 


const carro1 = new Carro("Ferrari", 0);
carro1.movimentar(1);
