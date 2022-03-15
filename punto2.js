

function funcionPrincipal(callBack){
    
        planos=[1,2,30,3,4,5,10,7,9,11]

       let plano = planos.filter(function(plano){

            return (plano>=1 && plano<=10)
      
    })
    callBack(plano) 
    //console.log(plano)
}


funcionPrincipal(function(plano){

  
      console.log("la Cantidad de PLanos son : " + plano.length +  " , pueden despegar!")
})
