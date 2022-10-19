-- CreateTable
CREATE TABLE `productos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `unidad_medida` VARCHAR(50) NOT NULL,
    `stock` INTEGER NOT NULL,
    `imagen` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` TEXT NOT NULL,
    `dni` VARCHAR(8) NOT NULL,
    `correo` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `telefono` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `direcciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calle` TEXT NOT NULL,
    `numero` TEXT NOT NULL,
    `dpt` TEXT NOT NULL,
    `ciudad` TEXT NOT NULL,
    `provincia` TEXT NOT NULL,
    `referencia` TEXT NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `monto_total` DOUBLE NOT NULL,
    `numero_seguimiento` VARCHAR(191) NULL,
    `estado` ENUM('PAGADO', 'CANCELADO', 'ENVIADO', 'RECIBIDO') NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `direccion_id` INTEGER NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalle_pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `precio` DOUBLE NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `producto_id` INTEGER NOT NULL,
    `pedido_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedido_eventos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` ENUM('PAGADO', 'CANCELADO', 'ENVIADO', 'RECIBIDO') NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `pedido_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `direcciones` ADD CONSTRAINT `direcciones_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `detalle_pedido_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detalle_pedido` ADD CONSTRAINT `detalle_pedido_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedido_eventos` ADD CONSTRAINT `pedido_eventos_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
