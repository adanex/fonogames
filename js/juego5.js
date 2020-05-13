/*Adan Gutierrez
	codigo para el juego donde se arrastran las iagenes al lugar donde 
	sea la cantidad de silavas

*/


document.addEventListener('DOMContentLoaded',function(){


},false);


//aqui es donde va a ir agregando las imagenes
//cada bloque es para una imagen :v
//imagenes del canvas
var Jarbol = document.getElementById("arbol");
var Jimg_arbol = new Image();
Jimg_arbol.src = "./imagen/arbol.png";
var Jcontexto_arbol = Jarbol.getContext("2d");
Jcontexto_arbol.drawImage(Jimg_arbol,0,0)

var Jcama = document.getElementById("cama");
var Jimg_cama = new Image();
Jimg_cama.src = "./imagen/cama.png";
var Jcontexto_cama = Jcama.getContext("2d");
Jcontexto_cama.drawImage(Jimg_cama,0,0)

var Jmesa = document.getElementById("mesa");
var Jimg_mesa = new Image();
Jimg_mesa.src = "./imagen/mesa.png";
var Jcontexto_mesa = Jmesa.getContext("2d");
Jcontexto_mesa.drawImage(Jimg_mesa,0,0)

var Jdado = document.getElementById("dado");
var Jimg_dado = new Image();
Jimg_dado.src = "./imagen/dado.png";
var Jcontexto_dado = Jdado.getContext("2d");
Jcontexto_dado.drawImage(Jimg_dado,0,0)

var Jsol = document.getElementById("sol");
var Jimg_sol = new Image();
Jimg_sol.src = "./imagen/sol.png";
var Jcontexto_sol = Jsol.getContext("2d");
Jcontexto_sol.drawImage(Jimg_sol,0,0)

var Jcopa = document.getElementById("copa");
var Jimg_copa = new Image();
Jimg_copa.src = "./imagen/copa.png";
var Jcontexto_copa = Jcopa.getContext("2d");
Jcontexto_copa.drawImage(Jimg_copa,0,0)

var Jflor = document.getElementById("flor");
var Jimg_flor = new Image();
Jimg_flor.src = "./imagen/flor.png";
var Jcontexto_flor = Jflor.getContext("2d");
Jcontexto_flor.drawImage(Jimg_flor,0,0)

