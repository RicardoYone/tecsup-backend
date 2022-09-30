import conexion from '../prisma.js';

// import {} from '@prisma/client';

export const crearCandidato=async(req,res)=>{
    const data = req.body;  //data > {nombre:"XXX", apellido:"YYY"}

    try{
        //Con estos await hacemos la validacion de que existan esos partidosPoliticos y region respectivamente.
        await conexion.partidoPolitico.findUniqueOrThrow({
            where:{id:data.partidoPoliticoId},
        });

        await conexion.region.findFirstOrThrow({
            where:{id:data.regionId},
        });

        const resultado=await conexion.candidato.create({
            data,
        });

        return res.status(201).json(resultado);

    }catch(error){
        console.log("mensaje",error.message);
        console.log("nombre",error.name);

        if(error.name==="NotFoundError"){
            return res.status(400).json({
                message:"Error al crear el candidato",
                content:error.message
            });
        }
    }

    return res.status(400).json({
        message:"Error desconocido",
    })

};














