import { Router } from "express";
import { subirImagen } from "../controllers/productos.controller.js";
import multer from "multer";

//Sirve para indicar el formato en el cual se va a tratar el archivo
//diskStorage > indicar que el archivo se almacenara en el disco ( de manera permanete)
//memoryStorage >indicara que el archivo se almacenara TEMPORALMENTE en la memoria RAM y luego de un rato se eliminara, esto se usa para poder enviarlo a un almacenamiento de terceros ( S3, cloudinary,fiebase storage, entre otros)
const almacenamiento=multer.diskStorage({
    destination:'src/imagenes',
    filename:(req,archivo,cb)=>{
        cb(null,archivo.originalname);
    },
});

const multerMiddleware=multer({
    storage:almacenamiento,
    limits:{
        // 1byte * 1024 > 1kb * 1024 > 1mb * 1024 > 1gb
        fileSize:5*1024*1024,
    }
});

export const productoRouter=Router();

//any > aceptara todos los archivos y mas de uno
//non > aceptara puro texto ( no aceptara archivos )
//array(nombre_campo, liminte) > aceptara varios archivos definidos mediante un campo (llave) opcionalmente un limite de cuantos archivos queremos recibir
//fields(campos) > acepta una mezcla de archivos especificados por los campos que vamos a recibir
//single(campo) > aceptara un solo archivos mediante ese nombre del campo
productoRouter.post(
    "/subir-imagen",
    multerMiddleware.single("imagen"),
    subirImagen
);






