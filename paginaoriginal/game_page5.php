<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Nivek 1</title>
	<link rel="stylesheet" type="text/css" href="css/estilo5.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>

</head>
<body id="fondo" onmousedown="elemento(event);" class="hyphenation">

<div id="div_fonogame_text" class="hyphenation">
			
		<h1>FonoGames</h1>

	</div>
<div id="div_general">

	

	<div id="div_lateral_izquierdo" >

		El juego consiste en arrastras las imagenes en la columna correcta dependiendo de el numero de silabas
		<br>
		<br>
		Si requieres ayuda click a la imagen y luego al botos pistas donde sonara el nombre de lo que hay en la imagen
	</div>

	<div id="div_centro">
		<div id="imagenes" class="contenedor">
			
			<canvas class="estilo_imagen" id="arbol" onmousedown="dragStart(event)"></canvas>
			
			<canvas class="estilo_imagen" id="mesa" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="dado" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="sol" onmousedown="dragStart(event)"></canvas>
			
			<canvas class="estilo_imagen" id="cama" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="copa" onmousedown="dragStart(event)" ></canvas>

			<canvas class="estilo_imagen" id="flor" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="pie" onmousedown="dragStart(event)" ></canvas>
		</div>

		<div id="tabla" class="contenedor" >
			
			<div id="m" class="silabas" style="background-color: green" >M</div>
			
			<div id="p" class="silabas" style="background-color: rgb(165,244,191);">P</div>
			
			<div id="l" class="silabas" style="background-color: rgb(157,195,255)">L</div>
			
			<div id="s" class="silabas" style="background-color: rgb(250,183,109)">S</div>
			
			<div id="d" class="silabas" style="background-color: grey">D</div>
		</div>
			
	
	</div>

	<div id="div_lateral_derecho" class="hyphenation buttons" >
		 
        <a class="btn red" id="palabra" >Pista</a>
        
        <a class="btn yellow" id="recargar"  onclick="javascript:window.location.reload();">Recargar</a>

  
	</div>

	
</div>
<script src="js/juego5.js"></script>
</body>
</html>