<?php 
	include("conexion.php");

	
	if ($mysqli->connect_errno) {
    	echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
	}	
	echo "hola";
		echo $mysqli->host_info . "\n";
		
	$Rnombre=$_POST['nombre'];
	$Rapellido=$_POST['apellido'];
	$Rcorreo=$_POST['correo'];
	$Rcontrasena=$_POST['contrasena'];

	$Rquery="INSERT INTO usuarios(nombre,apellido,correo,contrasena) 
	VALUES ('".$Rnombre."','".$Rapellido."','".$Rcorreo."','".$Rcontrasena."')";

	$resultado= $conexion->query($Rquery);

	if ($resultado) {
		# code...
		echo "<script>
                alert('registro exitoso');
                window.location= 'index.php'
    			</script>";
	}else{
		echo "<script>
                alert('registro fallido');
                window.location= 'registroF.php'
    			</script>";
	}
 ?>