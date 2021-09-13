// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('Representante', {
	 refresh: function(frm) {

	 },
	 correo_electronico: function(frm){
		
	},
	telefono_celular:function(frm){
	
	},
	fecha_nacimiento: function(frm){
		calcularEdad(frm.doc.fecha_nacimiento,frm);
	},
	validate: function(frm){
		validarEmail(frm.doc.correo_electronico);
		validarCelular(frm.doc.telefono_celular);
	}
});
function validarEmail(valor) {
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
	 console.log("La dirección de email " + valor + " es correcta!.");
	} else {
	 alert("La dirección de email es incorrecta!.");
	}
  }
  function validarCelular(valor) {
	if (valor.length<10){
		alert("Numero de celular incorrecto!.");
	} 
  }

  function validarCedula(valor) {
	if (valor.length<10){
		alert("Numero de cédula incorrecto!.");
	} 
  }
  function calcularEdad(fecha,frm){
	
	var fecha_nacimiento = new Date(fecha);
	var fecha_Actual = new Date();
	var edad = (parseInt((fecha_Actual - fecha_nacimiento) / (1000*60*60*24*365)));  	
    if(edad < 18){
		alert("El representante debe ser mayor de 18 años");
		frm.doc.fecha_nacimiento="";
		frm.refresh_field("fecha_nacimiento");
	}
};