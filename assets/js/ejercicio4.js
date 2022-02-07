/* 373:365 = 1,021 años          --> 1 año
   373-(365*1)= 8 dias restantes
   8:7 = 1,142                   --> 1 semana
   1:1= 1 dia                    --> 1 dia
*/
let dias = parseInt(
    prompt("Ingrese un número de días para calcular años, semanas y días ")
  );
 

  let ano = 0 
  if (dias >=365) {
      ano = Math.floor(dias / 365)
      document.write("El número de años es : ", ano )
  }

  let semana = 0
  if ( dias >=7) {
      semana = Math.floor((dias -(365 * ano)) /7)
      document.write("El número de semanas es : ", semana)
  }

  let dia = 0
  if ( dias >=1) {
      dia =  Math.floor(dias -(365 * ano) - (7 * semana))
      document.write("El número de días es : ", dia)
  }