const contenedor_carrito=document.querySelector("#Carrito")
const main_carrito = document.querySelector(".carrito")
const boton_comprar = document.querySelector("#boton_comprar")
const contenedor_carrito_vacio = document.querySelector("#carrito-vacio")

const Productos_carrito=JSON.parse(localStorage.getItem("Carrito"))

let carrito_Ls = []
if(carrito_Ls !==null){
    carrito_Ls=Productos_carrito || localStorage.setItem("Carrito",JSON.stringify( carrito_Ls))
}



Array.from(carrito_Ls)


if (carrito_Ls.toString() === ''){
    contenedor_carrito.classList.toggle("carrito-vacio-oculto")
    contenedor_carrito_vacio.classList.toggle("carrito-vacio-activo")
    total_prod.classList.add("Precio_Total-oculto")
}
let total=0
for (const p of carrito_Ls){

    total = total + p.precio
    localStorage.setItem("Total-carrito", JSON.stringify(total))
    
    const prod_carrito = document.createElement('div')
    prod_carrito.classList.add("producto")
    prod_carrito.innerHTML = `
        <img src="${p.img}">
        <p class="nombre_carrito">${p.nombre}</p>
        <p class="precio_carrito">$${p.precio}</p>
    `
    contenedor_carrito.append(prod_carrito)

    const eliminar_prod = document.createElement("div")
    eliminar_prod.innerHTML = '<label for="eliminar_prod"><input type="submit" name="eliminar_prod" id="eliminar_prod" value="Eliminar"></label>'
    prod_carrito.append(eliminar_prod)
    eliminar_prod.addEventListener("click", ()=>{

        const prod_eliminar = carrito_Ls.find((dato)=>dato.id === p.id)

        let pos =carrito_Ls.indexOf(prod_eliminar)
        carrito_Ls.splice(pos,1)

        localStorage.setItem("Carrito",JSON.stringify(carrito_Ls))
        
        location.reload()
    })

}
let precio_total = JSON.parse(localStorage.getItem("Total-carrito"))

const total_prod = document.createElement("div")
total_prod.classList.add("Precio_Total")
total_prod.innerHTML=`<p >Total a pagar $${precio_total} </p>`
main_carrito.append(total_prod)

const botonComprar = document.createElement("div")

botonComprar.innerHTML= `<button><strong>Compra Final</strong></button>`



botonComprar.addEventListener("click", ()=>{
    localStorage.setItem("Carrito",JSON.stringify([]))
    cont_info.classList.add("form_recibo-activo")




})
total_prod.append(botonComprar)
