

class Membresia{

    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }


    get_datos(){
        console.log("--MEMBRESIA--");
        console.log("Nivel: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }


    get_stock(){
        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }


    update_stock( unidades ){

        if(this.stock >= unidades ){
            this.stock = this.stock - unidades;
            return true
        }
        else{
            console.log("Este nivel de membresias es limitadas, y ya no quedan cupos");
            console.log("Nivel disponible: ", this.stock);
            return false
        }

    }


}

let listaProductos = [];

listaProductos.push( new Producto("Miembro Bronce" , 24000 , 1000000000) );
listaProductos.push( new Producto("Miembro Plata" , 12000 , 1000000) );
listaProductos.push( new Producto("Miembro Oro" , 30000 , 10000) );
listaProductos.push( new Producto("Miembro Platino" , 18000 , 200) );

for( let i=0 ; i < 3 ; i = i + 1){

    let nombre = prompt("Ingrese la nueva categoria");
    let precio = prompt("Ingrese valor de la categoria");
    let stock = prompt("Ingrese la disponibilidad de la categoria");

    precio = parseFloat(precio);

    let producto = new Producto(nombre,precio,stock);

    listaProductos.push(producto);

}

function calculoPrestamo ( monto , cuotas ){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo_final = 0;

    if( cuotas == 1 && monto > 0){
        return monto
    }
    else if( cuotas == 3 && monto > 0){
        prestamo_final = monto + (monto * 0.25);
        return prestamo_final
    }
    else if( cuotas == 6 && monto > 0 ){
        prestamo_final = monto + (monto * 0.60);
        return prestamo_final
    }
    else if( cuotas == 12  && monto > 0){
        prestamo_final = monto + (monto * 1);
        return prestamo_final
    }

    
}


function descuento( prestamo , es_socio ){

    if( es_socio == "SI" ){

        let descuento_socio = prestamo - ( prestamo * 0.20 );
        return descuento_socio
    }
    else{
        return 0
    }


}





// PRESTAMO //

console.log("Bienvenidos/as a BR Capital Group.");

let monto = 0;


while( monto != "FIN" ){

    monto = prompt("Ingrese el monto que desea solicitar ó FIN, para seguir con otra operatoria. ");
    if( monto != "FIN"){
        let cuotas = prompt("Ingrese la cantidad de cuotas: 1, 3, 6 y 12");
        let es_socio = prompt("Es socio: SI o NO");

        let resultado_del_prestamo = calculoPrestamo( monto , cuotas );
        let resultado_del_descuento = descuento( resultado_del_prestamo , es_socio );

        console.log("Solicitó: ", monto);
        console.log("Cantidad de cuotas: ", cuotas);
        console.log("Total a devolver: ", resultado_del_prestamo );


        if( resultado_del_descuento != 0){
            console.log("20% OFF por suscripcion de servicios: ", resultado_del_descuento);
        }
    }
    else{
        console.log("Muchas gracias");
    }


    


}


