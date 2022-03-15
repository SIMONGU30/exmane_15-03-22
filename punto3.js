

function funcionPrincipal(callBack){

    setTimeout(function(){
        alimentos=[
            {nombre:"panCucaracha",tipo:"insecto",nivelEnergia: 350},
            {nombre:"lechugaermitaña",tipo:"vegetal",nivelEnergia:120},
            {nombre:"leonPlancha",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaEspecial",tipo:"vegetal",nivelEnergia:102},
            {nombre:"frutaSeca",tipo:"vegetal",nivelEnergia:200},
            {nombre:"sancudoFrio",tipo:"insecto",nivelEnergia: 100},
            {nombre:"plantaTierruda",tipo:"vegetal",nivelEnergia:250},
            {nombre:"tigreAsado",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaClasica",tipo:"vegetal",nivelEnergia:102},
            {nombre:"frutaVerdosa",tipo:"vegetal",nivelEnergia:200},
            {nombre:"mondongoBabosudo",tipo:"insecto",nivelEnergia: 450},
            {nombre:"aguacateErmitaña",tipo:"vegetal",nivelEnergia:250},
            {nombre:"pumaHerbido",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaTallo",tipo:"vegetal",nivelEnergia:123},
            {nombre:"bananaEspecial",tipo:"vegetal",nivelEnergia:102},
            {nombre:"papitasHormiga",tipo:"insecto",nivelEnergia: 100},
            {nombre:"jugoArbol",tipo:"vegetal",nivelEnergia:100},
            {nombre:"leonaAsada",tipo:"animal",nivelEnergia:400},
            {nombre:"sopaGirasol",tipo:"vegetal",nivelEnergia:130},
            {nombre:"bananoClasico",tipo:"vegetal",nivelEnergia:180},
            {nombre:"arañaAsada",tipo:"insecto",nivelEnergia: 350},
            {nombre:"lechugaPlancha",tipo:"vegetal",nivelEnergia:400},
            {nombre:"bufaloBBq",tipo:"animal",nivelEnergia:400},
            {nombre:"girasolAsado",tipo:"vegetal",nivelEnergia:350},
            {nombre:"frutaRICA",tipo:"vegetal",nivelEnergia:300},
            {nombre:"mariposabbq",tipo:"insecto",nivelEnergia: 350},
            {nombre:"plantaVIda",tipo:"vegetal",nivelEnergia:350},
            {nombre:"leonPlancha",tipo:"animal",nivelEnergia:400},
            {nombre:"plantafria",tipo:"vegetal",nivelEnergia:205},
            {nombre:"rosasasadas",tipo:"vegetal",nivelEnergia:300},
            {nombre:"panCucaracha",tipo:"insecto",nivelEnergia: 350},
            {nombre:"lechugaermitaña",tipo:"vegetal",nivelEnergia:120},
            {nombre:"leonPlancha",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaEspecial",tipo:"vegetal",nivelEnergia:102},
            {nombre:"frutaSeca",tipo:"vegetal",nivelEnergia:200},
            {nombre:"panCucaracha",tipo:"insecto",nivelEnergia: 350},
            {nombre:"lechugaermitaña",tipo:"vegetal",nivelEnergia:120},
            {nombre:"leonPlancha",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaEspecial",tipo:"vegetal",nivelEnergia:102},
            {nombre:"frutaSeca",tipo:"vegetal",nivelEnergia:200},
            {nombre:"panCucaracha",tipo:"insecto",nivelEnergia: 350},
            {nombre:"lechugaermitaña",tipo:"vegetal",nivelEnergia:120},
            {nombre:"leonPlancha",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaEspecial",tipo:"vegetal",nivelEnergia:102},
            {nombre:"frutaSeca",tipo:"vegetal",nivelEnergia:200},
            {nombre:"panCucaracha",tipo:"insecto",nivelEnergia: 350},
            {nombre:"lechugaermitaña",tipo:"vegetal",nivelEnergia:120},
            {nombre:"leonPlancha",tipo:"animal",nivelEnergia:400},
            {nombre:"hojaEspecial",tipo:"vegetal",nivelEnergia:102},
            {nombre:"frutaSeca",tipo:"vegetal",nivelEnergia:200},
        ]
        
        let tipo=alimentos.filter(function(alimento){

            return (alimento.tipo="vegetal" && alimento.nivelEnergia>200 )
    
        })
    
        callBack(tipo)
        
    },5000)
    
}
    funcionPrincipal(function(tipo){
    acomulador=0

        tipo.forEach(function(tip){
            acomulador=acomulador+tip.nivelEnergia
        })

    console.log("la sumatoria de niveles de energía de Grog fueron : "
    + acomulador)

    })


