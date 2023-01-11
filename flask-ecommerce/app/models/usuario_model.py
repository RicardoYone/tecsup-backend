from app import db
from sqlalchemy import (
    Column,
    Integer,
    Boolean,
    String,
    Text,
    DateTime,
    func
)


class UsuarioModel(db.Model):
    __tablename__ = 'usuarios'
    usuarioId = Column(Integer, primary_key=True)
    usuarioNombre = Column(String(255))
    usuarioEmail = Column(String(255), nullable=False, unique=True)
    usuarioDni = Column(String(8))
    usuarioFono = Column(String(50))
    usuarioHash = Column(Text)
    usuarioSalt = Column(Text)
    estado = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True),
                        server_default=func.now(), onupdate=func.now())
