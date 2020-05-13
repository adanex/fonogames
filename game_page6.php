<?php

session_start();

?>
<!DOCTYPE HTML>
<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Nivel 6</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
	<meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
	<meta name="author" content="freehtml5.co" />

	<!-- 
	//////////////////////////////////////////////////////

	FREE HTML5 TEMPLATE 
	DESIGNED & DEVELOPED by FreeHTML5.co
		
	Website: 		http://freehtml5.co/
	Email: 			info@freehtml5.co
	Twitter: 		http://twitter.com/fh5co
	Facebook: 		https://www.facebook.com/fh5co

	//////////////////////////////////////////////////////
	 -->

  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

    <link rel="stylesheet" type="text/css" href="css/estilo6.css">

	<link href="https://fonts.googleapis.com/css?family=Oxygen:300,400" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700" rel="stylesheet">
	
	<!-- Animate.css -->
	<link rel="stylesheet" href="css/animate.css">
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="css/icomoon.css">
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="css/bootstrap.css">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup.css">

	<!-- Flexslider  -->
	<link rel="stylesheet" href="css/flexslider.css">

	<!-- Theme style  -->
	<link rel="stylesheet" href="css/style.css">

	<!-- Modernizr JS -->
	<script src="js/modernizr-2.6.2.min.js"></script>
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<body onmousedown="elemento(event);">
		
	<div class="fh5co-loader"></div>
	
	<div id="page">
	<nav class="fh5co-nav" role="navigation">
		<div class="container-wrap">
			<div class="top-menu">
				<div class="row">
					<div class="col-xs-2">
						<div id="fh5co-logo"><a href="menu.php">FonoGames</a></div>
					</div>
					<div class="col-xs-10 text-right menu-1">
						<ul>
							<li class="active"><a href="menu.php">Inicio</a></li>
							<li><a href="">Preguntas</a></li>
							<li><a href="">Contactanos</a></li>
						</ul>
					</div>
				</div>
				
			</div>
		</div>
	</nav>
	
				
		<div id="fh5co-contact">

			<div class="row animate-box">
				
				<div class="col-md-6 col-md-offset-3  fh5co-heading" id="div_centro">
					<h2>El juego consiste en arrastras las imagenes hacia la columna donde encuentren la primer silaba que coinsida de la palabra</h2>
					<p>Si requieres ayuda click a la imagen y luego al botos pistas donde sonara el nombre de lo que hay en la imagen</p>
					<center >
						<a  class="btn btn-primary btn-modify" id="palabras"> Pistas</a>
					<a class="btn btn-primary btn-modify" id="recargar"  onclick="javascript:window.location.reload();"> Recargar</a>
					</center>
					

				</div>
				
			</div>

			<div class="row">
				<div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
					<center>
					<div class="row">
						
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
								<div id="pa" class="silabas" style="background-color: rgb(250,183,109); height: 200px;" >PA</div>
			
								<div id="pe" class="silabas" style="background-color: rgb(250,183,109); height: 200px;">PE</div>
			
								<div id="pi" class="silabas" style="background-color: rgb(250,183,109); height: 200px;">PI</div>
			
								<div id="po" class="silabas" style="background-color: rgb(250,183,109); height: 200px;">PO</div>
			
								<div id="pu" class="silabas" style="background-color: rgb(250,183,109); height: 200px;">PU</div>
						</div>
					</div>
					</center>
				</div>

			</div>
		</div>
	<!-- END container-wrap -->

	<div class="container-wrap">
		<footer id="fh5co-footer" role="contentinfo">
			<div class="row">
				<div class="col-md-3 fh5co-widget">
					<h4>Sobre Fonogames</h4>
					<p>Una pagina sencilla echa por estudiantes </p>
				</div>
				<div class="col-md-3 col-md-push-1">
					<h4>Ultimas publicaciones</h4>
					<ul class="fh5co-footer-links">
						<li><a href="#">Nuevos Juegos</a></li>
						<li><a href="#">Nuevas Voces</a></li>
						<li><a href="#">Nuevo Contenido </a></li>
						<li><a href="#">Nuevas Imagenes</a></li>
						
					</ul>
				</div>

				<div class="col-md-3 col-md-push-1">
					<h4>Enlaces</h4>
					<ul class="fh5co-footer-links">
						<li><a href="#">Descargas</a></li>
						<li><a href="#">Actividades</a></li>
						<li><a href="#">Servicios</a></li>
						<li><a href="#">Publicaciones</a></li>
						
					</ul>
				</div>

				<div class="col-md-3">
					<h4>Informacion De Contacto</h4>
					<ul class="fh5co-footer-links">
						<li>198 West 21th Street, <br> Suite 721 New York NY 10016</li>
						<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
						<li><a href="mailto:info@yoursite.com">agutierrez_16@alu.uabcs.mx</a></li>
						<li><a href="">gettemplates.co</a></li>
					</ul>
				</div>

			</div>

			<div class="row copyright">
				<div class="col-md-12 text-center">
					<p>
						<small class="block">&copy; 2016 Free HTML5. All Rights Reserved.</small> 
						<small class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Available at <a href="http://themewagon.com/" target="_blank">Themewagon</a> Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>
					</p>
					<p>
						<ul class="fh5co-social-icons">
							<li><a href="#"><i class="icon-twitter"></i></a></li>
							<li><a href="#"><i class="icon-facebook"></i></a></li>
							<li><a href="#"><i class="icon-linkedin"></i></a></li>
							<li><a href="#"><i class="icon-dribbble"></i></a></li>
						</ul>
					</p>
				</div>
			</div>
		</footer>
	</div><!-- END container-wrap -->
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up2"></i></a>
	</div>
	
	<!-- jQuery -->
	<script src="js/jquery.min.js"></script>
	<!-- jQuery Easing -->
	<script src="js/jquery.easing.1.3.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap.min.js"></script>
	<!-- Waypoints -->
	<script src="js/jquery.waypoints.min.js"></script>
	<!-- Flexslider -->
	<script src="js/jquery.flexslider-min.js"></script>
	<!-- Magnific Popup -->
	<script src="js/jquery.magnific-popup.min.js"></script>
	<script src="js/magnific-popup-options.js"></script>
	<!-- Counters -->
	<script src="js/jquery.countTo.js"></script>
	<!-- Main -->
	<script src="js/main.js"></script>

	<script text="text/javascript" id="identificador" src="js/juego6.js" ></script>

	</body>
</html>
