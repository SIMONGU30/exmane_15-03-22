function funcionPrincipal(nombre,planeta,edad,estatura,callBack){

    setTimeout(function(){
            datos={
                nombre:nombre,
                planeta:planeta,
                edad:edad,
                estatura:estatura,
            }
            callBack(datos)
    },10000)
}
funcionPrincipal("SIMON","MARTE",19,"1.80",function(datos){

        if(datos.edad <= 1){
            console.log("Manejo de la fuerza")
        }
        else{
            console.log("Manejo del sable de luz")
        }
})