// const prod = [
//     {nombre:"Cosplay de Venti", precio:20000, id:1, img:"https://m.media-amazon.com/images/I/61Tk9GwSnzL._AC_UL1000_.jpg", desc:"Disfraz de tu personaje de genshin impact, tamaño largo"},
//     {nombre:"Lampara de Venti", precio:9500, id:2, img:"https://m.media-amazon.com/images/I/61i9hGRLNcL._AC_SL1000_.jpg", desc:"Lampara de Venti, personaje de Genshin Impact"},
//     {nombre:"Dodoco", precio:5000, id:3, img:"https://m.media-amazon.com/images/I/51M5SVnOrpL._AC_UL1500_.jpg", desc:"Peluche de dodoco, suave como la seda"},
//     {nombre:"Juego de llaveros slimes", precio:4400, id:4, img:"https://m.media-amazon.com/images/I/61eQRbEpoLL._AC_UL1002_.jpg", desc:"juego de llavero de cada uno de los slimes que existen"},
//     {nombre:"Buzo de kasuha", precio:9200, id:5, img:"https://m.media-amazon.com/images/I/6142JVPrnYL._AC_UL1000_.jpg", desc:"Buzo con tematica de Kasuha, personaje de Genshin Impact"},
//     {nombre:"Mouse Pad Genshin Impact", precio:9900, id:6, img:"https://m.media-amazon.com/images/I/71vHn12bTiL._AC_SL1000_.jpg", desc:"Mouse pad con rgb, tematica Genshin Impact"},
//     {nombre:"Juego de pulseras elementales", precio:3300, id:7, img:"https://m.media-amazon.com/images/I/71k-3+-tZOL._AC_UL1500_.jpg", desc:"Juego de pulseras de cada uno de los elementos"},
//     {nombre:"Juego de llaveros de personajes", precio:4400, id:8, img:"https://m.media-amazon.com/images/I/81XYLe0FNsL._AC_UL1500_.jpg", desc:"Juego de llaveros de algunos personajes de Genshin Impact"},
//     {nombre:"Juego de peluches slimes", precio:11000, id:9, img:"https://m.media-amazon.com/images/I/71+7mRe4JeL._AC_SL1500_.jpg", desc:"peluches de slimes suaves al tacto de todos los elementos"},
//     {nombre:"auriculares genshin impact", precio:43000, id:10, img:"https://m.media-amazon.com/images/I/51Cybn7sAAL._AC_.jpg", desc:"Auriculares tematica de klee, personaje de Genshin Impact"}
// ]
// localStorage.setItem("Productos",JSON.stringify(prod))


const Producto_LS = localStorage.getItem("Productos")
let prod_list = []
if (prod_list !== null){
    prod_list = Producto_LS || localStorage.setItem('Productos', JSON.stringify(P))
}