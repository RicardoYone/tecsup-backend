import prisma from "@prisma/client";

//Es crear una sola instancia para todo el proyecto
//Tendremos como maximo una conexion a la DB y con esto evitamos tener un cuello de botella con tantas conexiones abiertas
//A veces las BD no soportan muchas conexiones por lo que si no sabemos controlar, se saturaran y se caera nuestra BD
//Patron Singleton > Patron de diseño de arch que sirve para indicar que como maximo tendremos por toda la aplicacion una sola instancia (creacion de una clace)

export default new prisma.PrismaClient();

//Para exportar podemos hacerlo de dos maneras;
//Para exportar es:
//export const x=10; Aca estamores indicando que solo exportamos la variable X 
//Y para la importancia sera: 
//import {x} from '...'

//Si queremos exportar un valor por defecto ( no hacer la destructuracion en la importancion)
//NOTA: Solamente puede haber una exportancion por defecto;
// export default 10

//Para la importacion del valor por defecto 
// import palabra from '...'

//Si solamente vamos a exportar una sola funcionabilidad se recomienda que sea por defecto (DEFAULT)pero por el lado contrario, vmaos a exportar varias variables,metodos,funciones,entre otros, se recomienda la exportacion normal;













