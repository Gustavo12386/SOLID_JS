/* É um pricipio que evita a implementação de comportamentos
que não serão utilizados */

interface Veiculo {
    getStatus(combustivel: number): string;
  }
  
  interface VeiculoTerrestre {
    rodas: number;
    tipoDirecao: string;
    andar(): void;
  }
  
  interface VeiculoAereo {
    numeroPiloto: number;
    voar(): void;
  }
  
  class Carro implements Veiculo, VeiculoTerrestre {
    rodas: number;
    tipoDirecao: string;
    constructor(rodas: number, tipoDirecao: string) {
      this.rodas = rodas;
      this.tipoDirecao = tipoDirecao;
    }
  
    getStatus(combustivel: number) {
      return combustivel > 5 ? "OK" : "ABASTECER";
    }
    andar() {
      console.log("andando!");
    }
  }
  
  
  class Helicoptero implements Veiculo, VeiculoAereo {
    numeroPiloto: number;
    constructor(numeroPilo: number) {
      this.numeroPiloto = numeroPilo;
    }
  
    getStatus(combustivel: number) {
      return combustivel > 50 ? "OK" : "ABASTECER";
    }
    voar() {
      console.log("voando!");
    }
  }
  
  
  const carro = new Carro(4, "hidraulica");
  console.log(carro.getStatus(100));
  console.log(carro.getStatus(4)); 
  const helicoptero = new Helicoptero(2);
  console.log(helicoptero.getStatus(500)); 
  console.log(helicoptero.getStatus(45)); 
