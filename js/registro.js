const contenedor = document.querySelector(".Registrarse")
const boton_registro = document.querySelector("#boton-registro")

//Values
const nombre = document.querySelector("#nombre-registro")
const email = document.querySelector ("#email-registro")
const dni = document.querySelector ("#DNI-registro")
const contraseña = document.querySelector ("#contraseña-registro")

const dni_aceptados = JSON.parse(localStorage.getItem("DNI"))
const lista_registrados = JSON.parse(localStorage.getItem("Registrados"))

boton_registro.addEventListener("click", (e)=>{
    e.preventDefault()
    let estado =false

    for (const d_t of dni_aceptados) {

        if (d_t.nombre === nombre.value && d_t.dni === parseInt(dni.value)){
            console.log("true")
            estado=true
        }else{
            console.log("false")
        }

    }
    if (estado){
        function Trabajador (nombre,email,dni,contraseña) {
            this.nombre=nombre;
            this.email=email;
            this.dni=dni;
            this.contraseña=contraseña;
        }
        

        lista_registrados.push(new Trabajador (nombre.value,email.value,dni.value,contraseña.value))

        localStorage.setItem("Registrados", JSON.stringify(lista_registrados))
        //Aca va todo el proceso
    }
})
