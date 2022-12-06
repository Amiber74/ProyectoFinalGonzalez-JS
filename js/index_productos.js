const Array_prod = JSON.parse(localStorage.getItem("Productos"))
const Cont_prod = document.querySelector(`#index`)
Array.from(Array_prod)

Array_prod.forEach((p)=>{
    let div = document.createElement("div")
    div.classList.add("tarjeta_prod")
    div.innerHTML =`
    <h1>${p.nombre}</h1>
    <img src="${p.img}"></img>
    <p class="descripcion">${p.desc}</p>
    <p class="precio">$${p.precio}</p>
    <button id="boton_comprar"><strong> Comprame </comprame></button>
    `
    Cont_prod.append(div)
})