import { Injectable } from "@nestjs/common";
/**
 * con este decorador puedo inyectar la clase en otros servicios
 */
import { InjectRepository } from "@nestjs/typeorm";
/**
 * El decorador Me da la posibilidad de inyectar el repositorio para poder trabajar con el en la clase
 */
import { Terms } from "../entities/term.entity";


