import express from "express";

const servidor=express()

//Configurando la forma en la cual puede enviar informacion por el body
//user() > recibe middleware(intermediario entre el contrlador final y la peticion)
//express.json() > middleware que convertira la informacion entrante del body y la transformara a un json legible mediante req.body
servidor.use(express.json());

const PUERTO=5000;

servidor.get('/',(req, res)=>{
    res.json({
        message:"Bienvenido a mi primera API de express y algo mas",
    })
})

servidor.post("/registro",(req,res)=>{
    //Req => La informacion que me llega del usuario
    //Res => La informacion que voy a enviar como respuesta
    console.log(req.body);

    //Es IMPORTANTE siempre devolver alguna respuesta
    //Recorda no usar el RES mas de una vez
    return res.json({          //res.status(200).json si queremos poner dferentes status
        message:'Registro creado exitosamente',
    })

    //No se puede utilizar el res mas de una vez
    //Si se utiliza en return ningun codigo siquiente sera accesible 
    //console.log("Yo funcione despues de enviar la respuesta xd")
})

servidor.put("/actualizar-usuario/:id",(req,res)=>{
    console.log(req.params);
    //Para acceder a los parametros seteados en la URL usamos req.params y siempre llegaran en string
    res.json({
        message:"Usuario acualizado exitosamente",
    })
})

servidor.get('/buscar-usuario',(req,res)=>{     //DELETE
    //Para acceder a los query params se hace mediante el metodo o propiedad req.query
    console.log(req.query);
    res.json({
        message:'No se encontro el usuario a buscar',
    })
})

//------------------------------------------------------------------
//Si queremos usar el mismo endpoint para diferentes metodos HTTP todo en uno (GET,POST,PUT,DELETE,ETC)

servidor
    .route("/productos")
    .get((req,res)=>{
        res.json({
            message:"Soy el get",
        })
    })
    .post((req,res)=>{
        res.json({
            message:"Soy el get",
        })
    })
    .put((req,res)=>{
        res.json({
            message:"Soy el put",
        })
    })
    .delete((req,res)=>{
        res.json({
            message:"Soy el delete",
        })
    })



//------------------------------------------------------------------
//Esto es para que el puerto se escuche al final despues de leer todas las posibles consultas para que no se pare 
servidor.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo exitosamente en el ${PUERTO}`);
});













