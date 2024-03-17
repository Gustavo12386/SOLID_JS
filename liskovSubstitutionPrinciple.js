/* O principio se Liskov afirma que cada classe filhas derivada seja substituivel pela classe pai */

class AveQueVoa {
    voar() {
      console.log("Posso voar");
    }
  }
  
  class AveQueNada {
    nadar() {
      console.log("Posso nadar");
    }
  }
  
  class Pato extends AveQueVoa {
    barulhoDePato() {
      console.log("Quack Quack");
    }
  }
  
  class Pinguim extends AveQueNada {
    bargulhoDePiguim() {
      console.log("Raaa Raaa");
    }
  }
  
  function fazerAveVoar(ave) {
    ave.voar();
  }
  function fazerAveNadar(ave) {
    ave.nadar();
  }
  
  //const pato = new Pato(); -> também pode ser instanciado dessa forma
  const pato = new AveQueVoa();
  //const pinguim = new Pinguim(); -> também pode ser instanciado dessa forma
  const pinguim = new AveQueNada();
  
  fazerAveVoar(pato);
  fazerAveNadar(pinguim);


