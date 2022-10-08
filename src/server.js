import express  from "express";
import dotenv from "dotenv";
import {productoRouter} from "./routes/productos.routes.js"

dotenv.config();

const server=express();
server.use(express.json());


server.use(productoRouter);


const port=process.env.PORT ?? 3000;

server.listen(port,()=>{
    console.log(`Servidor corriendo exitosamente en el puerto ${port}`);
});












