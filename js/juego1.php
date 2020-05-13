/*Adan Gutierrez
	codigo para el juego donde se arrastran las iagenes al lugar donde 
	sea la cantidad de silavas

*/

<script >
document.addEventListener('DOMContentLoaded',function(){

},false);


//aqui es donde va a ir agregando las imagenes
//cada bloque es para una imagen :v
//imagenes del canvas
var Jgato = document.getElementById("gato");
var Jimg_gato = new Image();
Jimg_gato.src = "./imagen/gato.png";
var Jcontexto_gato = Jgato.getContext("2d");
Jcontexto_gato.drawImage(Jimg_gato,0,0)

var Jpelota = document.getElementById("pelota");
var Jimg_pelota = new Image();
Jimg_pelota.src = "./imagen/pelota.png";
var Jcontexto_pelota = Jpelota.getContext("2d");
Jcontexto_pelota.drawImage(Jimg_pelota,0,0)

var Jlibro = document.getElementById("libro");
var Jimg_libro = new Image();
Jimg_libro.src = "./imagen/libro.png";
var Jcontexto_libro = Jlibro.getContext("2d");
Jcontexto_libro.drawImage(Jimg_libro,0,0)

var Jpan = document.getElementById("pan");
var Jimg_pan = new Image();
Jimg_pan.src = "./imagen/pan.png";
var Jcontexto_pan = Jpan.getContext("2d");
Jcontexto_pan.drawImage(Jimg_pan,0,0)

var Jpescado = document.getElementById("pescado");
var Jimg_pescado = new Image();
Jimg_pescado.src = "./imagen/pescado.png";
var Jcontexto_pescado = Jpescado.getContext("2d");
Jcontexto_pescado.drawImage(Jimg_pescado,0,0)

var Jcarro = document.getElementById("carro");
var Jimg_carro = new Image();
Jimg_carro.src = "./imagen/carro.png";
var Jcontexto_carro = Jcarro.getContext("2d");
Jcontexto_carro.drawImage(Jimg_carro,0,0)

//variables
var imagen;
var Jcontador_correcto = 0;
var Jcontador_gato =0;
var Jcontador_libro =0;
var Jcontador_carro =0;
var Jcontador_pescado =0;
var Jcontador_pan =0;
var Jcontador_pelota =0;


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

	document.getElementById('silaba2').getBoundingClientRect().top < document.getElementById('gato').getBoundingClientRect().top && 
	document.getElementById('silaba2').getBoundingClientRect().left <= document.getElementById('gato').getBoundingClientRect().left && 
	document.getElementById('silaba2').getBoundingClientRect().left +45 >= document.getElementById('gato').getBoundingClientRect().left 
	&&
	document.getElementById('silaba2').getBoundingClientRect().top +125 > document.getElementById('gato').getBoundingClientRect().top
	) {
  		if (Jcontador_gato == 0) {
  			Jcontador_gato=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			audioElement.setAttribute('src', './sonidos/correcto.mp3');
  			audioElement.play();
  		}
	
			// iniciamos el audio
				
	document.getElementById('silaba2').style.backgroundColor='#41FFDF';

}
if (

	document.getElementById('silaba2').getBoundingClientRect().top < document.getElementById('carro').getBoundingClientRect().top && 
	document.getElementById('silaba2').getBoundingClientRect().left <= document.getElementById('carro').getBoundingClientRect().left && 
	document.getElementById('silaba2').getBoundingClientRect().left +45 >= document.getElementById('carro').getBoundingClientRect().left 
	&&
	document.getElementById('silaba2').getBoundingClientRect().top +125 > document.getElementById('carro').getBoundingClientRect().top
	) {if (Jcontador_carro == 0) {
  			Jcontador_carro=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			audioElement.setAttribute('src', './sonidos/correcto.mp3');
  			audioElement.play();
  		}
	document.getElementById('silaba2').style.backgroundColor='#41FFDF';


}
if (

	document.getElementById('silaba2').getBoundingClientRect().top < document.getElementById('libro').getBoundingClientRect().top && 
	document.getElementById('silaba2').getBoundingClientRect().left <= document.getElementById('libro').getBoundingClientRect().left && 
	document.getElementById('silaba2').getBoundingClientRect().left +45 >= document.getElementById('libro').getBoundingClientRect().left 
	&&
	document.getElementById('silaba2').getBoundingClientRect().top +125 > document.getElementById('libro').getBoundingClientRect().top
	) {
	if (Jcontador_libro == 0) {
  			Jcontador_libro=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			audioElement.setAttribute('src', './sonidos/correcto.mp3');
  			audioElement.play();
  		}
	document.getElementById('silaba2').style.backgroundColor='#41FFDF';

}
  if (

	document.getElementById('silaba1').getBoundingClientRect().top < document.getElementById('pan').getBoundingClientRect().top && 
	document.getElementById('silaba1').getBoundingClientRect().left <= document.getElementById('pan').getBoundingClientRect().left && 
	document.getElementById('silaba1').getBoundingClientRect().left +45 >= document.getElementById('pan').getBoundingClientRect().left 
	&&
	document.getElementById('silaba1').getBoundingClientRect().top +125 > document.getElementById('pan').getBoundingClientRect().top
	) {
  		if (Jcontador_pan == 0) {
  			Jcontador_pan=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			audioElement.setAttribute('src', './sonidos/correcto.mp3');
  			audioElement.play();
  		}
	
			// iniciamos el audio
				
	document.getElementById('silaba1').style.backgroundColor='#41FFDF';

}
if (

	document.getElementById('silaba3').getBoundingClientRect().top < document.getElementById('pelota').getBoundingClientRect().top && 
	document.getElementById('silaba3').getBoundingClientRect().left <= document.getElementById('pelota').getBoundingClientRect().left && 
	document.getElementById('silaba3').getBoundingClientRect().left +45 >= document.getElementById('pelota').getBoundingClientRect().left 
	&&
	document.getElementById('silaba3').getBoundingClientRect().top +125 > document.getElementById('pelota').getBoundingClientRect().top
	) {if (Jcontador_pelota == 0) {
  			Jcontador_pelota=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			audioElement.setAttribute('src', './sonidos/correcto.mp3');
  			audioElement.play();
  		}
	document.getElementById('silaba3').style.backgroundColor='#41FFDF';


}
if (

	document.getElementById('silaba3').getBoundingClientRect().top < document.getElementById('pescado').getBoundingClientRect().top && 
	document.getElementById('silaba3').getBoundingClientRect().left <= document.getElementById('pescado').getBoundingClientRect().left && 
	document.getElementById('silaba3').getBoundingClientRect().left +45 >= document.getElementById('pescado').getBoundingClientRect().left 
	&&
	document.getElementById('silaba3').getBoundingClientRect().top +125 > document.getElementById('pescado').getBoundingClientRect().top
	) {
	if (Jcontador_pescado == 0) {
  			Jcontador_pescado=1;
  			Jcontador_correcto=Jcontador_correcto+1;
  			audioElement.setAttribute('src', './sonidos/correcto.mp3');
  			audioElement.play();
  		}
	document.getElementById('silaba3').style.backgroundColor='#41FFDF';

}

