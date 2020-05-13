<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Nivek 4</title>
	<link rel="stylesheet" type="text/css" href="css/estilo4.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

</head>
<body id="fondo" onmousedown="elemento(event);" class="hyphenation">

<div id="div_fonogame_text" class="hyphenation">
			
		<h1>FonoGames</h1>

	</div>
<div id="div_general">

	

	<div id="div_lateral_izquierdo" >

		El juego consiste en arrastras las imagenes de la izquierda hacia la imagen donde la primer silaba sea la misma 
		<br>
		<br>
		Si requieres ayuda click a la imagen y luego al botos pistas donde sonara el nombre de lo que hay en la imagen
	</div>

	<div id="div_centro">
		<div id="imagenes" class="contenedor" >
			
			<canvas class="estilo_imagen" id="ojo" onmousedown="dragStart(event)"></canvas>
			
			<canvas class="estilo_imagen" id="pato" onmousedown="dragStart(event)" ></canvas>

			<canvas class="estilo_imagen" id="estrella" onmousedown="dragStart(event)" ></canvas>

			<canvas class="estilo_imagen" id="fresa" onmousedown="dragStart(event)" ></canvas>
			
        </div>
		<div id="tabla" class="contenedor" >
			
			<canvas class="estilo_imagen" id="rosa" ></canvas>

			<canvas class="estilo_imagen" id="gato" ></canvas>
			
			<canvas class="estilo_imagen" id="espejo" ></canvas>
			
			<canvas class="estilo_imagen" id="botella" ></canvas>

		</div>
		
			
	
	</div>

	<div id="div_lateral_derecho" class="hyphenation buttons" >
		 
        <a class="btn red" id="palabra" >Pista</a>
        
        <a class="btn yellow" id="recargar"  onclick="javascript:window.location.reload();">Recargar</a>

  
	</div>

	
</div>
<script src="js/juego4.js"></script>
</body>
</html>