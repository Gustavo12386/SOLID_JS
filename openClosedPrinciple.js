/* O prinicipio do aberto e fechado afirma que é possível criar classes filhas com funcionalidades diferentes
herdando e sem precisar alterar a classe pai*/

class Transporte{
    constructor(transportador, volume){
       this.volume = volume
       this.transportador = transportador
    }   

   getMultiplicador(){
     return 1;
   }
   
   calculaPreco(){
     return this.getMultiplicador() * this.volume;
   }

}

class Navio extends Transporte
{
   constructor(volume){
     super("Navio", volume)
   }

   getMultiplicador(){
    return 300;
  }
} 

class Caminhao extends Transporte
{
   constructor(volume){
     super("Caminhao", volume)
   }

   getMultiplicador(){
    return 500;
  }
} 



//const transporte1 = new Transporte("Caminhao", 10);
//const transporte2 = new Transporte("Navio", 10);
const caminhao = new Caminhao(10);
const navio = new Navio(10);
console.log(caminhao.calculaPreco());
console.log(navio.calculaPreco());



