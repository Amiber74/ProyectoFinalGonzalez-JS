const lista_prod = JSON.parse(localStorage.getItem("Productos"))
const cont_cont = document.querySelector(".contenido_prod-oculto")
const form_mod_prod = document.querySelector("#modificar_productos")

// Values Productos

const nombre_prod = document.querySelector("#nombre-prod")
const precio_prod = document.querySelector("#precio-prod")
const imagen_prod = document.querySelector("#imagen-prod")
const descripcion_prod = document.querySelector("#descripcion-prod")
const boton_prod = document.querySelector("#boton-prod")

function Producto (nombre,precio,imagen,descripcion){
    this.nombre=nombre
    this.precio=precio
    this.img=imagen
    this.desc=descripcion
}


boton_prod.addEventListener("click", ()=>{
    lista_prod.push(new Producto(nombre_prod.value.toLowerCase() ,parseInt(precio_prod.value) ,imagen_prod.value ,descripcion_prod.value))
    localStorage.setItem("Productos", JSON.stringify(lista_prod))
    location.reload()
})

