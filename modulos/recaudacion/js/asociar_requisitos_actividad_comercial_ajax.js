// JavaScript Document


function ingresarRequisitos(){
	var idactividad_comercial = document.getElementById('idactividad_comercial').value;
	var idrequisitos = document.getElementById('idrequisitos').value;
	var ajax=nuevoAjax();
		ajax.open("POST", "modulos/recaudacion/lib/asociar_requisitos_actividad_comercial_ajax.php", true);	
		ajax.onreadystatechange=function() { 
			if(ajax.readyState == 1){
				document.getElementById("divCargando").style.display = "block";
				}
			if (ajax.readyState==4){
				if(ajax.responseText == "existe"){
					mostrarMensajes("error", "Disculpe el requisito que intenta asociar ya esta asociado para esta actividad comercial");
					document.getElementById('idrequisitos').value = '0';
				}else{
					listarRequisitos(idactividad_comercial);
						
				}
				
				document.getElementById("divCargando").style.display = "none";
			}
			
		}
		ajax.send("idrequisitos="+idrequisitos+"&idactividad_comercial="+idactividad_comercial+"&ejecutar=ingresarRequisitos");
}






function eliminarRequisitos(idasociar_requisitos_actividad_comercial, idactividad_comercial){
	if(confirm("¿Seguro desea Eliminar esta Asociacion de requisitos?")){
	var ajax=nuevoAjax();
		ajax.open("POST", "modulos/recaudacion/lib/asociar_requisitos_actividad_comercial_ajax.php", true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
		ajax.onreadystatechange=function() { 
			if(ajax.readyState == 1){
				document.getElementById("divCargando").style.display = "block";
				}
			if (ajax.readyState==4){
				if(ajax.responseText == "usado"){
					mostrarMensajes("error", "Disculpe el requisito que intenta eliminar esta siendo usado por algun contribuyente, por lo tanto no puede ser eliminado");
				}else{
					listarRequisitos(idactividad_comercial);
					document.getElementById('idrequisitos').value = '0';
					document.getElementById("divCargando").style.display = "none";	
				}
			}
			
		}
		ajax.send("idasociar_requisitos_actividad_comercial="+idasociar_requisitos_actividad_comercial+"&ejecutar=eliminarRequisitos");
	}
}




function listarRequisitos(idactividad_comercial){
	var ajax=nuevoAjax();
		ajax.open("POST", "modulos/recaudacion/lib/asociar_requisitos_actividad_comercial_ajax.php", true);	
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
		ajax.onreadystatechange=function() { 
			if(ajax.readyState == 1){
				document.getElementById("divCargando").style.display = "block";
				}
			if (ajax.readyState==4){
				document.getElementById('listaRequisitos').innerHTML = ajax.responseText;
				document.getElementById("divCargando").style.display = "none";
			}
		}
		ajax.send("idactividad_comercial="+idactividad_comercial+"&ejecutar=listarRequisitos");
}






	