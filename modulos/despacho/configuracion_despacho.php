<?


if($_POST){
extract($_POST);
			$sql_actualizar = mysql_query("update configuracion_despacho set primero_despacho = '".$primero_despacho."',
											ci_primero_despacho = '".$ci_primero_despacho."',
											cargo_primero_despacho = '".$cargo_primero_despacho."',
											segundo_despacho = '".$segundo_despacho."',
											ci_segundo_despacho = '".$ci_segundo_despacho."',
											cargo_segundo_despacho = '".$cargo_segundo_despacho."',
											tercero_despacho = '".$tercero_despacho."',
											ci_tercero_despacho = '".$ci_tercero_despacho."',
											cargo_tercero_despacho = '".$cargo_tercero_despacho."',
											nro_remision = '".$nro_remision."',
											iddependencia = '".$dependencias."', 
											status = 'a',
											usuario= '".$login."',
											fechayhora= '".$fh."'
											")or die(mysql_error());
			
			$sql_actualizar_dependencia = mysql_query("update dependencias set idmodulo = '".$_SESSION["modulo"]."' where iddependencia = '".$dependencias."'");
																			
			?>
			<script>
			mostrarMensajes("exito", "La configuracion ha sido Guardada con Exito");
			</script>
			<?
}
$sql= mysql_query("select * from configuracion_despacho");
$bus = mysql_fetch_array($sql);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
	<title>Gesti&oacute;n P&uacute;blica</title>
    </head>
    <body>
	<br>
	<h4 align=center>Configuraci&oacute;n Despacho</h4>
	<h2 class="sqlmVersion"></h2>
	<br>

<form name="form1" method="post" action="">
  <table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td colspan="6">&nbsp;</td>
    </tr>
    <tr>
   	 <td class="viewPropTitle"><div align="right">Dependencia:</div></td>
     <td colspan="5">
     <select name="dependencias" id="dependencias">
	  <option value="0">.:: Seleccione ::. </option>
	  <?
      $sql_dependencias = mysql_query("select * from dependencias order by denominacion");
	  while($bus_dependencias = mysql_fetch_array($sql_dependencias)){
	  	?>
	  	<option value="<?=$bus_dependencias["iddependencia"]?>"<? if ($bus_dependencias["iddependencia"] == $bus["iddependencia"]) echo " selected"?>><?=$bus_dependencias["denominacion"]?></option>
	  	<?
	  }
	  ?>
      </select>      </td>
    </tr>
     <tr>
      <td colspan="6">&nbsp;</td>
    </tr>
    <tr>
      <td class="viewPropTitle"><p align="right">Nombre y Apellidos Primer nivel:</p>      </td>
      <td><label>
        <input name="primero_despacho" type="text" id="primero_despacho" value="<?=$bus["primero_despacho"]?>" size="45">
      </label></td>
      <td width="42" class="viewPropTitle"><div align="right">C.I.: </div></td>
      <td width="109"><label>
        <input name="ci_primero_despacho" type="text" id="ci_primero_despacho" value="<?=$bus["ci_primero_despacho"]?>" size="16">
      </label></td>
       <td width="57" class="viewPropTitle"><div align="right">Cargo: </div></td>
      <td width="388"><label>
        <input name="cargo_primero_despacho" type="text" id="cargo_primero_despacho" value="<?=$bus["cargo_primero_despacho"]?>" size="60">
      </label></td>
    </tr>
    <tr>
      <td class="viewPropTitle"><p align="right">Nombre y Apellidos Segundo nivel:</p>      </td>
      <td><label>
        <input name="segundo_despacho" type="text" id="segundo_despacho" value="<?=$bus["segundo_despacho"]?>" size="45">
      </label></td>
      <td width="42" class="viewPropTitle"><div align="right">C.I.: </div></td>
      <td width="109"><label>
        <input name="ci_segundo_despacho" type="text" id="ci_segundo_despacho" value="<?=$bus["ci_segundo_despacho"]?>" size="16">
      </label></td>
      <td width="57" class="viewPropTitle"><div align="right">Cargo: </div></td>
      <td width="388"><label>
        <input name="cargo_segundo_despacho" type="text" id="cargo_segundo_despacho" value="<?=$bus["cargo_segundo_despacho"]?>" size="60">
      </label></td>
    </tr>
     <tr>
      <td class="viewPropTitle"><p align="right">Nombre y Apellidos Tercer nivel:</p>      </td>
      <td><label>
        <input name="tercero_despacho" type="text" id="tercero_despacho" value="<?=$bus["tercero_despacho"]?>" size="45">
      </label></td>
      <td width="42" class="viewPropTitle"><div align="right">C.I.: </div></td>
      <td width="109"><label>
        <input name="ci_tercero_despacho" type="text" id="ci_tercero_despacho" value="<?=$bus["ci_tercero_despacho"]?>" size="16">
      </label></td>
       <td width="57" class="viewPropTitle"><div align="right">Cargo: </div></td>
      <td width="388"><label>
        <input name="cargo_tercero_despacho" type="text" id="cargo_tercero_despacho" value="<?=$bus["cargo_tercero_despacho"]?>" size="60">
      </label></td>
    </tr>
     <tr>
      <td width="316">&nbsp;</td>
      <td width="270">&nbsp;</td>
    </tr>
     
     <tr>
       <td class="viewPropTitle"><div align="right">N&uacute;mero de Documento de Remisi&oacute;n: </div></td>
       <td colspan="5"><div align="left">
           <input style="text-align:right" name="nro_remision" type="text" id="nro_remision" value="<?=$bus["nro_remision"]?>" size="10">
       </div></td>
     </tr>
     
    <tr>
      <td colspan="6">&nbsp;</td>
    </tr>
    <tr>
      <td colspan="6"><div align="center">
        <input type="submit" name="button" id="button" value="Actualizar" class="button" />
        <input type="reset" name="button2" id="button2" value="Cancelar" class="button" />
      </div></td>
    </tr>
  </table>
</form>
</body>
</html>