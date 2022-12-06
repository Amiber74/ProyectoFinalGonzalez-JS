
// const dni_registro = [
//     {dni:12378945, nombre: "kevin"},
//     {dni:78965321, nombre: "Mario"},
//     {dni:36974128, nombre: "hugo"},
//     {dni:14826579, nombre: "facundo"},
//     {dni:74125963, nombre:"cris"},
// ]
const dni_LS = JSON.parse(localStorage.getItem("DNI"))
let dni=[]
if(dni!==null){
    dni=dni_LS || []
}

const Registrados_LS = JSON.parse(localStorage.getItem("Registrados"))
let Registrados =[]
if (Registrados !== null){
    Registrados = Registrados_LS || []
}

// localStorage.setItem("DNI", JSON.stringify(dni_registro))

// localStorage.setItem("Registrados", JSON.stringify(Registrados))
