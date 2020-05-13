
//aqui es donde va a ir agregando las imagenes
//cada bloque es para una imagen 
//imagenes del canvas
var Jojo = document.getElementById("ojo");
var Jimg_ojo = new Image();
Jimg_ojo.src = "./imagen/ojo.png";
var Jcontexto_ojo = Jojo.getContext("2d");
Jcontexto_ojo.drawImage(Jimg_ojo,0,0)

var Jsal = document.getElementById("sal");
var Jimg_sal = new Image();
Jimg_sal.src = "./imagen/sal.png";
var Jcontexto_sal = Jsal.getContext("2d");
Jcontexto_sal.drawImage(Jimg_sal,0,0)

var Jcasa = document.getElementById("casa");
var Jimg_casa = new Image();
Jimg_casa.src = "./imagen/casa.png";
var Jcontexto_casa = casa.getContext("2d");
Jcontexto_casa.drawImage(Jimg_casa,0,0)

var Jhoja = document.getElementById("hoja");
var Jimg_hoja = new Image();
Jimg_hoja.src = "./imagen/hoja.png";
var Jcontexto_hoja = Jhoja.getContext("2d");
Jcontexto_hoja.drawImage(Jimg_hoja,0,0)

var Jtijeras = document.getElementById("tijeras");
var Jimg_tijeras = new Image();
Jimg_tijeras.src = "./imagen/tijeras.png";
var Jcontexto_tijeras = Jtijeras.getContext("2d");
Jcontexto_tijeras.drawImage(Jimg_tijeras,0,0)

var Jsilla = document.getElementById("silla");
var Jimg_silla = new Image();
Jimg_silla.src = "./imagen/silla.png";
var Jcontexto_silla = Jsilla.getContext("2d");
Jcontexto_silla.drawImage(Jimg_silla,0,0)

var Jnube = document.getElementById("nube");
var Jimg_nube = new Image();
Jimg_nube.src = "./imagen/nube.png";
var Jcontexto_nube = Jnube.getContext("2d");
Jcontexto_nube.drawImage(Jimg_nube,0,0)

var Jlentes = document.getElementById("lentes");
var Jimg_lentes = new Image();
Jimg_lentes.src = "./imagen/lentes.png";
var Jcontexto_lentes = Jlentes.getContext("2d");
Jcontexto_lentes.drawImage(Jimg_lentes,0,0)



//variables a usar 
var J_imagen;
var J_ojo=0;
var J_sal=0;
var J_casa=0;
var J_hoja=0;
var J_tijeras=0;
var J_silla=0;
var J_nube=0;
var J_lentes=0;
var Jcontador_correcto=0;
var Jaudio_element_correcto = document.createElement('audio');









// funciones del nivel 2

function elemento(e){
  if (e.srcElement){
	  tag = e.srcElement.tagName;
  	tag =e.target.id;
  	
  }


 if (tag == 'ojo' || tag == 'R_ojo') {

		J_imagen = tag;
		
}	else if (tag=='sal' || tag=='R_sal') {
	J_imagen=tag;
	
}else if (tag=='casa' || tag=='R_casa') {
	J_imagen=tag;
	
}else if (tag=='hoja' || tag=='R_hoja') {
	J_imagen=tag;
	
}else if (tag=='tijeras' || tag=='R_tijeras') {
	J_imagen=tag;
	
}else if (tag=='silla' || tag=='R_silla') {
	J_imagen=tag;
	
}else if (tag=='nube' || tag=='R_nube') {
	J_imagen=tag;
	
}else if (tag=='lentes' || tag=='R_lentes') {
	J_imagen=tag;
	
}
}

		function validar(e) {

  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==13){
  
  	if (J_imagen == 'R_ojo') {
		
		if (document.getElementById('R_ojo').value == 2 && J_ojo==0) {
			J_ojo++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();

		}

	}else if (J_imagen=='R_sal'){
		if (document.getElementById('R_sal').value == 1 && J_sal==0) {
			J_sal++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}

	}else if (J_imagen=='R_casa'){
			if (document.getElementById('R_casa').value == 2 && J_casa==0) {
			J_casa++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}

	}else if (J_imagen=='R_hoja'){
			if (document.getElementById('R_hoja').value == 2 && J_hoja==0) {
			J_hoja++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}

	}else if (J_imagen=='R_tijeras'){
			if (document.getElementById('R_tijeras').value == 3 && J_tijeras==0) {
			J_tijeras++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}

	}else if (J_imagen=='R_silla'){
				if (document.getElementById('R_silla').value == 2 && J_silla==0) {
			J_silla++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}

	}else if (J_imagen=='R_nube'){
				if (document.getElementById('R_nube').value == 2 && J_nube==0) {
			J_nube++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}

	}else if (J_imagen=='R_lentes'){
				if (document.getElementById('R_ojo').value == 2 && J_lentes==0) {
			J_lentes++;
			Jcontador_correcto++;
			Jaudio_element_correcto.setAttribute('src', './sonidos/correcto.mp3');
  			Jaudio_element_correcto.play();
		}
	}
  	
  }
   
   if (Jcontador_correcto==8) {
   	document.getElementById("imagenes").innerHTML = "¡Pasaste al Siguiente Nivel!";
 	document.getElementById("div_centro").innerHTML = '<a  class="btn btn-primary btn-modify" href="modificarB.php" id="palabras"> Siguiente Nivel</a>';
   }
}

document.getElementById('palabras').addEventListener("click",function(){     
      if (J_imagen == 'ojo') {        
        Jaudio_element_correcto.setAttribute('src', './sonidos/ojo.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='sal'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/sal.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='casa'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/casa.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='hoja'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/hoja.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='tijeras'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/tijeras.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='silla'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/silla.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='nube'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/nube.mp3');
        Jaudio_element_correcto.play();
      }else if (J_imagen=='lentes'){
        Jaudio_element_correcto.setAttribute('src', './sonidos/lentes.mp3');
        Jaudio_element_correcto.play();
      }
    })