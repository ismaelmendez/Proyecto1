
function mostrar(){
document.getElementById("uno").style.display='block';

}

function ocultar(){
document.getElementById("uno").style.display='none';

}
function mostraralerta2(){
alert('PRUEBAAA 2.0');
}

function mosos(){

  var formulario =document.getElementById("uno");
  
  if (formulario.style.display =="none") {

  	mostrar();
  }
  else{
  	ocultar();
  }

}

function hacerclick(){
document.getElementById('boton').onclick=mostraralerta2

 }


window.onload=hacerclick