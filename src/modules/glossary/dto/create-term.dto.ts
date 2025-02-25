import { IsString, IsNotEmpty } from 'class-validator';

// 'class-validator' es una librería que permite validar los datos de manera sencilla en NestJS.
// Es útil para garantizar que los datos enviados desde el cliente sean correctos antes de ser procesados.

export class CreateTermDto {
  /**
   * El campo 'name' representa el nombre del término indígena que se va a crear.
   * @IsString() valida que el valor proporcionado sea de tipo string (cadena de texto).
   * @IsNotEmpty() asegura que el campo no esté vacío. El nombre de un término no puede ser una cadena vacía.
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * El campo 'description' representa la descripción detallada del término en el glosario.
   * @IsString() valida que el valor proporcionado sea de tipo string (cadena de texto).
   * @IsNotEmpty() asegura que el campo no esté vacío. La descripción no puede estar vacía.
   */
  @IsString()
  @IsNotEmpty()
  description: string;

  /**
   * El campo 'category' representa la categoría a la que pertenece el término en el glosario.
   * @IsString() valida que el valor proporcionado sea de tipo string (cadena de texto).
   * Nota: No se ha aplicado @IsNotEmpty() ya que la categoría puede ser opcional dependiendo de la implementación.
   */
  @IsString()
  category: string;
}
