-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-11-2020 a las 13:42:21
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recomerçem`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--
DROP SCHEMA IF EXISTS `recomerçem` ;

CREATE SCHEMA IF NOT EXISTS `recomerçem` DEFAULT CHARACTER SET utf8 ;
USE `recomerçem` ;

CREATE TABLE `juegos` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `descripcion` text NOT NULL,
  `puntuacion` int(11) NOT NULL,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta`
--

CREATE TABLE `oferta` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `imagen` varchar(80) NOT NULL,
  `descripcion` text NOT NULL,
  `puntuacion_min` int(11) NOT NULL,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta_usuario`
--

CREATE TABLE `oferta_usuario` (
  `id_oferta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tienda`
--

CREATE TABLE `tienda` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `Localizacion` varchar(40) DEFAULT NULL,
  `id_categoria` int(11) NOT NULL,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC),
  INDEX `fk_tiendas_categoria_idx` (`id_categoria` ASC),
  CONSTRAINT `fk_tiendas_categoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `recomerçem`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `passw` varchar(20) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `puntuacion` int(11) NOT NULL,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oferta`
--
ALTER TABLE `oferta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oferta_usuario`
--
ALTER TABLE `oferta_usuario`
  ADD KEY `id_oferta` (`id_oferta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tienda`
--
ALTER TABLE `tienda`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `oferta`
--
ALTER TABLE `oferta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tienda`
--
ALTER TABLE `tienda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `oferta_usuario`
--
ALTER TABLE `oferta_usuario`
  ADD CONSTRAINT `oferta_usuario_ibfk_1` FOREIGN KEY (`id_oferta`) REFERENCES `oferta` (`id`),
  ADD CONSTRAINT `oferta_usuario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO usuario ( `id`, `nickname`, `email`, `passw`, `admin`, `puntuacion` ) values ( 1, 'admin', 'admin', 'admin', '1', '0' );
INSERT INTO usuario ( `id`, `nickname`, `email`, `passw`, `admin`, `puntuacion` ) values ( 2, 'Rufuus06', 'rufuus@gmail.com', '123', '1', '0' );
INSERT INTO usuario ( `id`, `nickname`, `email`, `passw`, `admin`, `puntuacion` ) values ( 3, 'Lokuo', 'ivan@gmail.com', '123', '1', '0' );
INSERT INTO usuario ( `id`, `nickname`, `email`, `passw`, `admin`, `puntuacion` ) values ( 4, 'IsartAlex', 'alex@gmail.com', '123', '1', '0' );
INSERT INTO oferta ( `id`, `name`, `imagen`, `descripcion`, `puntuacion_min` ) values ( 1, '-10', '../media/logo.png', 'Consigue 300 puntos es FoodRunner para conseguir un 10% en todas las tiendas de nuestro mercado', '300' );
INSERT INTO categoria ( `nombre` ) values ( "Frutas y Verduras" ), ( "Moda" ), ( "Huevos y Aves de Corral" ), ( "Carnicería" ), ( "Bar-Restaurante" ), ( "Charcuterías" ), ( "Estilismo" );  
INSERT INTO tienda ( `id`, `nombre`, `Localizacion`, `id_categoria` ) values ( 1, 'Bocatas Paco', 'c.Josep Maria de Sagarra, 3', 5 );