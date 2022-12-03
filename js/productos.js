const prod = [
    {nombre:"Producto 1",precio:100,id:1,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 2",precio:200,id:2,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 3",precio:300,id:3,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 4",precio:400,id:4,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 5",precio:500,id:5,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 6",precio:600,id:6,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 7",precio:700,id:7,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 8",precio:800,id:8,img:"url",desc:"descripcion corta"},
    {nombre:"Producto 9",precio:900,id:9,img:"url",desc:"descripcion corta"},
]

localStorage.setItem("Productos",JSON.stringify(prod))