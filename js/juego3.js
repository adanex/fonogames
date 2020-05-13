//aqui es donde va a ir agregando las imagenes
//cada bloque es para una imagen 
//imagenes del canvas
var Jpina = document.getElementById("pina");
var Jimg_pina = new Image();
Jimg_pina.src = "./imagen/pina2.png";
var Jcontexto_pina = Jpina.getContext("2d");
Jcontexto_pina.drawImage(Jimg_pina,0,0)

var Jpizarron = document.getElementById("pizarron");
var Jimg_pizarron = new Image();
Jimg_pizarron.src = "./imagen/pizarron.png";
var Jcontexto_pizarron = Jpizarron.getContext("2d");
Jcontexto_pizarron.drawImage(Jimg_pizarron,0,0)

var Jgrillo = document.getElementById("grillo");
var Jimg_grillo = new Image();
Jimg_grillo.src = "./imagen/grillo.png";
var Jcontexto_grillo = grillo.getContext("2d");
Jcontexto_grillo.drawImage(Jimg_grillo,0,0)

var Jgrifo = document.getElementById("grifo");
var Jimg_grifo = new Image();
Jimg_grifo.src = "./imagen/grifo.png";
var Jcontexto_grifo = Jgrifo.getContext("2d");
Jcontexto_grifo.drawImage(Jimg_grifo,0,0)

var Jzapatos = document.getElementById("zapatos");
var Jimg_zapatos = new Image();
Jimg_zapatos.src = "./imagen/zapatos.png";
var Jcontexto_zapatos = Jzapatos.getContext("2d");
Jcontexto_zapatos.drawImage(Jimg_zapatos,0,0)

var Jzanahoria = document.getElementById("zanahoria");
var Jimg_zanahoria = new Image();
Jimg_zanahoria.src = "./imagen/zanahoria.png";
var Jcontexto_zanahoria = Jzanahoria.getContext("2d");
Jcontexto_zanahoria.drawImage(Jimg_zanahoria,0,0)

var Jlapiz = document.getElementById("lapiz");
var Jimg_lapiz = new Image();
Jimg_lapiz.src = "./imagen/lapiz.png";
var Jcontexto_lapiz = Jlapiz.getContext("2d");
Jcontexto_lapiz.drawImage(Jimg_lapiz,0,0)

var Jlavadora = document.getElementById("lavadora");
var Jimg_lavadora = new Image();
Jimg_lavadora.src = "./imagen/lavadora.png";
var Jcontexto_lavadora = Jlavadora.getContext("2d");
Jcontexto_lavadora.drawImage(Jimg_lavadora,0,0)

// variables

var Jaudio_element_correcto = document.createElement('audio');


var R_pina = 0;
var R_grillo = 0;
var R_zapatos = 0;
var R_lapiz = 0;
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

	document.getElementById('pizarron').getBoundingClientRect().top < document.getElementById('pina').getBoundingClientRect().top && 
	document.getElementById('pizarron').getBoundingClientRect().left <= document.getElementById('pina').getBoundingClientRect().left && 
	document.getElementById('pizarron').getBoundingClientRect().left +100 >= document.getElementById('pina').getBoundingClientRect().left 
	&&
	document.getElementById('pizarron').getBoundingClientRect().top +150 > document.getElementById('pina').getBoundingClientRect().top
	) {
  		
			if(R_pina == 0){
				R_pina++;
				Rcantidad_correcta++;
				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
				Jaudio_element_correcto.play();
			}
  			
			// iniciamos el audio
				
	

}
if (

	document.getElementById('lavadora').getBoundingClientRect().top < document.getElementById('lapiz').getBoundingClientRect().top && 
	document.getElementById('lavadora').getBoundingClientRect().left <= document.getElementById('lapiz').getBoundingClientRect().left && 
	document.getElementById('lavadora').getBoundingClientRect().left +200 >= document.getElementById('lapiz').getBoundingClientRect().left 
	&&
	document.getElementById('lavadora').getBoundingClientRect().top +150 > document.getElementById('lapiz').getBoundingClientRect().top
	) {
  			if(R_grillo == 0){
  				R_grillo++;
  				Rcantidad_correcta++;
  				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  				Jaudio_element_correcto.play();
  			}
  			
  		


}
if (

	document.getElementById('zanahoria').getBoundingClientRect().top < document.getElementById('zapatos').getBoundingClientRect().top && 
	document.getElementById('zanahoria').getBoundingClientRect().left <= document.getElementById('zapatos').getBoundingClientRect().left && 
	document.getElementById('zanahoria').getBoundingClientRect().left +200 >= document.getElementById('zapatos').getBoundingClientRect().left 
	&&
	document.getElementById('zanahoria').getBoundingClientRect().top +150 > document.getElementById('zapatos').getBoundingClientRect().top
	) {
	
  			if (R_zapatos == 0) {
  				R_zapatos++;
  				Rcantidad_correcta++;
  				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  				Jaudio_element_correcto.play();
  			}
  			
  

}
  if (

	document.getElementById('grifo').getBoundingClientRect().top < document.getElementById('grillo').getBoundingClientRect().top && 
	document.getElementById('grifo').getBoundingClientRect().left <= document.getElementById('grillo').getBoundingClientRect().left && 
	document.getElementById('grifo').getBoundingClientRect().left +200 >= document.getElementById('grillo').getBoundingClientRect().left 
	&&
	document.getElementById('grifo').getBoundingClientRect().top +150 > document.getElementById('grillo').getBoundingClientRect().top
	) {
  		
  			if (R_lapiz == 0) {
  				R_lapiz++;
  				Rcantidad_correcta++;
  				Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  				Jaudio_element_correcto.play();
  			}
  			
  		
	
		

}

if (Rcantidad_correcta==4) {
 	document.getElementById("imagenes").innerHTML = "¡Pasaste al Siguiente Nivel!";
 	document.getElementById("div_centro").innerHTML = '<a  class="btn btn-primary btn-modify" href="modificarC.php" id="palabras"> Siguiente Nivel</a>';

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



 if (tag == 'pina' ) {

    J_imagen = tag;
    
} else if (tag=='grillo' ) {
  J_imagen=tag;
  
}else if (tag=='zapatos' ) {
  J_imagen=tag;
  
}else if (tag=='lapiz' ) {
  J_imagen=tag;
  
}else if (tag=='lavadora' ) {
  J_imagen=tag;
  
}else if (tag=='zanahoria' ) {
  J_imagen=tag;
  
}else if (tag=='grifo' ) {
  J_imagen=tag;
  
}else if (tag=='pizarron' ) {
  J_imagen=tag;
  
}

}
document.getElementById('palabras').addEventListener("click",function(){     
      if (J_imagen == 'pina') {        
        Jaudio_element_correcto.setAttribute('src', './sonidos/pina.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='grillo'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/grillo.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='zapatos'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/zapato.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='lapiz'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/lapiz.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='lavadora'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/lavadora.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='zanahoria'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/zanahoria.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='grifo'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/grifo.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='pizarron'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/pizarron.mp3');
        Jaudio_element_correcto.play();
      }
    })