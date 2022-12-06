const contenedor = document.querySelector(".Registrarse")
const boton_registro = document.querySelector("#boton-registro")

//values

const nombre = document.querySelector("#nombre-registro")
const email = document.querySelector("#email-registro")
const Dni = document.querySelector("#DNI-registro")
const contraseña = document.querySelector("#contraseña-registro")

const dni_aceptados = JSON.parse(localStorage.getItem("DNI"))
const lista_registrados = JSON.parse(localStorage.getItem("Registrados"))

boton_registro.addEventListener("click", (e)=>{
    e.preventDefault()
    let estado = false

    for (const d_t of dni_aceptados){

        if (d_t.nombre === nombre.value && d_t.dni === parseInt(Dni.value)){
            estado=true
        }
    }
    if(estado){
        function Trabajador(nombre,email,dni,contraseña){
            this.nombre=nombre;
            this.email=email;
            this.dni=dni;
            this.contraseña=contraseña;

        }
        lista_registrados.push(new Trabajador (nombre.value,email.value,dni.value,contraseña.value))

        localStorage.setItem("Registrados", JSON.stringify(lista_registrados))
    } else {
        console.log("error")
        Swal.fire({
            icon:'error',
            iconColor:'rgb(40, 11, 51)',
            title:'<strong> Registro Fallido</strong>',
            text:'Su registro fallo debido a que no es un trabajador o debido a que su DNI y nombre no fueron registrados aun en el sistema.',
            backdrop:'rgba(80, 80, 80, 0.775)',
            footer:'<a href="../index.html">Volver al inicio</a>'
        })
    }

})








