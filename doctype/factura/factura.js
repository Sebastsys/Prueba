// Copyright (c) 2021, orlando Cholota and contributors
// For license information, please see license.txt

frappe.ui.form.on('Factura', {
	 refresh: function(frm) {

	 },
	 hijos: function(frm) {
		descuento(frm.doc.hijos, frm);
		
		console.log(frm.doc.total);
	},
	validate: function(frm){

	}
});
function descuento(hijos, frm) {
	if (hijos==1){
		frm.doc.descuento = 0;
	}
	if (hijos==2){
		frm.doc.descuento = 10;
	}  
	if (hijos>2){
		frm.doc.descuento = 20;
	} 
	frm.doc.valor_pagar=frm.doc.hijos*frm.doc.precio_unitario;		
	frm.doc.total=frm.doc.valor_pagar-((frm.doc.valor_pagar*frm.doc.descuento)/100);
	frm.refresh_field("descuento");
	frm.refresh_field("total");
	frm.refresh_field("valor_pagar");
  }