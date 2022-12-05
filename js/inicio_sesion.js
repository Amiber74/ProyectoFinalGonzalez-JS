const contenedor_sesion = document.querySelector(".Inicio_sesion")
const email_sesion = document.querySelector("#email-sesion")
const contraseña_sesion = document.querySelector("#contraseña-sesion")
const boton_sesion = document.querySelector("#boton-sesion")

const trabajadores_registrados = JSON.parse(localStorage.getItem("Registrados"))
console.log(trabajadores_registrados)


boton_sesion.addEventListener("click", (e)=>{
    e.preventDefault()
    for (const dato of trabajadores_registrados){
        if (dato.email===email_sesion.value && dato.contraseña===contraseña_sesion.value){
            console.log("good")
        }
    }
})