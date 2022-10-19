import conexion from "../prisma.js";
import fs from "fs";

export const crearProducto = async (req, res) => {
  const resultado = fs.readdirSync("./src/imagenes");
  //  console.log(__dirname) Se puede utilizar en commonJs module y no en CSMAScript module
  console.log(resultado);
  const { imagen } = req.body;

  //Usando el metodo some de los arreglos validar si existe ese archivo o no existe en la carpeta de imagenes
  const existe = resultado.some((archivo) => archivo === imagen);

  if (existe) {
    const productoCreado = await conexion.producto.create({ data: req.body });
    return res.status(201).json({
      message: "Producto creado exitosamente",
      content: productoCreado,
    });
  } else {
    return res.status(400).json({
      message: "La imagen no existe",
      content: null,
    });
  }
};

export const subirImagen = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.status(201).json({
    message: "Imagen subida exitosamente",
    nombre: req.file.filename,
  });
};
