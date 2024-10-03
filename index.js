const express = require('express');
const app = express();
const puerto = 3000;

app.get('/usuario',function(req, res){
    res.json({
        primernombre: "Jaime",
        segundonombre: "Jeovanny",
        primerapellido: "Cortez",
        segundoapellido: "Flores",
        fechanacimiento: "1985-09-02",
        estadofamiliar: "Casado",
        residencia: "Colonia X, calle Y, casa 666",
        profesion: "Ingeniero en Ciencias de la Computación",
        estatura: 1.67,
        peso: 175.5,
        colorpiel: "trigueño",
        colorojos: "cafe",
        colocabello: "negro",
        ultimosempleos:[{
            empresa:"Hidroexpo S.A. de C.V.",
            dependencia: "Departamento de Informática",
            direccion: "Cantón A, Calle B, La Libertad",
            cargo: "Coordinador de tecnología",
            desde: "2009-01-01",
            hasta: "2009-12-31"
        },{
            empresa: "Presidencia de la República",
            dependencia: "Secretaría privada",
            direccion: "Calle A, pasaje B, San Salvador",
            cargo: "Desarrollador de sistemas",
            desde: "2011-01-01",
            hasta: "2011-12-31"
        }]
    });
});


app.get('/genero',function(req,res){
    res.json([
        {
            id: 1,
            genero:"Masculino"
        },{
            id: 2,
            genero: "Femenino"
        }
    ]);
});


app.get('/tipo_documento',function(req,res){
    res.json([{
        id:1,
        tipo_documento: "DUI"
    },{
        id:2,
        tipo_documento: "NIT"
    },{
        id:3,
        tipo_documento: "ISSS"
    },{
        id:4,
        tipo_documento: "PASAPORTE"
    }]);
});


app.get('/departamentos',function(req,res){
    res.json([{
        id:1,
        departamento: "Ahuachapán"
    },{
        id: 2,
        departamento: "Santa Ana"
    },{
        id: 3,
        departamento: "Sonsonate"
    },{
        id: 4,
        departamento: "La Libertad"
    },{
        id: 5,
        departamento: "San Salvador"
    },{
        id: 6,
        departamento: "Chalatenango"
    },{
        id: 7,
        departamento: "Cuscatlán"
    },{
        id: 8,
        departamento: "Cabañas"
    },{
        id: 9,
        departamento: "La Paz"
    },{
        id: 10,
        departamento: "San Vicente"
    },{
        id: 11,
        departamento: "Usulután"
    },{
        id: 12,
        departamento: "San Miguel"
    },{
        id: 13,
        departamento: "Morazán"
    },{
        id: 14,
        departamento: "La Unión"
    }]);
});



app.get('/municipios',function(req,res){
    res.json([
        {
            id:1,
            municipio: "Ahuachapan Centro"
        },{
            id:2,
            municipio: "Ahuachapán Norte"
        },{
            id:3,
            municipio: "Santa Ana Norte"
        },{
            id:4,
            municipio: "Santa Ana Sur"
        },{
            id:5,
            municipio: "Sonsonate Este"
        },{
            id:6,
            municipio: "Sonsonate Oeste"
        },{
            id:7,
            municipio: "La Libertad Sur"
        },{
            id:8,
            municipio: "La Libertad Costa"
        },{
            id:9,
            municipio: "San Salvador Centro"
        },{
            id:10,
            municipio: "San Salvador Sur"
        },{
            id:11,
            municipio: "Chalatenango Sur"
        },{
            id:12,
            municipio: "Chalatenango Centro"
        },{
            id:13,
            municipio: "Cuscatlán Sur"
        },{
            id:14,
            municipio: "Cuscatlán Norte"
        },{
            id:15,
            municipio: "Cabañas Este"
        },{
            id:16,
            municipio: "Cabañas Oeste"
        },{
            id:17,
            municipio: "La Paz Oeste"
        },{
            id:18,
            municipio: "La Paz Centro"
        },{
            id:19,
            municipio: "San Vicente Sur"
        },{
            id:20,
            municipio: "San Vicente Norte"
        },{
            id:21,
            municipio: "Usulután Norte"
        },{
            id:22,
            municipio: "Usulután Este"
        },{
            id:23,
            municipio: "San Miguel Norte"
        },{
            id:24,
            municipio: "San Miguel Oeste"
        },{
            id:25,
            municipio: "Morazán Norte"
        },{
            id:26,
            municipio: "Morazán Sur"
        },{
            id:27,
            municipio: "La Unión Norte"
        },{
            id:28,
            municipio: "La Unión Sur"
        },
    ]);
});

app.get('/sumar',function(req, res){

    let resultado = parseFloat(req.query.campo1) + parseFloat(req.query.campo2);

    res.json({
        igual_a: resultado
    });
});

app.listen(puerto,function(req,res){
    console.log("Servidor en ejecución en el puerto "+puerto);
});