// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('Estudiantes', {
	refresh: function(frm) {

	 },
	 cedula: function(frm){
		validarCedula(frm.doc.correo_electronico);
	},
});
function validarCedula(valor) {
	if (valor.length<10){
		alert("Numero de cédula incorrecto!.");
	} 
  }