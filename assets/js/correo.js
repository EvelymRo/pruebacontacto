			$(document).ready(function()
			{
				$("#btnEnviar").click(function()
				{
					if(validar_campo("#txtNombre",4,"NOMBRE"))
						if((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w/.test($("#txtEmail").val())))
						{
							if(validar_campo("#txtMensaje",6,"MENSAJE"))
							{
								$(".AlertaEnvio").css({"display": "block"});
								$(".AlertaEnvio").html("<img src='images/loader.gif' width='50px' />");

								var enviarAmi = "No";

								if($("#checkbox").is(':checked'))
										enviarAmi = "Si";

								$.ajax(
								{
									url		: "enviar.php",
									type	: "POST",
									data	:
									{
										txtNombre		: $("#txtNombre").val(),
										txtEmail		: $("#txtEmail").val(),
										txtMensaje		: $("#txtMensaje").val(),
										},
									success	: function(HTMLRespuesta)
									{
										$("#txtNombre").val("NOMBRE");
										$("#txtEmail").val("EMAIL");
										$("#txtMensaje").val("MENSAJE");
										$(".AlertaEnvio").html(HTMLRespuesta);

											setTimeout(function()
											{
												$(".AlertaEnvio").css({"display": "none"});
											},2000);
										}
									});
								}
						}
						else
						{
							$("#txtEmail").effect('pulsate', { times:2 }, 1000);
							$("#txtEmail").focus();
						}
				});
			});


			function validar_campo(campo,cant_num, place)
 			{
  				var ban = true;

     			if(/^\s+$/.test($(campo).val()) || $(campo).val().length < cant_num ||  $(campo).val() == place)
	  			{
					$(campo).effect('pulsate', { times:2 }, 1000);
					$(campo).focus();
					ban = false;
	  			}
  			return ban;
 			}
