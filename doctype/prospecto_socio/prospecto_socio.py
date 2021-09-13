# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe    #descomentar esta linea
from frappe.model.document import Document

class prospecto_socio(Document):
	def validate(self):
		self.apellidos = "Sweden"
		if len(self.nombres)<3:
			frappe.throw("El nombre no es válido")
