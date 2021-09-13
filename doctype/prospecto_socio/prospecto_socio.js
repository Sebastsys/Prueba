// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('prospecto_socio', {
	refresh: function(frm) {

	},
	fecha_nacimiento: function(frm){
		alert(frm.doc.fecha_nacimiento);
		console.log(frm.doc.nombres + " " + frm.doc.apellidos);
		console.log(frm.doc.fecha_nacimiento);
		calcularEdad(frm.doc.fecha_nacimiento,frm);
	},
	validate: function(frm){

	}
});

function calcularEdad(fecha,frm){
	
	var fecha_nacimiento = new Date(fecha);
	var fecha_Actual = new Date();
	var edad = (parseInt((fecha_Actual - fecha_nacimiento) / (1000*60*60*24*365)));
  	
  	frm.doc.edad=edad;
	console.log(frm.doc.edad);
  	frm.refresh_field("edad");
    
};