var Jpie = document.getElementById("pie");
var Jimg_pie = new Image();
Jimg_pie.src = "./imagen/pie.png";
var Jcontexto_pie = Jpie.getContext("2d");
Jcontexto_pie.drawImage(Jimg_pie,0,0)
//variables
var imagen;
var Jcontador_correcto = 0;
var Jcontador_arbol =0;
var Jcontador_cama =0;
var Jcontador_mesa =0;
var Jcontador_dado =0;
var Jcontador_sol =0;
var Jcontador_copa =0;
var Jcontador_flor =0;
var Jcontador_pie =0;
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

	document.getElementById('l').getBoundingClientRect().top < document.getElementById('arbol').getBoundingClientRect().top && 
	document.getElementById('l').getBoundingClientRect().left <= document.getElementById('arbol').getBoundingClientRect().left && 
	document.getElementById('l').getBoundingClientRect().left +200 >= document.getElementById('arbol').getBoundingClientRect().left 
	&&
	document.getElementById('l').getBoundingClientRect().top +150 > document.getElementById('arbol').getBoundingClientRect().top
	) {
  		if (Jcontador_arbol == 0) {
        var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
  			Jcontador_arbol=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			
  			Jaudio_element_correcto.play();
  		}
	
			// iniciamos el audio
				
	document.getElementById('l').style.backgroundColor='#41FFDF';

}
if (

	document.getElementById('m').getBoundingClientRect().top <       document.getElementById('mesa').getBoundingClientRect().top && 
	document.getElementById('m').getBoundingClientRect().left <=     document.getElementById('mesa').getBoundingClientRect().left && 
	document.getElementById('m').getBoundingClientRect().left +200 >= document.getElementById('mesa').getBoundingClientRect().left 
	&&
	document.getElementById('m').getBoundingClientRect().top +150 >  document.getElementById('mesa').getBoundingClientRect().top
	) {if (Jcontador_mesa == 0) {
  var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
  			Jcontador_mesa=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('m').style.backgroundColor='#41FFDF';


}
if (

	document.getElementById('d').getBoundingClientRect().top < document.getElementById('dado').getBoundingClientRect().top && 
	document.getElementById('d').getBoundingClientRect().left <= document.getElementById('dado').getBoundingClientRect().left && 
	document.getElementById('d').getBoundingClientRect().left +200 >= document.getElementById('dado').getBoundingClientRect().left 
	&&
	document.getElementById('d').getBoundingClientRect().top +150 > document.getElementById('dado').getBoundingClientRect().top
	) {
	if (Jcontador_dado == 0) {
    var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
  			Jcontador_dado=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('d').style.backgroundColor='#41FFDF';

}
  if (

	document.getElementById('s').getBoundingClientRect().top < document.getElementById('sol').getBoundingClientRect().top && 
	document.getElementById('s').getBoundingClientRect().left <= document.getElementById('sol').getBoundingClientRect().left && 
	document.getElementById('s').getBoundingClientRect().left +200 >= document.getElementById('sol').getBoundingClientRect().left 
	&&
	document.getElementById('s').getBoundingClientRect().top +150 > document.getElementById('sol').getBoundingClientRect().top
	) {
  		if (Jcontador_sol == 0) {
        var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
  			Jcontador_sol =1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			
  			Jaudio_element_correcto.play();
  		}
	
			// iniciamos el audio
				
	document.getElementById('s').style.backgroundColor='#41FFDF';

}
if (

	document.getElementById('p').getBoundingClientRect().top < document.getElementById('copa').getBoundingClientRect().top && 
	document.getElementById('p').getBoundingClientRect().left <= document.getElementById('copa').getBoundingClientRect().left && 
	document.getElementById('p').getBoundingClientRect().left +200 >= document.getElementById('copa').getBoundingClientRect().left 
	&&
	document.getElementById('p').getBoundingClientRect().top +150 > document.getElementById('copa').getBoundingClientRect().top
	) {if (Jcontador_copa  == 0) {
  var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
  			Jcontador_copa =1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('p').style.backgroundColor='#41FFDF';
}

if(
	document.getElementById('l').getBoundingClientRect().top < document.getElementById('flor').getBoundingClientRect().top && 
	document.getElementById('l').getBoundingClientRect().left <= document.getElementById('flor').getBoundingClientRect().left && 
	document.getElementById('l').getBoundingClientRect().left +200 >= document.getElementById('flor').getBoundingClientRect().left 
	&&
	document.getElementById('l').getBoundingClientRect().top +150 > document.getElementById('flor').getBoundingClientRect().top
	) {
	if (Jcontador_flor == 0) {
    var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
  			Jcontador_flor=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			
  			Jaudio_element_correcto.play();
  		}
	document.getElementById('l').style.backgroundColor='#41FFDF';

}
if(
  document.getElementById('m').getBoundingClientRect().top < document.getElementById('cama').getBoundingClientRect().top && 
  document.getElementById('m').getBoundingClientRect().left <= document.getElementById('cama').getBoundingClientRect().left && 
  document.getElementById('m').getBoundingClientRect().left +200 >= document.getElementById('cama').getBoundingClientRect().left 
  &&
  document.getElementById('m').getBoundingClientRect().top +150 > document.getElementById('cama').getBoundingClientRect().top
  ) {
  if (Jcontador_cama == 0) {
    var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
        Jcontador_cama=1;
        Jcontador_correcto=Jcontador_correcto+1;
        
        Jaudio_element_correcto.play();
      }
  document.getElementById('m').style.backgroundColor='#41FFDF';

}
if(
  document.getElementById('p').getBoundingClientRect().top < document.getElementById('pie').getBoundingClientRect().top && 
  document.getElementById('p').getBoundingClientRect().left <= document.getElementById('pie').getBoundingClientRect().left && 
  document.getElementById('p').getBoundingClientRect().left +200 >= document.getElementById('pie').getBoundingClientRect().left 
  &&
  document.getElementById('p').getBoundingClientRect().top +150 > document.getElementById('pie').getBoundingClientRect().top
  ) {
  if (Jcontador_pie == 0) {
    var porId=document.getElementById("progreso").value;
        
        document.getElementById("progreso").value = porId+10;
        Jcontador_pie=1;
        Jcontador_correcto=Jcontador_correcto+1;
        
        Jaudio_element_correcto.play();
      }
  document.getElementById('p').style.backgroundColor='#41FFDF';

}

if (Jcontador_correcto==8) {
 	document.getElementById("imagenes").innerHTML = "¡Pasaste al Siguiente Nivel!";
 	document.getElementById("div_centro").innerHTML = '<a  class="btn btn-primary btn-modify" href="modificarE.php" id="palabras"> Siguiente Nivel</a>';

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


 if (tag == 'arbol') {

		imagen = tag;
		
}	else if (tag=='mesa') {
	imagen=tag;
	
}else if (tag=='dado') {
	imagen=tag;
	
}else if (tag=='sol') {
	imagen=tag;
	
}else if (tag=='cama') {
	imagen=tag;
	
}else if (tag=='copa') {
	imagen=tag;
	
}else if (tag=='flor') {
  imagen=tag;
  
}else if (tag=='pie') {
  imagen=tag;
  
}
		}
//seleccion de los audios

			//  objeto audio
		


		document.getElementById('palabras').addEventListener("click",function(){			
      if (imagen == 'arbol') { 				
        Jaudio_element_correcto.setAttribute('src', './sonidos/arbol.mp3');
				Jaudio_element_correcto.play();
			}else if (imagen=='mesa'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/mesa.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='dado'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/dado.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='sol'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/sol.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='cama'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/cama.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='copa'){
				Jaudio_element_correcto.setAttribute('src', './sonidos/copa.mp3');
			  Jaudio_element_correcto.play();
			}else if (imagen=='flor'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/flor.mp3');
        Jaudio_element_correcto.play();
      }else if (imagen=='pie'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/pie.mp3');
        Jaudio_element_correcto.play();
      }
		})
  
	

