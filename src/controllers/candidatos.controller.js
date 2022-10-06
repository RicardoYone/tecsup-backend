import conexion from '../prisma.js';

// import {} from '@prisma/client';

export const crearCandidato=async(req,res)=>{
    const data = req.body;  //data > {nombre:"XXX", apellido:"YYY"}

    try{
        //Con estos await hacemos la validacion de que existan esos partidosPoliticos y region respectivamente.
        const partidoPolitico= await conexion.partidoPolitico.findUniqueOrThrow({
            where:{id:data.partidoPoliticoId},
            select:{
                nombre:true,
            }
        });

        //SELECT nombre FROM regiones WHERE id=...;
        const region=await conexion.region.findFirstOrThrow({
            where:{id:data.regionId},
            select:{
                nombre:true,
            }
        });

        //SELECT * FROM candidato WHERE partido_politico_id=... AND region_id=...; LIMIT 1;
        const candidato = await conexion.candidato.findFirst({
            where:{
                partidoPoliticoId:data.partidoPoliticoId,
                regionId:data.regionId,
            },
        });

        if(candidato!==null){
            throw new Error(`El candidato por el partido ${partidoPolitico.nombre} por la region ${region.nombre} ya existe`)
        }


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

        return res.status(400).json({
            message:"Error desconocido",
            content:error.message
        })
    }

    
};

export const listarCandidatos=async(req,res)=>{
    const{regionId,partidoPoliticoId}=req.query; //Este sirve para pasarle los parametros de query y string ?nombre?'Luis&region=Arequipa&apellido=Martines 

    let where={};

    if(regionId){
        console.log("hay regionId");
        where={...where,regionId: parseInt(regionId)};
    }

    if(partidoPoliticoId){
        console.log("Hay partidoPoliticoId");
        where={...where,partidoPoliticoId: +partidoPoliticoId};
    }

    const candidatos=await conexion.candidato.findMany({
        where,
    });

    return res.json({
        candidatos,
    })
};












