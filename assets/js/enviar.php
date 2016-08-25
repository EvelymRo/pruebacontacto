<?php

 $destino= "evelym.digital@gmail.com";

 $nombre = $_POST["txtNombre"];
 $email = $_POST["txtEmail"];
 $mensaje = $_POST["txtMensaje"];
 
 $headers = "From: Sitio de Fonda del Factor.";
 $headers .= "<".$email.">\r\n";
 $headers .= "Reply-To: ".$email."\nContent-Type: text/html; charset=iso-8859-1"; 
	
 $message = "<p><b>Nombre: </b>".$nombre."</p><p><b>Email:</b> ".$email."</p><p><b>Mensaje: </b>".$mensaje."</p>";
	 
 $ban = mail($destino,"Correo de contacto - Sitio de FONDA DEL FACTOR.", $message, $headers);

 if($ban)
	 echo "<strong class='u-mayuscula u-inline-block'>¡Muchas Gracias!.</strong><br /> Su mensaje fue enviado con éxito.";
 else
	 echo "<strong class='u-mayuscula u-inline-block'>¡Lo sentimos!</strong><br /> Su mensaje no pudo ser enviado";
?>