// const Registrados =[
//     {nombre:"facundo", email:"rojas.facundo2002@gmail.com", contraseña:"asd", dni:"44268002"}
// ]


// const dni_registro = [
//     {dni:12378945, nombre: "kevin"},
//     {dni:78965321, nombre: "mario"},
//     {dni:36974128, nombre: "hugo"},
//     {dni:14826579, nombre: "facundo"},
//     {dni:74125963, nombre:"cris"},
// ]
// localStorage.setItem("DNI",JSON.stringify(dni_registro))

const dni_LS = JSON.parse(localStorage.getItem("DNI"))
let dni=[]
if(dni!==null){
    dni=dni_LS || localStorage.setItem("DNI",JSON.stringify(dni))
}

const Registrados_LS = JSON.parse(localStorage.getItem("Registrados"))
let Registrados =[]
if (Registrados !== null){
    Registrados = Registrados_LS || localStorage.setItem("Registrados",JSON.stringify(Registrados))
}

