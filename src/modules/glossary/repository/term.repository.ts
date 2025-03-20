
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
        private readonly termRepository: Repository<Terms> // Propiedad privada llamada termRepository que es un Repositorio para trabajar específicamente
        //  con la entidad Terms
    ){}

    // Metodo para crear un nuevo termino en el glosario

    /**
     * 
     * @param term nombre del termino
     * @param definition definicion del termino
     * @param category nombre de la caegoria si hay
     * @returns Una promesa que resuelve al término guardado en la base de datos
     * 
     * Creo una funcion de tipo async asincronico que me permite trabajar con operaciones que puedan tomar tiempo en completarse
     * 
     */

    async createTerm(term: string, definition: string, category: string): Promise<Terms> { // Promete devolver un objeto de tipo Terms
        const newterm = this.termRepository.create({term,definition,category}); // creo el objeto
        return await this.termRepository.save(newterm); // espero a que se cree y guardo
    }

    // Metodo que obtiene todos los terminos de la base de datos.

    async getAllTerm(): Promise<Terms[]>{ // Promete devolver un arreglo de terminos Terms
        return await this.termRepository.find(); // Equivalente a "SELECT * FROM terms" en SQL
    }

    // Metodo que obtiene un termino por ID 

    async getTermById(id:number):Promise<Terms |null>{
        return await this.termRepository.findOne({
            where: {id:id}
        }); // busca un único registro, Devuelve null si no encuentra nada
    }

    // Metodo para actualizar un termino

    async updateTerm(id: number, updateData: Partial<Terms>): Promise<Terms | null> {
        // Buscar el término existente
        const existingTerm = await this.termRepository.findOne({
            where: { id: id }
        });
    
        // Si no existe, devolver null
        if (!existingTerm) {
            return null;
        }
    
        // Esta línea usa el operador de propagación (...) para combinar dos objetos.
        const updatedTerm = { ...existingTerm, // Copia todos los datos originales
             ...updateData }; // Sobreescribe solo la definición
    
        // Guardar y devolver el término actualizado
        return await this.termRepository.save(updatedTerm);
    }

    // Metodo para eliminar un termino por ID

    /**
     * 
     * @param ID termino a eliminar
     * @returns Devuelve true si el termino fue eliminado
     */


    async deleteTerm(id: number): Promise<boolean>{ // la promesa devuelve un boleano por que solo interesa saber si se elimino o no
        const result = await this.termRepository.delete(id);
        return (result.affected ?? 0) > 0; // Si result.affected es null o undefined, usa 0 
        // Devuelve true si el número de registros afectados es mayor que cero, o false si es cero
    }

    







    
      


}
