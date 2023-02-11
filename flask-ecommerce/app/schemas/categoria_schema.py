from marshmallow import Schema, fields
from app.helpers.error_helpers import campo_necesario


class CategoriaSchema(Schema):
    categoriaId = fields.Integer(dump_only=True)
    categoriaNombre = fields.String(required=True, validate=campo_necesario)
    categoriaDescripcion = fields.String(
        required=True, validate=campo_necesario)
    estado = fields.Boolean(dump_only=True)
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


category_schema = CategoriaSchema()
categories_schema = CategoriaSchema(many=True)
