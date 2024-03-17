/* a injeção de dependências está relacionado ao injetar um objeto já instanciado */

import UserService from "./UserService.mjs";
import Logger from "./Logger.mjs";

const logger = new Logger();
const userService = new UserService(logger);
userService.getAll();