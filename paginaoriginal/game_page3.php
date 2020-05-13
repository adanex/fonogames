<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Nivek 3</title>
	<link rel="stylesheet" type="text/css" href="css/estilo3.css">
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
			
			<canvas class="estilo_imagen" id="pina" onmousedown="dragStart(event)"></canvas>
			
			<canvas class="estilo_imagen" id="grillo" onmousedown="dragStart(event)" ></canvas>

			<canvas class="estilo_imagen" id="zapatos" onmousedown="dragStart(event)" ></canvas>

			<canvas class="estilo_imagen" id="lapiz" onmousedown="dragStart(event)" ></canvas>
			
</div>
		<div id="tabla" class="contenedor" >
			
			<canvas class="estilo_imagen" id="lavadora" ></canvas>

			<canvas class="estilo_imagen" id="zanahoria" ></canvas>
			
			<canvas class="estilo_imagen" id="grifo" ></canvas>
			
			<canvas class="estilo_imagen" id="pizarron" ></canvas>

		</div>
		
			
	
	</div>

	<div id="div_lateral_derecho" class="hyphenation buttons" >
		 
        <a class="btn red" id="palabra" >Pista</a>
        
        <a class="btn yellow" id="recargar"  onclick="javascript:window.location.reload();">Recargar</a>

  
	</div>

	
</div>
<script src="js/juego3.js"></script>
</body>
</html>