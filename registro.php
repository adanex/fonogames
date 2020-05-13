<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<form action="prosesoR.php" method="POST">
		<input type="text" name="texto" id="texto">
		<input type="submit" value="Añadir pendiente">
		
	</form>

	<div id="todolist">
		<?php 
			$servidor = "localhost";
			$nombre_usuario = "root";
			$contrasena = "";
			$db = "correos";

			$conexion = new mysql($servidor,$nombre_usuario,$contrasena,$db);

			if ($conexion->connect_error) {
				# code...
				die("conexion fallida" . $conexion->connect_error);
			}

			if (isset($_POST['texto'])) {
				# code...
				$texto = $_POST['texto'];
				echo $texto;
			}
		 ?>
	</div>

</body>
</html>