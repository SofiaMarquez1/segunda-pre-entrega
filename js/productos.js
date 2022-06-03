class Plantas {
    constructor(nombres, precios) {
        this.nombres = nombres
        this.precios = parseFloat(precios)
    }
    }
    
    let Nombre;
    let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `${sessionStorage.getItem("usuario")}`;
  document.body.append(contenedor);
}else{
    let Nombre = prompt("Ingresa tu nombre");
    sessionStorage.setItem("usuario", Nombre);
    if (Nombre != " ") {
    alert("Bienvenido/a " + Nombre)
    } else {
    alert("No ingresaste ningun nombre")
    }
}
    
    let arrayPlantas = []
    
    let pregunta = prompt("¿Necesitas flores para tu jardin?")
    
    while (pregunta == "si") {
    
    const alocasia = new Plantas("Alocasia", "400")
    const aralia = new Plantas("Aralia", "450")
    const gomero = new Plantas("Gomero", "300")
    const cretona = new Plantas("Cretona", "500")
    const kentia = new Plantas("Kentia", "360")
    const singonium = new Plantas("Singonium", "350")
    const monstera = new Plantas("Monstera", "500")
    const siempreVerde = new Plantas("Siempre Verde", "700")
    
    let producto = prompt("¿Que flor estas buscando?")
    
    if (producto == "alocasia") {
        alert("El precio es " + alocasia.precios)
    } else if (producto == "aralia") {
        alert("El precio es " + aralia.precios)
    } else if (producto == "gomero") {
        alert("El precio es " + gomero.precios)
    } else if (producto == "cretona") {
        alert("El precio es " + cretona.precios)
    } else if (producto == "kentia") {
        alert("El precio es " + kentia.precios)
    } else if (producto == "singonium") {
        alert("El precio es " + singonium.precios)
    } else if (producto == "monstera") {
        alert("El precio es " + monstera.precios)
    } else if (producto == "siempreVerde") {
        alert("El precio es " + siempreVerde.precios)
    } else alert("no tenemos ese producto")
    
    pregunta = prompt("¿Necesitas saber el precio de otra flor?")
    }

const contenedorInterior = document.getElementById("plantass");
/*const contenedorExterior = document.getElementById("plantas");*/
const carritoTabla = document.getElementById("carritoTabla"); 
const carrito = [];   


const plantasInterior=[ 
    {id: 1, nombre: "Alocasia", precio: 400, imagen: "../img/alocasia-interior.jpg" },
    {id: 2, nombre: "aralia", precio: 450, imagen: "../img/aralia-interior.jpg"  },
    {id: 3, nombre: "Gomero", precio: 300, imagen: "../img/gomero-interior.jpg"},
    {id: 4, nombre: "Cretona", precio: 500, imagen: "../img/cretona-interior.jpg"},
    {id: 5, nombre: "Kentia", precio: 360, imagen: "../img/kentia-interior.jpg"},
    {id: 6, nombre: "Singonium", precio: 350, imagen: "../img/singonium-interior.jpg"},
    {id: 7, nombre: "Monstera", precio: 500, imagen: "../img/monstera-deliciosa-interior.jpg"},
    {id: 8, nombre:"Siempre Verde", precio: 700, imagen: "../img/siempre-verdee.jpg"}
];

/*const plantasExterior=[
    {id: 9, nombre: "Corona", precio: 400, imagen: "../img/corona-exterior.jpg" },
    {id: 10, nombre: "Crasas", precio: 450, imagen: "../img/crasas-exterior.jpg"  },
    {id: 11, nombre: "Lavanda", precio: 300, imagen: "../img/lavanda-exterior.jpg"},
    {id: 12, nombre: "Crisantemo Simple", precio: 500, imagen: "../img/crisantemo-simple.jpg"},
    {id: 13, nombre: "Crisantemo", precio: 360, imagen: "../img/crisantemo.jpg"},
    {id: 14, nombre: "Margarita Amarilla", precio: 350, imagen: "../img/margarita-amarilla.jpg"},
    {id: 15, nombre: "Rosa Rococo", precio: 500, imagen: "../img/rosa-rococo.jpg"},
    {id: 16, nombre:"Sansevieria", precio: 700, imagen: "../img/sansevieria.jpg"} 
]*/

let storangeProductos = (clave, valor) =>{
    localStorage.setItem(clave, valor);
}

for(const plantasProducto of plantasInterior){
    storangeProductos(plantasProducto.id, JSON.stringify(plantasProducto))
  }

localStorage.setItem("Plantas interior", JSON.stringify(plantasInterior));


let storangeProductosExterior = (clave, valor) =>{
    localStorage.setItem(clave, valor);
}

/*for(const plantasProductoExterior of plantasExterior){
    storangeProductosExterior(plantasProductoExterior.id, JSON.stringify(plantasProductoExterior))
  }

localStorage.setItem("Plantas interior", JSON.stringify(plantasExterior));*/
 


const card = (item) => {
    return(`
        <div class="card col-3 m-5 cajap" style="width: 18rem;">
            <img class="img" src= "${item.imagen}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title titulop">${item.nombre}</h5>
            <p class="card-text">$${item.precio}</p>
            <button onclick=agregarCarrito(${item.id}) class="btn btn-primary">Comprar</button>
            </div>
        </div>
    `);
};

const Row = (item) => {
    return(`
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.nombre}</td>
        <td>${item.cantidad}</td>
        <td>${item.precio * item.cantidad}</td>
    </tr>
    `)
}

const cargarPlantas = (datos, nodo, tabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += tabla ? Row(el) : card(el);
    })
    nodo.innerHTML = acumulador; 
};

/*const arraysProductos = [plantasInterior, plantasExterior];
console.log(arraysProductos);*/

const agregarCarrito = (id)=>{
    const seleccion = plantasInterior.find(item => item.id === id);
    alert(seleccion.nombre + " ha sido agregado al carrito")

    const buscar = carrito.findIndex(el => el.id === id)
    if(buscar === -1){
    carrito.push({
        id: seleccion.id,
        nombre: seleccion.nombre,
        precio: seleccion.precio,
        cantidad:1,
    })
    } else {
        carrito [buscar].cantidad = carrito[buscar].cantidad + 1
    }
    cargarPlantas (carrito, carritoTabla, true);
}

cargarPlantas(plantasInterior, contenedorInterior, false);
/*cargarPlantas(plantasExterior, contenedorExterior, false)*/






