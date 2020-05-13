<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Nivel 2</title>
	<link rel="stylesheet" type="text/css" href="css/estolo2.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

</head>
<body id="fondo" onmousedown="elemento(event);" class="hyphenation">

<div id="div_fonogame_text" class="hyphenation">
			
		<h1>FonoGames</h1>

	</div>
<div id="div_general">

	

	<div id="div_lateral_izquierdo" >

		El juego consiste en escribir abajo de las imagenes el numero correcto de silabas despues de haberle escrito lo que creas que es correcto deberas presionar enter y si es correcta sonara
		<br>
		<br>
		Si requieres ayuda click a la imagen y luego al botos pistas donde sonaran aplausos dependiendo de lo que hay en la imagen
	</div>

	<div id="div_centro">
		<div id="imagenes" class="contenedor" >
			<canvas class="estilo_imagen" id="ojo" >
				
			</canvas>
			<canvas class="estilo_imagen" id="sal" >
				
			</canvas>
			<canvas class="estilo_imagen" id="casa" >
				
			</canvas>
			<canvas class="estilo_imagen" id="hoja" >
				
			</canvas>
			<input type="text" class="estilo_text" id="R_ojo" onkeypress="validar(event)">
			<input type="text" class="estilo_text" id="R_sal" onkeypress="validar(event)">
			<input type="text" class="estilo_text" id="R_casa" onkeypress="validar(event)">
			<input type="text" class="estilo_text" id="R_hoja" onkeypress="validar(event)">
		</div>

		<div id="tabla" class="contenedor" >
			<canvas class="estilo_imagen" id="tijeras" >
				
			</canvas>
			<canvas class="estilo_imagen" id="silla" >
				
			</canvas>
			<canvas class="estilo_imagen" id="nube" >
				
			</canvas>
			<canvas class="estilo_imagen" id="lentes" >
				
			</canvas>
			<input type="text" class="estilo_text" id="R_tijeras" onkeypress="validar(event)">
			<input type="text" class="estilo_text" id="R_silla" onkeypress="validar(event)">
			<input type="text" class="estilo_text" id="R_nube" onkeypress="validar(event)">
			<input type="text" class="estilo_text" id="R_lentes" onkeypress="validar(event)">
			
		</div>
			
	
	</div>

	<div id="div_lateral_derecho" class="hyphenation buttons" >
		 
        <a class="btn red" id="palabra" >Pista</a>
        
        <a class="btn yellow" id="recargar"  onclick="javascript:window.location.reload();">Recargar</a>

  
	</div>

	
</div>
<script src="js/juego2.js"></script>
</body>
</html>