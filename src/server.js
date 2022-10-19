import express from "express";
import dotenv from "dotenv";
import { productoRouter } from "./routes/productos.routes.js";
import { pasarelaRouter } from "./routes/pasarela.router.js";
import mercadopago from "mercadopago";

dotenv.config();

mercadopago.configure({
  integrator_id: "dev_24c65fb163bf11ea96500242ac130004",
  access_token:
    "APP_USR-5803173797352206-050918-e3faf048a99e583771de8f2d1fb47065-1120797873",
});

const server = express();
server.use(express.json());

server.use(productoRouter);
server.use(pasarelaRouter);

const port = process.env.PORT ?? 3000;

server.listen(port, () => {
  console.log(`Servidor corriendo exitosamente en el puerto ${port}`);
});
