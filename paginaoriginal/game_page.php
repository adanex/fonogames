<?php

session_start();

?>

<!DOCTYPE html>
<html>
<head>
	<title>Nivek 1</title>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
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
			<canvas class="estilo_imagen" id="gato" onmousedown="dragStart(event)">
				
			</canvas>
			<canvas class="estilo_imagen" id="libro" onmousedown="dragStart(event)" >
				
			</canvas>
			<canvas class="estilo_imagen" id="pelota" onmousedown="dragStart(event)" >
				
			</canvas>
			<canvas class="estilo_imagen" id="pan" onmousedown="dragStart(event)">
				
			</canvas>
			<canvas class="estilo_imagen" id="pescado" onmousedown="dragStart(event)" >
				
			</canvas>
			<canvas class="estilo_imagen" id="carro" onmousedown="dragStart(event)" >
				
			</canvas>
		</div>

		<div id="tabla" class="contenedor" >
			<div id="silaba1" class="silabas" style="background-color: green" >1 silaba</div>
			<div id="silaba2" class="silabas" style="background-color: rgb(165,244,191);">2 silabas</div>
			<div id="silaba3" class="silabas" style="background-color: grey">3 silabas</div>
		</div>
			
	
	</div>

	<div id="div_lateral_derecho" class="hyphenation buttons" >
		 
        <a class="btn red" id="palabra" >Pista</a>
        
        <a class="btn yellow" id="recargar"  onclick="javascript:window.location.reload();">Recargar</a>

  
	</div>

	

	
</div>
<script text="text/javascript" id="identificador" src="js/juego1.js" ></script>
</body>
</html>