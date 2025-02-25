/**
 * Este archivo simplemente describe cómo deben lucir los datos en la base de datos, qué tipo de información guardará cada dato
 * (como el nombre del término, la definición, etc.) y cómo se relacionan entre sí.
 */

import {Entity,PrimaryGeneratedColumn,Column } from 'typeorm' 
/**
 * 
 */
import { IsString,Length,IsOptional } from 'class-validator';

Entity('Terms') // Esto significa que esta clase representa una tabla en la base de datos llamada Terms
export class Terms{ // aqui estamos creando la identidad

    @PrimaryGeneratedColumn() // esto indica que la columna "id" es la clave primaria y sera autogenerada 
    id: number;

    @Column() // esta columna se llamara "term" y guardara el nombre del termino 
    @IsString()
    @Length(3,30) //Longitud minima y maxima del termino
    term: string;

    @Column('text')
    @IsString()
    @Length(5,1000)
    definition: string;

    @Column({nullable: true}) // Especifica que la columna puede tener valores nulos
    @IsOptional()
    @IsString()
    category:string;


}


