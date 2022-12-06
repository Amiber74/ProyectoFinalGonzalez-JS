
const contenedor_sesion = document.querySelector(".Inicio_sesion")
const email_sesion = document.querySelector("#email-sesion")
const contraseña_sesion = document.querySelector("#contraseña-sesion")
const boton_sesion = document.querySelector("#boton-sesion")

const trabajadores_registrados = JSON.parse(localStorage.getItem("Registrados"))



boton_sesion.addEventListener("click", (e)=>{
    e.preventDefault()
    let estado = false  
    for (const dato of trabajadores_registrados) {

        if(dato.email===email_sesion.value && dato.contraseña=== contraseña_sesion.value){
            estado = true 
        }
    }

        if(estado){
            const cont_contenido = document.querySelector(".contenido_prod-oculto")
            const cont_sesion = document.querySelector(".Inicio_sesion")
            cont_contenido.classList.toggle("contenido_prod-activo")
            cont_sesion.classList.toggle("Inicio_sesion-oculto")
        }else{
            Swal.fire({
                icon:'error',
                iconColor:'rgb(40, 11, 51)',
                title:'<strong>Usuario no Registrado</strong>',
                text:'Registrese si es un trabajador',
                backdrop:'rgba(80, 80, 80, 0.775)',
                showDenyButton:true,
                denyButtonText:'Registrese',
            }).then((result) =>{
                const cont_sesion = document.querySelector(".Inicio_sesion")
                const cont_registro = document.querySelector(".Registrarse_oculto")
                
                if(result.isDenied){
                    cont_sesion.classList.toggle("Inicio_sesion-oculto")
                    cont_registro.classList.toggle("Registrarse_activo")
                }
            })
        }

    }
)