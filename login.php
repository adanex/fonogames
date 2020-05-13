<?php 
	
	include 'conexion.php';

	

	if (isset($_SESSION['correo'])) {

		header('location: menu');
	}
	
	$Lcorreo=$_POST['correo'];
	$Lcontrasena=$_POST['contrasena'];
	
	$Lquery="SELECT id, correo, contrasena FROM usuarios 
		WHERE correo = '".$Lcorreo."' AND  contrasena = '".$Lcontrasena."'" ;

	$Lconsulta=$conexion -> query($Lquery);

	
	$Lconsultado = $Lconsulta->fetch_assoc();

	if ($Lcontrasena== $Lconsultado['contrasena']) {

		$Lfila=$Lconsulta->fetch_array(MYSQLI_ASSOC);
		session_start();
		$_SESSION['correo'] = $Lcorreo;

		echo "<script>
                alert('login exitoso');
                
    			</script>";
		header("location: menu.php");
		
	
	}else{
	
		echo "<script>
                alert('inicio de secion incorrecto');
                window.location= 'loginF.php'
    			</script>";
	
	}
 ?>