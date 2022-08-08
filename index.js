window.onload = function () {
  
  var Intervalo ;
  var segundos = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("segundos")
  var botaoiniciar = document.getElementById('botao-iniciar');
  var botaoparar = document.getElementById('botao-parar');
  var botaorecomecar = document.getElementById('botao-recomecar');

  botaoiniciar.onclick = function() {
    
    clearInterval(Intervalo);
    Intervalo = setInterval(startTimer, 10);
  }
  
  botaoparar.onclick = function() {
       clearInterval(Intervalo);
  }
  

  botaorecomecar.onclick = function() {
     clearInterval(Intervalo);
    tens = "00";
  	segundos = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = segundos;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("segundos");
      segundos++;
      appendSeconds.innerHTML = "0" + segundos;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = segundos;
    }
  
  }
  

}