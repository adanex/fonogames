<!DOCTYPE html>
<html>
<head>
	<title>Registrar usuario nuevo</title>
	<link rel="stylesheet" type="text/css" href="css/estilo_registro.css">
</head>
<body id="fondo">

	
		<div id="div_fonogame_text">
			
			<h1>FonoGames</h1>

		</div>

	<div id="div_principal">

		<form action="rUsuarios.php" method="POST">
			

			<input id="nombre" required class="div_campo" type="text" name="nombre" placeholder="Nombre">
			<br>
			
			<input id="apellido" required="" class="div_campo" type="text" name="apellido" placeholder="Apellidos">
			
			<br>
			<input id="correo" required="" class="div_campo" type="email" name="correo" placeholder="Correo">
			<br>
			<span class="div_campo">la contraseña debera tener como minimo 6 caracteres</span>
			
			<input id="contrasena" required="" class="div_campo" type="password" pattern=".{6,}" name="contrasena" placeholder="Contraseña">
			<br>
			<a class="btn red" id="cancelar" href="index.html">Cancelar</a>

			<input class="btn red" type="submit" name="registrar" value="Registrarse">
			
			
			

		</form>
		
	</div>


</body>
</html>