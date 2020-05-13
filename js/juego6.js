/*Adan Gutierrez
	codigo para el juego donde se arrastran las iagenes al lugar donde 
	sea la cantidad de silavas

*/


document.addEventListener('DOMContentLoaded',function(){


},false);


//aqui es donde va a ir agregando las imagenes
//cada bloque es para una imagen :v
//imagenes del canvas
var Jperro = document.getElementById("perro");
var Jimg_perro = new Image();
Jimg_perro.src = "./imagen/perro.png";
var Jcontexto_perro = Jperro.getContext("2d");
Jcontexto_perro.drawImage(Jimg_perro,0,0)

var Jpelo = document.getElementById("pelo");
var Jimg_pelo = new Image();
Jimg_pelo.src = "./imagen/pelo.png";
var Jcontexto_pelo = Jpelo.getContext("2d");
Jcontexto_pelo.drawImage(Jimg_pelo,0,0)

var Jpipa = document.getElementById("pipa");
var Jimg_pipa = new Image();
Jimg_pipa.src = "./imagen/pipa.png";
var Jcontexto_pipa = Jpipa.getContext("2d");
Jcontexto_pipa.drawImage(Jimg_pipa,0,0)

var Jpollo = document.getElementById("pollo");
var Jimg_pollo = new Image();
Jimg_pollo.src = "./imagen/pollo.png";
var Jcontexto_pollo = Jpollo.getContext("2d");
Jcontexto_pollo.drawImage(Jimg_pollo,0,0)

var Jpuno = document.getElementById("puno");
var Jimg_puno = new Image();
Jimg_puno.src = "./imagen/puno.png";
var Jcontexto_puno = Jpuno.getContext("2d");
Jcontexto_puno.drawImage(Jimg_puno,0,0)

var Jpuerta = document.getElementById("puerta");
var Jimg_puerta = new Image();
Jimg_puerta.src = "./imagen/puerta.png";
var Jcontexto_puerta = Jpuerta.getContext("2d");
Jcontexto_puerta.drawImage(Jimg_puerta,0,0)

var Jparaguas = document.getElementById("paraguas");
var Jimg_paraguas = new Image();
Jimg_paraguas.src = "./imagen/paraguas.png";
var Jcontexto_paraguas = Jparaguas.getContext("2d");
Jcontexto_paraguas.drawImage(Jimg_paraguas,0,0)

var Jpaleta = document.getElementById("paleta");
var Jimg_paleta = new Image();
Jimg_paleta.src = "./imagen/paleta.png";
var Jcontexto_paleta = Jpaleta.getContext("2d");
Jcontexto_paleta.drawImage(Jimg_paleta,0,0)
//variables
var imagen;
var Jcontador_correcto = 0;
var Jcontador_perro =0;
var Jcontador_pelo =0;
var Jcontador_pipa =0;
var Jcontador_pollo =0;
var Jcontador_puno =0;
var Jcontador_puerta =0;
var Jcontador_paraguas =0;
var Jcontador_paleta =0;
var Jaudio_element_correcto = document.createElement('audio');
Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');

//arrastre de los elementos no le muevas nada aqui >:v

function dragStart(event, id) {
	
  var el;
  var x, y;

  // If an element id was given, find it. Otherwise use the element being
  // clicked on.

  if (id)
    dragObj.elNode = document.getElementById(id);
  else {
    if (browser.isIE){
      dragObj.elNode = window.event.srcElement;
    }
    if (browser.isNS){
      dragObj.elNode = event.target;
    }

    // If this is a text node, use its parent element.

    if (dragObj.elNode.nodeType == 3)
      dragObj.elNode = dragObj.elNode.parentNode;
  }
 // Get cursor position with respect to the page.

  if (browser.isIE) {
    x = window.event.clientX + document.documentElement.scrollLeft
      + document.body.scrollLeft;
    y = window.event.clientY + document.documentElement.scrollTop
      + document.body.scrollTop;
  }
  if (browser.isNS) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
  }
// Save starting positions of cursor and element.

  dragObj.cursorStartX = x;
  dragObj.cursorStartY = y;
  dragObj.elStartLeft  = parseInt(dragObj.elNode.style.left, 10);
  dragObj.elStartTop   = parseInt(dragObj.elNode.style.top,  10);

  if (isNaN(dragObj.elStartLeft)) dragObj.elStartLeft = 0;
  if (isNaN(dragObj.elStartTop))  dragObj.elStartTop  = 0;
  // Update element's z-index.

  dragObj.elNode.style.zIndex = ++dragObj.zIndex;

// Capture mousemove and mouseup events on the page.

  if (browser.isIE) {
    document.attachEvent("onmousemove", dragGo);
    document.attachEvent("onmouseup",   dragStop);
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
  if (browser.isNS) {
    document.addEventListener("mousemove", dragGo,   true);
    document.addEventListener("mouseup",   dragStop, true);
    event.preventDefault();
  }


}

