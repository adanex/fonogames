//aqui es donde va a ir agregando las imagenes
//cada bloque es para una imagen 
//imagenes del canvas
var Jfresa = document.getElementById("fresa");
var Jimg_fresa = new Image();
Jimg_fresa.src = "./imagen/fresa.png";
var Jcontexto_fresa = Jfresa.getContext("2d");
Jcontexto_fresa.drawImage(Jimg_fresa,0,0)

var Jrosa = document.getElementById("rosa");
var Jimg_rosa = new Image();
Jimg_rosa.src = "./imagen/rosa.png";
var Jcontexto_rosa = Jrosa.getContext("2d");
Jcontexto_rosa.drawImage(Jimg_rosa,0,0)

var Jestrella = document.getElementById("estrella");
var Jimg_estrella = new Image();
Jimg_estrella.src = "./imagen/estrella.png";
var Jcontexto_estrella = estrella.getContext("2d");
Jcontexto_estrella.drawImage(Jimg_estrella,0,0)

var Jbotella = document.getElementById("botella");
var Jimg_botella = new Image();
Jimg_botella.src = "./imagen/botella.png";
var Jcontexto_botella = Jbotella.getContext("2d");
Jcontexto_botella.drawImage(Jimg_botella,0,0)

var Jespejo = document.getElementById("espejo");
var Jimg_espejo = new Image();
Jimg_espejo.src = "./imagen/espejo.png";
var Jcontexto_espejo = Jespejo.getContext("2d");
Jcontexto_espejo.drawImage(Jimg_espejo,0,0)

var Jojo = document.getElementById("ojo");
var Jimg_ojo = new Image();
Jimg_ojo.src = "./imagen/ojo.png";
var Jcontexto_ojo = Jojo.getContext("2d");
Jcontexto_ojo.drawImage(Jimg_ojo,0,0)

var Jpato = document.getElementById("pato");
var Jimg_pato = new Image();
Jimg_pato.src = "./imagen/pato.png";
var Jcontexto_pato = Jpato.getContext("2d");
Jcontexto_pato.drawImage(Jimg_pato,0,0)

var Jgato = document.getElementById("gato");
var Jimg_gato = new Image();
Jimg_gato.src = "./imagen/gato.png";
var Jcontexto_gato = Jgato.getContext("2d");
Jcontexto_gato.drawImage(Jimg_gato,0,0)

// variables


var Jaudio_element_correcto = document.createElement('audio');

var R_ojo = 0;
var R_estrella = 0;
var R_pato = 0;
var R_fresa = 0;
var Rcantidad_correcta = 0;
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


	
}


function dragStop(event) {


  if (

	document.getElementById('espejo').getBoundingClientRect().top < document.getElementById('ojo').getBoundingClientRect().top && 
	document.getElementById('espejo').getBoundingClientRect().left <= document.getElementById('ojo').getBoundingClientRect().left && 
	document.getElementById('espejo').getBoundingClientRect().left +200 >= document.getElementById('ojo').getBoundingClientRect().left 
	&&
	document.getElementById('espejo').getBoundingClientRect().top +150 > document.getElementById('ojo').getBoundingClientRect().top
	) {
  		
			if(R_ojo == 0){
				R_ojo++;
				Rcantidad_correcta++;
				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
				Jaudio_element_correcto.play();
			}
  			
			// iniciamos el audio
				
	

}
if (

	document.getElementById('botella').getBoundingClientRect().top < document.getElementById('estrella').getBoundingClientRect().top && 
	document.getElementById('botella').getBoundingClientRect().left <= document.getElementById('estrella').getBoundingClientRect().left && 
	document.getElementById('botella').getBoundingClientRect().left +200 >= document.getElementById('estrella').getBoundingClientRect().left 
	&&
	document.getElementById('botella').getBoundingClientRect().top +150 > document.getElementById('estrella').getBoundingClientRect().top
	) {
  			if(R_estrella == 0){
  				R_estrella++;
  				Rcantidad_correcta++;
  				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  				Jaudio_element_correcto.play();
  			}
  			
  		


}
if (

	document.getElementById('gato').getBoundingClientRect().top < document.getElementById('pato').getBoundingClientRect().top && 
	document.getElementById('gato').getBoundingClientRect().left <= document.getElementById('pato').getBoundingClientRect().left && 
	document.getElementById('gato').getBoundingClientRect().left +200 >= document.getElementById('pato').getBoundingClientRect().left 
	&&
	document.getElementById('gato').getBoundingClientRect().top +150 > document.getElementById('pato').getBoundingClientRect().top
	) {
	
  			if (R_pato == 0) {
  				R_pato++;
  				Rcantidad_correcta++;
  				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  				Jaudio_element_correcto.play();
  			}
  			
  

}
  if (

	document.getElementById('rosa').getBoundingClientRect().top < document.getElementById('fresa').getBoundingClientRect().top && 
	document.getElementById('rosa').getBoundingClientRect().left <= document.getElementById('fresa').getBoundingClientRect().left && 
	document.getElementById('rosa').getBoundingClientRect().left +200 >= document.getElementById('fresa').getBoundingClientRect().left 
	&&
	document.getElementById('rosa').getBoundingClientRect().top +150 > document.getElementById('fresa').getBoundingClientRect().top
	) {
  		
  			if (R_fresa == 0) {
  				R_fresa++;
  				Rcantidad_correcta++;
  				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  				Jaudio_element_correcto.play();
  			}
  			
  		
	
		

}

if (Rcantidad_correcta==4) {
 	document.getElementById("imagenes").innerHTML = "¡Pasaste al Siguiente Nivel!";
 	document.getElementById("div_centro").innerHTML = '<a  class="btn btn-primary btn-modify" href="modificarD.php" id="palabras"> Siguiente Nivel</a>';

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






function elemento(e){
  if (e.srcElement){
	  tag = e.srcElement.tagName;
  	tag =e.target.id;
  	
  }


// faltan los sonidos



 if (tag == 'ojo' ) {

		J_imagen = tag;
		
}	else if (tag=='pato' ) {
	J_imagen=tag;
	
}else if (tag=='espejo' ) {
	J_imagen=tag;
	
}else if (tag=='estrella' ) {
	J_imagen=tag;
	
}else if (tag=='fresa' ) {
	J_imagen=tag;
	
}else if (tag=='rosa' ) {
	J_imagen=tag;
	
}else if (tag=='botella' ) {
	J_imagen=tag;
	
}else if (tag=='gato' ) {
	J_imagen=tag;
	
}
}

document.getElementById('palabras').addEventListener("click",function(){     
      if (J_imagen == 'ojo') {        
        Jaudio_element_correcto.setAttribute('src', './sonidos/ojov.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='pato'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/pato.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='espejo'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/espejo.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='estrella'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/estrella.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='fresa'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/fresa.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='rosa'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/rosa.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='botella'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/botella.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='gato'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/gato.mp3');
        Jaudio_element_correcto.play();
      }
    })