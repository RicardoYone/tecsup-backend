import mercadopago from "mercadopago";

//Deberiamos de hacerlo desde el pedido creado en la base de datos, osea, crear un endpoint para agregar el producto a un pedido de un usuario
//agregar -producto
//BODY:{
  // productoID:1
  // cantidad:1
// }

//Validar si el usuario tiene un pedido ya creado agregar este detalle a ese pedido, caso contrario, crearemos el pedido de ese usuario

export const crearPreferencia = (req,res)=>{
  mercadopago.preferences.create({
    items:[
      {
        id:1, //El ID del producto
        title:"Pera de agua", //El nombre del producto
        quantity:5,
        currency_id:"USD",
        unit_price:10.5 //Precio del detalle del pedido
      },
    ],
    payer:{
      name:"Ricardo",
      surname:"Leon",
      email:"ricardo@hotmail.com",
      phone:{
        area_code:"04002",
        number:974207075,
      },
    },
  });
  console.log(preferencia.body.init_point);

  return res.json({
    content:preferencia,
  });

};