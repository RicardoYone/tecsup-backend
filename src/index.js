import express from "express";
import dotenv from "dotenv";
import {candidatosRouter} from './routes/candidatos.routes.js';
//Carga el archivo .env a las variables de etnrono para poder utilizarlas, Debe ir lo mas arriba posible en el probyecto, sobretodo en el archivo principal
dotenv.config();

const server=express();
const port=process.env.PORT ?? 5000;    //Es un operador de nulidad y lo que si el valor de la izquierda es NULO o INDEFINIDO entonces procedera a tomar el valor de la derecha

//Aceptar el body en formato JSON
server.use(express.json());

//Agregamos al middleware la informacion de las rutas del candidato
server.use(candidatosRouter)


server.listen(port,()=>{
    console.log(`Servidor corriendo exitosamente en el puerto ${port}`);
})