

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

        console.log("Pediste: ", monto);
        console.log("Cuotas: ", cuotas);
        console.log("Devolves: ", resultado_del_prestamo );


        if( resultado_del_descuento != 0){
            console.log("Con descuento del 20% por ser socio pagas: ", resultado_del_descuento);
        }
    }
    else{
        console.log("Muchas gracias");
    }


    


}


