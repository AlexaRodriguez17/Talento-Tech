const express=require("express");
const app=express(); //instancia creada
app.use(express.json());
const port=3100
app.listen(port, ()=>{
    console.log("Servidor escuchandose en puerto 3100")
});
const hoteles=[
    {
        nombre: "Hilton",
        ubicación:"Santa Marta",
        precio:150000
    },
    {
        nombre: "Radison",
        ubicación:"Cartagena",
        precio:200000
    },
    {
        nombre: "Riu",
        ubicación:"Panamá",
        precio:250000
    },
    {
        nombre: "Tequendama",
        ubicación:"Bogotá",
        precio:230000
    },
    {
        nombre: "hotel Dann",
        ubicación:"Cartagena",
        precio:130000
    }
]
app.get("/api/mejor-hotel",(req,res)=>{
    const{ubicación,precio}=req.query;
    const resultado=hoteles.filter(hotel=>hotel.ubicación==="Cartagena" && hotel.precio<=150000);
    res.json(resultado)
});


