let dia = 31
let mes = 12
let ano = 2022

   if (mes==1){
      mes="Janeiro"
   }
   else if (mes==2){
      mes="Fevereiro"
   }
   else if (mes==3){
      mes="MarÃ§o"
   }
   else if (mes==4){
      mes="Abril"
   }
   else if (mes==5){
      mes="Maio"
   }
   else if (mes==6){
      mes="Junho"
   }
   else if (mes==7){
      mes="Julho"
   }
   else if (mes==8){
      mes="Agosto"
   }
   else if (mes==9){
      mes="Setembro"
   }
   else if (mes==10){
      mes="Outubro"
   }
      else if (mes==11){
      mes="Novembro"
   }
      else if (mes==12){
      mes="Dezembro"
   }
      if (dia>31 && mes>12){
      console.log("Dia Invalido")
      console.log("MÃªs Invalido")
      }
      else if (dia>31){
         console.log("dia Inavalido")
      }
      else if (mes>12){
         console.log("mÃªs Invalido")
      }  
      else{
   console.log("Hoje Ã© dia",dia,"De",mes,"Do Ano",ano)
   }