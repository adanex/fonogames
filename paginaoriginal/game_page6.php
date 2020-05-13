<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Nivek 6</title>
	<link rel="stylesheet" type="text/css" href="css/estilo6.css">
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
			
			<canvas class="estilo_imagen" id="perro" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="pelo" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="pipa" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="pollo" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="puno" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="puerta" onmousedown="dragStart(event)" ></canvas>

			<canvas class="estilo_imagen" id="paraguas" onmousedown="dragStart(event)" ></canvas>
			
			<canvas class="estilo_imagen" id="paleta" onmousedown="dragStart(event)" ></canvas>
		</div>

		<div id="tabla" class="contenedor" >
			
			<div id="pa" class="silabas" style="background-color: green" >PA</div>
			
			<div id="pe" class="silabas" style="background-color: rgb(165,244,191);">PE</div>
			
			<div id="pi" class="silabas" style="background-color: rgb(157,195,255)">PI</div>
			
			<div id="po" class="silabas" style="background-color: rgb(250,183,109)">PO</div>
			
			<div id="pu" class="silabas" style="background-color: grey">PU</div>
		</div>
			
	
	</div>

	<div id="div_lateral_derecho" class="hyphenation buttons" >
		 
        <a class="btn red" id="palabra" >Pista</a>
        
        <a class="btn yellow" id="recargar"  onclick="javascript:window.location.reload();">Recargar</a>

  
	</div>

	
</div>
<script src="js/juego6.js"></script>
</body>
</html>