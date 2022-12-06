const contenedor_carrito=document.querySelector("#Carrito")
const boton_comprar = document.querySelector("#boton_comprar")

const Productos_carrito=JSON.parse(localStorage.getItem("Carrito"))
console.log(Productos_carrito)

for (const p of Productos_carrito){

    const prod_carrito = document.createElement('div')
    prod_carrito.innerHTML = `
        <img src="${p.img}">
        <p class="nombre_carrito">${p.nombre}</p>
        <p class="precio_carrito">$${p.precio}</p>
    `
    contenedor_carrito.append(prod_carrito)
}

