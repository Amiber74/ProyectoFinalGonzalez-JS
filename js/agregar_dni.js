const cont_dni = document.querySelector("#subida_dnis")
const Dni_ls = JSON.parse(localStorage.getItem("DNI"))
const boton_dni = document.querySelector("#boton-dni")
const nombre_dni = document.querySelector("#nombre-dni")
const numero_dni = document.querySelector("#numero-dni")

function Dni_cargado (dni,nombre){
    this.dni=dni
    this.nombre=nombre
}

boton_dni.addEventListener("click", (e)=>{
    e.preventDefault()
    if (nombre_dni.value === '' || numero_dni.value === ''){
        Swal.fire({
            icon:'error',
            title:'Error con la carga de datos',
            text:'Usted no ha ingresado el nombre y/o Dni del trabajador'
        })
    }else{
        if(numero_dni.value.toString().length!=8){
            Swal.fire({
                icon:'error',
                title:'Error con el numero de DNI',
                text:'El numero de DNI debe tener 8 numeros'
            })
        }else{
            Dni_ls.push(new Dni_cargado(parseInt(numero_dni.value) , nombre_dni.value.toLowerCase()))
            localStorage.setItem("DNI",JSON.stringify(Dni_ls))

            Swal.fire({
                icon:'success',
                title:'Registro exitoso',
                showConfirmButton:false,
                timer:'1600'
            })
        }

    }
})