function dragGo(event) {

  var x, y;

  // Get cursor position with respect to the page.

  if (browser.isIE) {
    x = window.event.clientX + document.documentElement.scrollLeft
      + document.body.scrollLeft;
    y = window.event.clientY + document.documentElement.scrollTop
      + document.body.scrollTop;
  }
  if (browser.isNS) {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY;
  }
// Move drag element by the same amount the cursor has moved.

  dragObj.elNode.style.left =
    (dragObj.elStartLeft + x - dragObj.cursorStartX) + "px";
  dragObj.elNode.style.top  =
    (dragObj.elStartTop  + y - dragObj.cursorStartY) + "px";

if (browser.isIE) {
    window.event.cancelBubble = true;
    window.event.returnValue = false;
  }
  if (browser.isNS)
    event.preventDefault();
if (imagen=='gato') {
	/*console.log('posLgato= '+document.getElementById('gato').getBoundingClientRect().left);
console.log('posTgato= '+document.getElementById('gato').getBoundingClientRect().top);
console.log('posRgato= '+document.getElementById('gato').getBoundingClientRect().right);
console.log('posBTgato= '+document.getElementById('gato').getBoundingClientRect().bottom);
*/}

//console.log(document.getElementById('gato').getBoundingClientRect().right)

// cambio de color con movimieto

	
}


