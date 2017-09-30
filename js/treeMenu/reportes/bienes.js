function nuevoAjax() { 
        var xmlhttp=false;
        try{
            xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            try{
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(E){
                if (!xmlhttp && typeof XMLHttpRequest!='undefined') xmlhttp=new XMLHttpRequest();
            }
        }
        return xmlhttp; 
    }    

function llamarFiltro(nombre, modulo) {
       var ajax=nuevoAjax();
        ajax.open("POST", "lib/reportes/"+modulo+"/filtros.php", true);	
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.onreadystatechange=function() { 
            if(ajax.readyState == 1){
                document.getElementById("divCargando").style.display = "block";
                }
            if (ajax.readyState==4){
                document.getElementById("aCerrar").style.display = "block";	
                document.getElementById("frmReporte").style.display = "block";
                frmReporte.location.href = "lib/reportes/"+modulo+"/filtros.php?nombre="+nombre;

                document.getElementById("divCargando").style.display = "none";
            } 
        }
        ajax.send("nombre="+nombre);
    }
	
function llamarReporte(nombre, modulo) {
        var ajax=nuevoAjax();
        ajax.open("POST", "lib/reportes/"+modulo+"/reportes.php", true);	
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.onreadystatechange=function() { 
            if(ajax.readyState == 1){
                document.getElementById("divCargando").style.display = "block";
                }
            if (ajax.readyState==4){
                document.getElementById("aCerrar").style.display = "block";	
                document.getElementById("frmReporte").style.display = "block";			
                frmReporte.location.href = "lib/reportes/"+modulo+"/reportes.php?nombre="+nombre;

                document.getElementById("divCargando").style.display = "none";
            } 
        }
        ajax.send("nombre="+nombre);
    }


stBM(260,"tree6575",[0,"","","imagenes/treeMenu/blank.gif",0,"left","auto","auto",1,0,-1,-1,-1,"none",0,"#5b80cc","#FFFFFF","","repeat-y",1,"imagenes/treeMenu/simple_f.gif","imagenes/treeMenu/simple_uf.gif",9,9,0,"","","","",0,0,3,1,"center",0,0,0,"","","","",""]);
stBS("p0",[0,1,"",-2,"",-2,50,25,3]);
stIT("p0i0",["           Bienes Inmuebles","","_self","","","","",1,26,"bold 8pt 'Arial'","#000000","none","transparent","imagenes/treeMenu/XPbanner1.gif","no-repeat","bold 8pt 'Arial'","#3399FF","none","transparent","imagenes/treeMenu/XPbanner1a.gif","no-repeat","bold 8pt 'Arial'","#000000","none","transparent","imagenes/treeMenu/XPbanner1.gif","no-repeat","bold 8pt 'Arial'","#3399FF","none","transparent","imagenes/treeMenu/XPbanner1a.gif","no-repeat",1,0,"left","middle",235,28,"imagenes/treeMenu/XParrow1a.gif","imagenes/treeMenu/XParrow2a.gif","imagenes/treeMenu/XParrow1.gif","imagenes/treeMenu/XParrow2.gif",20,22,1]);
stBS("p1",[,,"progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=forward,enabled=0,Duration=0.20)",5,"progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=reverse,enabled=0,Duration=0.20)",4,90],"p0");

stIT("p1i0",["Inventario","javascript:llamarFiltro('inmuebles_inventario', 'bienes')",,,,"imagenes/treeMenu/pdf.png","imagenes/treeMenu/pdf.png",20,20,"8pt 'Arial'","#FFFFFF",,,"imagenes/treeMenu/XPline.gif","repeat-y","8pt 'Arial'","#000000",,,"imagenes/treeMenu/XPline.gif","repeat-y","8pt 'Arial'",,,,"imagenes/treeMenu/XPline.gif","repeat-y","8pt 'Arial'","#000000","underline",,"imagenes/treeMenu/XPline.gif","repeat-y",,,,,0,0,"","","","",0,0,0],"p0i0");
stIT("p1i1",["Hoja de Trabajo 1","javascript:llamarFiltro('inmuebles_hoja1', 'bienes')",,,,"imagenes/treeMenu/pdf.png","imagenes/treeMenu/pdf.png"],"p1i0");
stIT("p1i1",["Hoja de Trabajo 2","javascript:llamarFiltro('inmuebles_hoja2', 'bienes')",,,,"imagenes/treeMenu/pdf.png","imagenes/treeMenu/pdf.png"],"p1i0");
stIT("p1i1",["Hoja de Trabajo 3","javascript:llamarFiltro('inmuebles_hoja3', 'bienes')",,,,"imagenes/treeMenu/pdf.png","imagenes/treeMenu/pdf.png"],"p1i0");
stES();
stIT("p0i1",["           Bienes Muebles"],"p0i0");
stBS("p2",[],"p1");
stIT("p2i0",["Inventario","javascript:llamarFiltro('muebles_inventario', 'bienes')"],"p1i1");
stIT("p2i1",["Por Catálogo","javascript:llamarFiltro('muebles_por_catalogo', 'bienes')"],"p1i1");
stIT("p2i2",["Imagenes","javascript:llamarFiltro('imagenes_muebles', 'bienes')"],"p1i1");
stES();
stIT("p0i1",["           Formatos"],"p0i0");
stBS("p3",[],"p1");
stIT("p3i0",["B.M.1- Hoja de Inventario","javascript:llamarFiltro('bm1', 'bienes')"],"p1i1");
stIT("p3i1",["Balance de Bienes Muebles","javascript:llamarFiltro('balance_bienes', 'bienes')"],"p1i1");
stES();
stIT("p0i1",["           Tablas"],"p0i0");
stBS("p4",[],"p1");
stIT("p4i0",["Catalogo","javascript:llamarFiltro('bienes_catalogo', 'bienes')"],"p1i1");
stIT("p4i1",["Estructura Organizativa","javascript:llamarFiltro('bienes_estructura_organizativa', 'bienes')"],"p1i1");
stES();
stIT("p0i1",["           Movimiento de Bienes"],"p0i0");
stBS("p5",[],"p1");
stIT("p5i0",["Acta de Incorporación","javascript:llamarFiltro('acta_incorporacion_bienes', 'bienes')"],"p1i1");
stIT("p5i1",["Desincorporación","javascript:llamarFiltro('desincorporacion', 'bienes')"],"p1i1");
stES();
stIT("p0i9",["           Control y Remisión"],"p0i0");
stBS("p10",[],"p1");
stIT("p10i0",["Documentos Remitidos","javascript:llamarFiltro('recibido_y_remitido', 'compras_servicios')"],"p1i0");
stIT("p10i1",["Documentos Recibidos","javascript:llamarFiltro('documentos_recibidos', 'compras_servicios')"],"p1i0");
stES();
stES();
stEM();

stCollapseSubTree('tree6575',0,1);