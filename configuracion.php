<?php 
	session_start();
	
	include('conexion.php');
	

	$Lquery="SELECT nombre,apellido,correo,contrasena FROM usuarios 
		WHERE correo = '".$_SESSION['correo']."'" ;

	$Lconsulta=$conexion -> query($Lquery);

	
	$Lconsultado = $Lconsulta->fetch_assoc();

	
 ?>
<!DOCTYPE html>
<!-- saved from url=(0041)http://fonogames.x10.mx/configuracion.php -->
<html
    style=""
    class="js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="shortcurt icon" type="imagen/png" href="http://fonogames.x10.mx/icono.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Configuracion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
        <meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
        <meta name="author" content="freehtml5.co" />
        <!-- 	//////////////////////////////////////////////////////	FREE HTML5 TEMPLATE 	DESIGNED & DEVELOPED by FreeHTML5.co			Website: 		http://freehtml5.co/	Email: 			info@freehtml5.co	Twitter: 		http://twitter.com/fh5co	Facebook: 		https://www.facebook.com/fh5co	//////////////////////////////////////////////////////	 -->
        <!-- Facebook and Twitter integration -->
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:card" content="" />
        <!-- Animate.css -->
        <link rel="stylesheet" href="css/animate.css" />
        <!-- Icomoon Icon Fonts-->
        <link rel="stylesheet" href="css/icomoon.css" />
        <!-- Bootstrap  -->
        <link rel="stylesheet" href="css/bootstrap.css" />
        <!-- Magnific Popup -->
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <!-- Flexslider  -->
        <link rel="stylesheet" href="css/flexslider.css" />
        <!-- Theme style  -->
        <link rel="stylesheet" href="css/style.css" />
        <!-- Modernizr JS -->
        <script src="js/modernizr-2.6.2.min.js"></script>
        <!-- FOR IE9 below -->
        <!--[if lt IE 9]> <script src="js/respond.min.js"></script> <![endif]-->
    </head>
    <body>
        <div class="fh5co-loader" style="display: none;"></div>
        <div id="page">
            <a href="configuracion.php#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>
            <div id="fh5co-offcanvas">
                <ul>
                    <li class="active"><a href="menu.php">Inicio</a></li>
                    <li><a href="configuracion.php">Preguntas</a></li>
                    <li><a href="configuracion.php">Contactanos</a></li>
                </ul>
            </div>
            <nav class="fh5co-nav" role="navigation">
                <div class="container-wrap">
                    <div class="top-menu">
                        <div class="row">
                            <div class="col-xs-2">
                                <div id="fh5co-logo"><a href="http://fonogames.x10.mx/index.php">FonoGames</a></div>
                            </div>
                            <div class="col-xs-10 text-right menu-1">
                                <ul>
                                    <li class="active"><a href="menu.php">Inicio</a></li>
                                    <li><a href="configuracion.php">Preguntas</a></li>
                                    <li><a href="configuracion.php">Contactanos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="container-wrap">
                <div id="fh5co-contact">
                    <div class="row animate-box fadeInUp animated-fast">
                        <div class="col-md-6 col-md-offset-3 text-center fh5co-heading">
                            <img style="width: 300px; height: 300px; border-radius: 160px; border: 5px solid #666;" src="fotos/1.jpg" />

                            <h2><?php echo $Lconsultado['nombre']; ?></h2>
                            <p>Estos son los datos de tu cuenta</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 fh5co-heading">
                            <center>
                                <div class="row">
                                    <table class="text-center">
                                        <tbody>
                                            <tr>
                                                <th style="width: 100px;">Nombre</th>
                                                <th style="width: 100px;">Apellido</th>
                                                <th style="width: 200px;">Correo</th>
                                                <th style="width: 100px;">Contraseña</th>
                                            </tr>
                                            <tr>
                                                <th><?php echo $Lconsultado['nombre']; ?></th>
                                                <th><?php echo $Lconsultado['apellido']; ?></th>
                                                <th><?php echo $Lconsultado['correo']; ?></th>
                                                <th>******</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <br />
                                            <a href="menu.php" class="btn btn-primary btn-modify"> Cancelar</a> <a href="eliminar.php" class="btn btn-danger btn-modify"> Eliminar</a>
                                            <a href="editarF.php" class="btn btn-primary btn-modify"> Editar</a>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END container-wrap -->
            <div class="container-wrap">
                <footer id="fh5co-footer" role="contentinfo">
                    <div class="row">
                        <div class="col-md-3 fh5co-widget">
                            <h4>Sobre Fonogames</h4>
                            <p>Una pagina sencilla hecha por estudiantes</p>
                        </div>
                        <div class="col-md-3 col-md-push-1">
                            <h4>Ultimas publicaciones</h4>
                            <ul class="fh5co-footer-links">
                                <li><a href="configuracion.php#">Nuevos Juegos</a></li>
                                <li><a href="configuracion.php#">Nuevas Voces</a></li>
                                <li><a href="configuracion.php#">Nuevo Contenido </a></li>
                                <li><a href="configuracion.php#">Nuevas Imagenes</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-md-push-1">
                            <h4>Enlaces</h4>
                            <ul class="fh5co-footer-links">
                                <li><a href="configuracion.php#">Descargas</a></li>
                                <li><a href="configuracion.php#">Actividades</a></li>
                                <li><a href="configuracion.php#">Servicios</a></li>
                                <li><a href="configuracion.php#">Publicaciones</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4>Informacion De Contacto</h4>
                            <ul class="fh5co-footer-links">
                                <li>
                                    198 West 21th Street, <br />
                                    Suite 721 New York NY 10016
                                </li>
                                <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                <li><a href="mailto:info@yoursite.com">agutierrez_16@alu.uabcs.mx</a></li>
                                <li><a href="configuracion.php">gettemplates.co</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row copyright">
                        <div class="col-md-12 text-center">
                            <p>
                                <small class="block">© 2016 Free HTML5. All Rights Reserved.</small>
                                <small class="block">
                                    Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Available at <a href="http://themewagon.com/" target="_blank">Themewagon</a> Demo Images:
                                    <a href="http://unsplash.co/" target="_blank">Unsplash</a>
                                </small>
                            </p>
                            <p></p>
                            <ul class="fh5co-social-icons">
                                <li>
                                    <a href="http://fonogames.x10.mx/configuracion.php#"><i class="icon-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="http://fonogames.x10.mx/configuracion.php#"><i class="icon-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="http://fonogames.x10.mx/configuracion.php#"><i class="icon-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="http://fonogames.x10.mx/configuracion.php#"><i class="icon-dribbble"></i></a>
                                </li>
                            </ul>
                            <p></p>
                        </div>
                    </div>
                </footer>
            </div>
            <!-- END container-wrap -->
        </div>
        <div class="gototop js-top">
            <a href="http://fonogames.x10.mx/configuracion.php#" class="js-gotop"><i class="icon-arrow-up2"></i></a>
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
    </body>
</html>
