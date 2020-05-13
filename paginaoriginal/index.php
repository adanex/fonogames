<!DOCTYPE html>
<html>
<head>
	<title>Fono Games</title>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body id="fondo">

	<div id="div_general">

		<div id="divTopIz">
			
			<h1>FonoGames</h1>

		</div>


		<div id="divRegistrar">
			
			<div class="wrapper">
	    		<a class="button" href="registroF.php">Registrarse</a>
			</div>

		<!-- Filter: https://css-tricks.com/gooey-effect/ -->
			<svg style="visibility: hidden; position: relative;" width="0" height="0" >

	    	<defs>
	        <filter id="goo">
	        	<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />   

	            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />

	            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>

	        </filter>
	    	</defs>
			</svg>	



		</div>
		<div id="divLogin">
			
			<div class="wrapper">
	    		<a class="button" href="loginf.php">Iniciar Sesión</a>
			</div>

		<!-- Filter: https://css-tricks.com/gooey-effect/ -->
			<svg style="visibility: hidden; position: relative;" width="0" height="0" >
	    	<defs>
	        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
	            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
	            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
	        </filter>
	    	</defs>
			</svg>	
			
		</div>


		<div id="divImagen">
			<img class="divcont" src="imagen/fondo.jpg">
		</div>
		
		<div id="textoPresentacion">
			<p >Cuando hablamos de habilidades fonológicas nos referimos a la
			capacidad de reflexionar sobre los sonidos de la propia lengua. Es decir, de la
			habilidad para pensar y manipular sobre ellos con la finalidad de adquirir
			conciencia de sus segmentos sonoros.
			Esta práctica se consigue mediante ejercicios y juegos sobre la secuencia
			de sonidos que forman las palabras, practicando distintas tareas.</p>

		</div>
		
	
	</div> 





</body>
</html>