<?php 
	session_start();
	
	include('conexion.php');
	
	$Lquery="SELECT id, correo, contrasena FROM usuarios 
		WHERE correo = '".$_SESSION['correo']."'" ;

	$Lconsulta=$conexion -> query($Lquery);
	
	$Lconsultado = $Lconsulta->fetch_assoc();

	if ($_SESSION['correo'] == $Lconsultado['correo']) {

		$Rquery="INSERT INTO avance(id_usuario,datos) 
	    VALUES (".$Lconsultado['id'].",'nivel 6 pasado')";
		
	$resultado= $conexion->query($Rquery);

	if ($resultado) {
		# code...
		echo "<script>

                alert('registro exitoso');
                
    			</script>";

    			header("location: menu.php");
	}else{
		echo "<script>

                alert('registro fallido');
                
    			</script>";
	}
	
	}else{
	
	}
 ?>