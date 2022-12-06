const Array_prod = JSON.parse(localStorage.getItem("Productos"))
const Cont_prod = document.querySelector(`#index`)
const lista_carrito =[]
Array.from(Array_prod)

Array_prod.forEach((p)=>{
    const div = document.createElement("div")
    div.classList.add("tarjeta_prod")
    div.innerHTML =`
    <h1>${p.nombre}</h1>
    <img src="${p.img}"></img>
    <p class="descripcion">${p.desc}</p>
    <p class="precio">$${p.precio}</p>
    `
    Cont_prod.append(div)

    const boton = document.createElement('div')
    boton.innerHTML= '<button id="boton_comprar"><strong> Comprame </strong></button>'
    div.append(boton)

    boton.addEventListener("click",()=>{
        const prod = Array_prod.find((dato)=>dato.id === p.id)
        lista_carrito.push(prod)
        localStorage.setItem("Carrito",JSON.stringify(lista_carrito))
    })
})


