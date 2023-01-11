from marshmallow import Schema, fields
from app.helpers.error_helpers import campo_necesario


class UsuarioSchema(Schema):
    usuarioId = fields.Integer(dump_only=True)
    usuarioNombre = fields.String(required=True, validate=campo_necesario)
    usuarioEmail = fields.String(required=True, validate=campo_necesario)
    usuarioDni = fields.String(required=True, validate=campo_necesario)
    usuarioFono = fields.String(required=True, validate=campo_necesario)
    usuarioPassword = fields.String(required=True, validate=campo_necesario)
    estado = fields.Boolean(dump_only=True)
    created_at = fields.DateTime()
    updated_at = fields.DateTime()


user_schema = UsuarioSchema()
users_schema = UsuarioSchema(many=True)


class AutenticacionSchema(Schema):
    usuarioPassword = fields.String(required=True, validate=campo_necesario)
    usuarioEmail = fields.String(required=True, validate=campo_necesario)


auth_schema = AutenticacionSchema()
