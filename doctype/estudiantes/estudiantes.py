# Copyright (c) 2021, orlando Cholota and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Estudiantes(Document):
	def validate(self):
		if len(self.cedula)<10:
			frappe.throw("Número de cédula invalido")