if (Jcontador_correcto==6) {
 	document.getElementById("imagenes").innerHTML = "¡Pasaste al Siguiente Nivel!";
 	document.getElementById("div_lateral_derecho").innerHTML = '<a class="btn red" id="Sig_Niv" href="game_page2.php">Siguiente Nivel</a>';
  var xhr = new XMLHttpRequest();
 
    xhr.open("GET","educado.txt",true);
    xhr.send();
 
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("parrafo").innerHTML = xhr.responseText;
        }
    }
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


 if (tag == 'gato') {

		imagen = tag;
		
}	else if (tag=='pelota') {
	imagen=tag;
	
}else if (tag=='pan') {
	imagen=tag;
	
}else if (tag=='libro') {
	imagen=tag;
	
}else if (tag=='pescado') {
	imagen=tag;
	
}else if (tag=='carro') {
	imagen=tag;
	
}
		}
//seleccion de los audios

			//  objeto audio
		var audioElement = document.createElement('audio');


		document.getElementById('palabra').addEventListener("click",function(){
			if (imagen == 'gato') {
			
			// Si deseamos que inicie siempre desde el principio
			//audioElement.currentTime = 0;
			// aqui va la ruta de las canciones
 				audioElement.setAttribute('src', './sonidos/gato.mp3');
			// iniciamos el audio
				audioElement.play();
		
			}else if (imagen=='pelota'){
				audioElement.setAttribute('src', './sonidos/pelota.mp3');
			audioElement.play();
			}else if (imagen=='libro'){
				audioElement.setAttribute('src', './sonidos/libro.mp3');
			audioElement.play();
			}else if (imagen=='carro'){
				audioElement.setAttribute('src', './sonidos/carro.mp3');
			audioElement.play();
			}else if (imagen=='pan'){
				audioElement.setAttribute('src', './sonidos/pan.mp3');
			audioElement.play();
			}else if (imagen=='pescado'){
				audioElement.setAttribute('src', './sonidos/pescado.mp3');
			audioElement.play();
			}
		})
  
	
 var elemento1 = document.getElementById('silaba1');
var posicion1 = elemento1.getBoundingClientRect();

var elemento2 = document.getElementById('silaba2');
var posicion2 = elemento2.getBoundingClientRect();


		</script>
 
		
		
