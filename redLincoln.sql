-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 05, 2016 at 08:41 
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `redLincoln`
--

-- --------------------------------------------------------

--
-- Table structure for table `_food`
--

CREATE TABLE `_food` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `kcal` varchar(45) DEFAULT NULL,
  `_measurement_id` int(11) NOT NULL,
  `_group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `_group`
--

CREATE TABLE `_group` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `_need_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_group`
--

INSERT INTO `_group` (`id`, `name`, `_need_type_id`) VALUES
(1, 'Vegetal A', 1),
(2, 'Vegetal B', 1),
(3, 'Fruta', 1),
(4, 'Açúcar', 2),
(5, 'Pão', 2),
(6, 'Óleo', 2),
(7, 'Oleagenosas', 2),
(8, 'Arroz', 2),
(9, 'Leite', 3),
(10, 'Embutidos/Ovo', 3),
(11, 'Carne', 3),
(12, 'Leguminosas', 3);

-- --------------------------------------------------------

--
-- Table structure for table `_meal`
--

CREATE TABLE `_meal` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `_user_prescription_id` int(11) NOT NULL,
  `_meal_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `_meal_item`
--

CREATE TABLE `_meal_item` (
  `id` int(11) NOT NULL,
  `_meal_id` int(11) NOT NULL,
  `_food_id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `_measurement_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `_meal_type`
--

CREATE TABLE `_meal_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_meal_type`
--

INSERT INTO `_meal_type` (`id`, `name`) VALUES
(1, 'café da manhã'),
(2, 'lanche da manhã'),
(3, 'almoço'),
(4, 'Lanche da tarde I'),
(5, 'Lanche da tarde II'),
(6, 'Janta'),
(7, 'Ceia');

-- --------------------------------------------------------

--
-- Table structure for table `_measurement`
--

CREATE TABLE `_measurement` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `value` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_measurement`
--

INSERT INTO `_measurement` (`id`, `name`, `value`) VALUES
(1, 'colher(es) sopa', NULL),
(2, 'colher(es) sobremesa', NULL),
(3, 'colher(es) chá', NULL),
(4, 'xícara', NULL),
(5, 'ml', NULL),
(6, 'unidade', NULL),
(7, 'porção', NULL),
(8, 'peça', NULL),
(9, 'fatia', NULL),
(10, 'copo', NULL),
(11, 'concha', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `_need_type`
--

CREATE TABLE `_need_type` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_need_type`
--

INSERT INTO `_need_type` (`id`, `name`) VALUES
(1, 'Vitaminas e Minerais'),
(2, 'Energia'),
(3, 'Proteínas');

-- --------------------------------------------------------

--
-- Table structure for table `_state`
--

CREATE TABLE `_state` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `abb` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_state`
--

INSERT INTO `_state` (`id`, `name`, `abb`) VALUES
(1, 'Acre', 'AC'),
(2, 'Alagoas', 'AL'),
(3, 'Amapa', 'AP'),
(4, 'Amazonas', 'AM'),
(5, 'Bahia', 'BA'),
(6, 'Ceara', 'CE'),
(7, 'Distrito Federal', 'DF'),
(8, 'Espirito Santo', 'ES'),
(9, 'Goias', 'GO'),
(10, 'Maranhao', 'MA'),
(11, 'Mato Grosso', 'MT'),
(12, 'Mato Grosso do Sul', 'MS'),
(13, 'Minas Gerais', 'MG'),
(14, 'Para', 'PA'),
(15, 'Paraiba', 'PB'),
(16, 'Parana', 'PR'),
(17, 'Pernambuco', 'PE'),
(18, 'Piaui', 'PI'),
(19, 'Rio de Janeiro', 'RJ'),
(20, 'Rio Grande do Norte', 'RN'),
(21, 'Rio grande do Sul', 'RS'),
(22, 'Rondonia', 'RO'),
(23, 'Roraima', 'RR'),
(24, 'Santa Catarina', 'SC'),
(25, 'Sao Paulo', 'SP'),
(26, 'Sergipe', 'SE'),
(27, 'Tocantins', 'TO');

-- --------------------------------------------------------

--
-- Table structure for table `_user`
--

CREATE TABLE `_user` (
  `id` int(11) NOT NULL,
  `name` varchar(120) DEFAULT NULL,
  `email` varchar(120) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `city` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `dr_id` int(11) DEFAULT NULL,
  `_user_level_id` int(10) UNSIGNED NOT NULL,
  `picture` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_user`
--

INSERT INTO `_user` (`id`, `name`, `email`, `birth`, `password`, `city`, `state`, `dr_id`, `_user_level_id`, `picture`) VALUES
(1, 'Ariel Dias', 'arieldias@gmail.com', '1988-04-14', '0360fe69153cd7140f49f471fd1160df', 23, 21, NULL, 3, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `_user_level`
--

CREATE TABLE `_user_level` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `_user_level`
--

INSERT INTO `_user_level` (`id`, `name`) VALUES
(1, 'usuário'),
(2, 'nutricionista'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `_user_meal_prescription`
--

CREATE TABLE `_user_meal_prescription` (
  `id` int(11) NOT NULL,
  `calory` int(11) DEFAULT NULL,
  `_group_id` int(11) NOT NULL,
  `_user_prescription_id` int(11) NOT NULL,
  `_meal_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `_user_prescription`
--

CREATE TABLE `_user_prescription` (
  `id` int(11) NOT NULL,
  `record_date` date DEFAULT NULL,
  `current` tinyint(1) DEFAULT NULL,
  `_user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `_food`
--
ALTER TABLE `_food`
  ADD PRIMARY KEY (`id`,`_measurement_id`,`_group_id`),
  ADD KEY `fk__food__measurement1_idx` (`_measurement_id`),
  ADD KEY `fk__food__group1_idx` (`_group_id`);

--
-- Indexes for table `_group`
--
ALTER TABLE `_group`
  ADD PRIMARY KEY (`id`,`_need_type_id`),
  ADD KEY `fk__group__need_type1_idx` (`_need_type_id`);

--
-- Indexes for table `_meal`
--
ALTER TABLE `_meal`
  ADD PRIMARY KEY (`id`,`_user_prescription_id`,`_meal_type_id`),
  ADD KEY `fk__meal__user_prescription1_idx` (`_user_prescription_id`),
  ADD KEY `fk__meal__meal_type1_idx` (`_meal_type_id`);

--
-- Indexes for table `_meal_item`
--
ALTER TABLE `_meal_item`
  ADD PRIMARY KEY (`id`,`_meal_id`,`_food_id`,`_measurement_id`),
  ADD KEY `fk__meal_item__meal1_idx` (`_meal_id`),
  ADD KEY `fk__meal_item__food1_idx` (`_food_id`),
  ADD KEY `fk__meal_item__measurement1_idx` (`_measurement_id`);

--
-- Indexes for table `_meal_type`
--
ALTER TABLE `_meal_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_measurement`
--
ALTER TABLE `_measurement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_need_type`
--
ALTER TABLE `_need_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_state`
--
ALTER TABLE `_state`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_user`
--
ALTER TABLE `_user`
  ADD PRIMARY KEY (`id`,`_user_level_id`),
  ADD KEY `fk__user__user_level1_idx` (`_user_level_id`);

--
-- Indexes for table `_user_level`
--
ALTER TABLE `_user_level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_user_meal_prescription`
--
ALTER TABLE `_user_meal_prescription`
  ADD PRIMARY KEY (`id`,`_group_id`,`_user_prescription_id`,`_meal_type_id`),
  ADD KEY `fk__user_meal_prescription__group1_idx` (`_group_id`),
  ADD KEY `fk__user_meal_prescription__user_prescription1_idx` (`_user_prescription_id`),
  ADD KEY `fk__user_meal_prescription__meal_type1_idx` (`_meal_type_id`);

--
-- Indexes for table `_user_prescription`
--
ALTER TABLE `_user_prescription`
  ADD PRIMARY KEY (`id`,`_user_id`),
  ADD KEY `fk__user_prescription__user1_idx` (`_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `_food`
--
ALTER TABLE `_food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `_group`
--
ALTER TABLE `_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `_meal`
--
ALTER TABLE `_meal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `_meal_item`
--
ALTER TABLE `_meal_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `_meal_type`
--
ALTER TABLE `_meal_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `_measurement`
--
ALTER TABLE `_measurement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `_need_type`
--
ALTER TABLE `_need_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `_state`
--
ALTER TABLE `_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `_user`
--
ALTER TABLE `_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `_user_level`
--
ALTER TABLE `_user_level`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `_user_meal_prescription`
--
ALTER TABLE `_user_meal_prescription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `_user_prescription`
--
ALTER TABLE `_user_prescription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `_food`
--
ALTER TABLE `_food`
  ADD CONSTRAINT `fk__food__group1` FOREIGN KEY (`_group_id`) REFERENCES `_group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__food__measurement1` FOREIGN KEY (`_measurement_id`) REFERENCES `_measurement` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `_group`
--
ALTER TABLE `_group`
  ADD CONSTRAINT `fk__group__need_type1` FOREIGN KEY (`_need_type_id`) REFERENCES `_need_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `_meal`
--
ALTER TABLE `_meal`
  ADD CONSTRAINT `fk__meal__meal_type1` FOREIGN KEY (`_meal_type_id`) REFERENCES `_meal_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__meal__user_prescription1` FOREIGN KEY (`_user_prescription_id`) REFERENCES `_user_prescription` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `_meal_item`
--
ALTER TABLE `_meal_item`
  ADD CONSTRAINT `fk__meal_item__food1` FOREIGN KEY (`_food_id`) REFERENCES `_food` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__meal_item__meal1` FOREIGN KEY (`_meal_id`) REFERENCES `_meal` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__meal_item__measurement1` FOREIGN KEY (`_measurement_id`) REFERENCES `_measurement` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `_user`
--
ALTER TABLE `_user`
  ADD CONSTRAINT `fk__user__user_level1` FOREIGN KEY (`_user_level_id`) REFERENCES `_user_level` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `_user_meal_prescription`
--
ALTER TABLE `_user_meal_prescription`
  ADD CONSTRAINT `fk__user_meal_prescription__group1` FOREIGN KEY (`_group_id`) REFERENCES `_group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__user_meal_prescription__meal_type1` FOREIGN KEY (`_meal_type_id`) REFERENCES `_meal_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk__user_meal_prescription__user_prescription1` FOREIGN KEY (`_user_prescription_id`) REFERENCES `_user_prescription` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `_user_prescription`
--
ALTER TABLE `_user_prescription`
  ADD CONSTRAINT `fk__user_prescription__user1` FOREIGN KEY (`_user_id`) REFERENCES `_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
