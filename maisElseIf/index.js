/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa noite
*/

// o if- pode ser usado sozinho
//o else sempre precisa de um if antes!
//So pode ter um else


const hora = 55;

if (hora >=0 && hora<=11){
console.log("Bom dia!")
}

else if (hora>=12 && hora <= 17){
    console.log("Boa Tarde")
}
else if (hora >=18 && hora <=23){
    console.log("Boa noite")
}

else{
    console.log("Hora inválida")
}

