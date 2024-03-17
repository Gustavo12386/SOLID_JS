

export default class UserService {
    constructor(logger) { // injetando o objeto já instanciado
      this.logger = logger;
    }
  
    getAll() {
      try {
        this.logger.log("Buscando todos os usuários...");
      } catch (error) {
        this.logger.log(`Ocorreu um erro: ${error?.message}`);
      }
    }
  }



