import express from "express";
import morgan from "morgan";

const servidor=express();
const PORT=5000;

servidor.use(express.json());
//https://expressjs.com/en/resources/middleware/morgan.html#predefined-formats
servidor.use(morgan("dev"));

const alumnos = [
    {
      nombre: "Eduardo",
      apellido: "de Rivero",
      correo: "ederiveroman@gmail.com",
    },
    {
      nombre: "Ricardo",
      apellido: "Yoné",
      correo: "ryone@gmail.com",
    },
    {
      nombre: "Flavio",
      apellido: "Rios",
      correo: "frios@gmail.com",
    },
    {
      nombre: "Claudia",
      apellido: "Vargas",
      correo: "cvargas@gmail.com",
    },
    {
      nombre: "Salvador",
      apellido: "Choque",
      correo: "schoque@gmail.com",
    },
];

// 1.- Crear un endpoint / reigstro que sirva para registrar un nuevo usuario, el correo no debe estar repetido(pueden utilizar el metodo filter() de los arreglos) si estan repetidos retornar un mensaje "Usuario ya existe" con un codigo de respuesta HTTP 400 (BAD REQUEST), caso contrario retornar " usuario creado exitosamente " con un codigo 201(CREATED)

servidor.post("/registro",(req,res)=>{
    const data=req.body //Traigo todos los parametros

    const alumnoExistente=alumnos.filter(valor=>{
        return valor.correo===data.correo    
    })

    if(alumnoExistente.length>0){
        res.status(400).json({
            message:"Usuario ya existe",
        })
    }else{
        alumnos.push(data);
        res.status(201).json({
            message:" usuario creado exitosamente ",
        })
    }
    
})

// 2. Crear un endpoint /buscar (GET) que buscara los alumnos segun su nombre y/o apellido
// /buscar?nombre=Eduardo
// /buscar?apellido=Vargas
// /buscar?nombre=Salvador&apellido=Choque
// PISTA: Volver a usar el filter

servidor.get('/buscar',(req,res)=>{
    const {nombre,apellido}=req.query;

    const data=alumnos.filter(alumno=>{
        if(nombre){
            if(apellido){
                return alumno.nombre===nombre && alumno.apellido===apellido;
            }else{
                return alumno.nombre===nombre;
            }
        }
        if(apellido){
            return alumnos.apellido===apellido;
        }
        return true;
    });

    res.json({
        message:"El resultado es",
        content:data,
    })
})

// servidor.get('/buscar',(req,res)=>{
//     const data=req.body

//     const existe=alumnos.filter(valor=>{
//         return valor.nombre===data.nombre || valor.apellido===data.apellido;
//     })

//     if(existe.length>0){
//         res.json({
//             message:"usuario encontrado"
//         })
//     }else{
//         res.json({
//             message:"usuario no existe"
//         })
//     }

    
// })


//-------------------------------------------------------
servidor.listen(PORT, ()=>{
    console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`)
})












