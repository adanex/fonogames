<?php 
	session_start();
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Iniciar secion</title>
	
	<link rel="stylesheet" type="text/css" href="css/estilo_login.css">
</head>
<body id="fondo">
<div id="div_fonogame_text">
			
			<h1>FonoGames</h1>

		</div>
	<div id="div_principal">

		<form action="login.php" method="POST">
			
			<input id="correo" required="" class="div_campo" type="email" name="correo" placeholder="Correo">
		
			<input id="contrasena" required="" class="div_campo" type="password" pattern=".{6,}" name="contrasena" placeholder="Contraseña">
			<br>
			<a class="btn red" id="cancelar" href="index.php">Cancelar</a>

			<input class="btn red" type="submit" name="registrar" value="Iniciar Sesion">
		</form>

		

			

	</div>

</body>
</html>