function dragStop(event) {


  if (

	document.getElementById('pe').getBoundingClientRect().top < document.getElementById('perro').getBoundingClientRect().top && 
	document.getElementById('pe').getBoundingClientRect().left <= document.getElementById('perro').getBoundingClientRect().left && 
	document.getElementById('pe').getBoundingClientRect().left +200 >= document.getElementById('perro').getBoundingClientRect().left 
	&&
	document.getElementById('pe').getBoundingClientRect().top +150 > document.getElementById('perro').getBoundingClientRect().top
	) {
  		if (Jcontador_perro == 0) {
  			Jcontador_perro=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
  		}
	
			// iniciamos el audio
				
	document.getElementById('pe').style.backgroundColor='#41FFDF';

}
if (

	document.getElementById('pe').getBoundingClientRect().top <       document.getElementById('pelo').getBoundingClientRect().top && 
	document.getElementById('pe').getBoundingClientRect().left <=     document.getElementById('pelo').getBoundingClientRect().left && 
	document.getElementById('pe').getBoundingClientRect().left +200 >= document.getElementById('pelo').getBoundingClientRect().left 
	&&
	document.getElementById('pe').getBoundingClientRect().top +150 >  document.getElementById('pelo').getBoundingClientRect().top
	) {if (Jcontador_pelo == 0) {
  			Jcontador_pelo=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('pe').style.backgroundColor='#41FFDF';


}
if (

	document.getElementById('pi').getBoundingClientRect().top < document.getElementById('pipa').getBoundingClientRect().top && 
	document.getElementById('pi').getBoundingClientRect().left <= document.getElementById('pipa').getBoundingClientRect().left && 
	document.getElementById('pi').getBoundingClientRect().left +200 >= document.getElementById('pipa').getBoundingClientRect().left 
	&&
	document.getElementById('pi').getBoundingClientRect().top +150 > document.getElementById('pipa').getBoundingClientRect().top
	) {
	if (Jcontador_pipa == 0) {
  			Jcontador_pipa=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('pi').style.backgroundColor='#41FFDF';

}
  if (

	document.getElementById('pu').getBoundingClientRect().top < document.getElementById('puno').getBoundingClientRect().top && 
	document.getElementById('pu').getBoundingClientRect().left <= document.getElementById('puno').getBoundingClientRect().left && 
	document.getElementById('pu').getBoundingClientRect().left +200 >= document.getElementById('puno').getBoundingClientRect().left 
	&&
	document.getElementById('pu').getBoundingClientRect().top +150 > document.getElementById('puno').getBoundingClientRect().top
	) {
  		if (Jcontador_puno == 0) {
  			Jcontador_puno =1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
  		}
	
			// iniciamos el audio
				
	document.getElementById('pu').style.backgroundColor='#41FFDF';

}
if (

	document.getElementById('po').getBoundingClientRect().top < document.getElementById('pollo').getBoundingClientRect().top && 
	document.getElementById('po').getBoundingClientRect().left <= document.getElementById('pollo').getBoundingClientRect().left && 
	document.getElementById('po').getBoundingClientRect().left +200 >= document.getElementById('pollo').getBoundingClientRect().left 
	&&
	document.getElementById('po').getBoundingClientRect().top +150 > document.getElementById('pollo').getBoundingClientRect().top
	) {if (Jcontador_pollo  == 0) {
  			Jcontador_pollo =1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('po').style.backgroundColor='#41FFDF';
}

if(
	document.getElementById('pu').getBoundingClientRect().top < document.getElementById('puerta').getBoundingClientRect().top && 
	document.getElementById('pu').getBoundingClientRect().left <= document.getElementById('puerta').getBoundingClientRect().left && 
	document.getElementById('pu').getBoundingClientRect().left +200 >= document.getElementById('puerta').getBoundingClientRect().left 
	&&
	document.getElementById('pu').getBoundingClientRect().top +150 > document.getElementById('puerta').getBoundingClientRect().top
	) {
	if (Jcontador_puerta == 0) {
  			Jcontador_puerta=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('pu').style.backgroundColor='#41FFDF';

}
if(
  document.getElementById('pa').getBoundingClientRect().top < document.getElementById('paraguas').getBoundingClientRect().top && 
  document.getElementById('pa').getBoundingClientRect().left <= document.getElementById('paraguas').getBoundingClientRect().left && 
  document.getElementById('pa').getBoundingClientRect().left +200 >= document.getElementById('paraguas').getBoundingClientRect().left 
  &&
  document.getElementById('pa').getBoundingClientRect().top +150 > document.getElementById('paraguas').getBoundingClientRect().top
  ) {
  if (Jcontador_paraguas == 0) {
        Jcontador_paraguas=1;
        Jcontador_correcto=Jcontador_correcto+1;
        Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
        Jaudio_element_correcto.play();
      }
  document.getElementById('pa').style.backgroundColor='#41FFDF';

}
if(
  document.getElementById('pa').getBoundingClientRect().top < document.getElementById('paleta').getBoundingClientRect().top && 
  document.getElementById('pa').getBoundingClientRect().left <= document.getElementById('paleta').getBoundingClientRect().left && 
  document.getElementById('pa').getBoundingClientRect().left +200 >= document.getElementById('paleta').getBoundingClientRect().left 
  &&
  document.getElementById('pa').getBoundingClientRect().top +150 > document.getElementById('paleta').getBoundingClientRect().top
  ) {
  if (Jcontador_paleta == 0) {
        Jcontador_paleta=1;
        Jcontador_correcto=Jcontador_correcto+1;
        Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
        Jaudio_element_correcto.play();
      }
  document.getElementById('pa').style.backgroundColor='#41FFDF';

}

if (Jcontador_correcto==8) {
 	document.getElementById("imagenes").innerHTML = "¡Pasaste al Siguiente Nivel!";
 	document.getElementById("div_centro").innerHTML = '<a  class="btn btn-primary btn-modify" href="modificarF.php" id="palabras"> Siguiente Nivel</a>';

 }
  // Stop capturing mousemove and mouseup events.

  if (browser.isIE) {
    document.detachEvent("onmousemove", dragGo);
    document.detachEvent("onmouseup",   dragStop);
  }
  if (browser.isNS) {
    document.removeEventListener("mousemove", dragGo,   true);
    document.removeEventListener("mouseup",   dragStop, true);
  }
  
}
// diferente para que cada navegador diferente cumpla la misma tarea.

//Por tanto, en primer lugar, el script define un objeto global 
//llamado browser que contiene información sobre cada navegador particular y su versión. 
//Este objeto se utiliza en el script para acabar con las incompatibilidades entre navegadores.

// Determine browser and version.

function Browser() {

  var ua, s, i;

  this.isIE    = false;
  this.isNS    = false;
  this.version = null;

  ua = navigator.userAgent;

  s = "MSIE";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isIE = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  s = "Netscape6/";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = parseFloat(ua.substr(i + s.length));
    return;
  }

  // Treat any other "Gecko" browser as NS 6.1.

  s = "Gecko";
  if ((i = ua.indexOf(s)) >= 0) {
    this.isNS = true;
    this.version = 6.1;
    return;
  }
}
// Global object to hold drag information.

var dragObj = new Object();
dragObj.zIndex = 0;
var browser = new Browser();



//sonidos para las imagenes ver cual imagen fue seleccionada


function elemento(e){
  if (e.srcElement){
	  tag = e.srcElement.tagName;
  	tag =e.target.id;
  	
  }


 if (tag == 'perro') {

		imagen = tag;
		
}	else if (tag=='pelo') {
	imagen=tag;
	
}else if (tag=='pipa') {
	imagen=tag;
	
}else if (tag=='pollo') {
	imagen=tag;
	
}else if (tag=='puno') {
	imagen=tag;
	
}else if (tag=='puerta') {
	imagen=tag;
	
}else if (tag=='paraguas') {
  imagen=tag;
  
}else if (tag=='paleta') {
  imagen=tag;
  
}
		}
//seleccion de los audios

			//  objeto audio
		


		document.getElementById('palabras').addEventListener("click",function(){			
      if (imagen == 'perro') { 				
        Jaudio_element_correcto.setAttribute('src', './sonidos/perro.mp3');
				Jaudio_element_correcto.play();
			}else if (imagen=='pelo'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/pelo.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='pipa'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/pipa.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='puno'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/puno.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='pollo'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/pollo.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='puerta'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/puerta.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='paraguas'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/paraguas.mp3');
        Jaudio_element_correcto.play();
      }else if (imagen=='paleta'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/paleta.mp3');
        Jaudio_element_correcto.play();
      }
		})
  
	

