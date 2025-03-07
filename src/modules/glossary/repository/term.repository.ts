
import { Injectable} from "@nestjs/common";
/**
 *  Es un decorador de NestJS que marca esta clase como un servicio que puede ser inyectado en otras clases.
 */
import { InjectRepository } from "@nestjs/typeorm";
/**
 * El decorador Me da la posibilidad de inyectar el repositorio para poder trabajar con el en la clase
 */
import { Repository } from "typeorm";
/**
 * Me permite realizar operaciones basicas como crear,leer,actualizar y eliminar
 */
import { Terms } from "../entities/term.entity";

@Injectable()
export class TermRespository{
    constructor(
        @InjectRepository(Terms) // inyecto el repositorio 
        private termRepository: Repository<Terms> // Propiedad privada llammada termRepository que es un Repositorio para trabajar específicamente
        //  con la entidad Terms
    ){}

    


}
