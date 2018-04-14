-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2018 at 07:20 AM
-- Server version: 5.6.11
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `new`
--

-- --------------------------------------------------------

--
-- Table structure for table `listproduct`
--

CREATE TABLE IF NOT EXISTS `listproduct` (
  `categoryID` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `detail` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `priceMarket` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `priceStore` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `productID` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trade` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sale` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `percent` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `listproduct`
--

INSERT INTO `listproduct` (`categoryID`, `name`, `slug`, `content`, `detail`, `priceMarket`, `priceStore`, `productID`, `trade`, `sale`, `percent`, `id`, `createdAt`, `updatedAt`) VALUES
(1, 'may', 'may-hut-sua-doi-bang-unimom-forte-um880038', 'Máy hút sữa đôi bằng điện Unimom Forte  Máy hút sữa đôi bằng điện không có BPA Unimom Forte  (có mátxa silicon, made in Korea)                          ', 'chua ro', '2300000', '2000000', NULL, 'chưa rõ', '', '13', 1, '2018-04-05 00:00:00', NULL),
(9, 'Máy hút sữa đôi bằng điện Unimom Forte UM880038', 'may-hut-sua-doi-bang-unimom-forte-um880038', 'Máy hút sữa đôi bằng điện Unimom Forte  Máy hút sữa đôi bằng điện không có BPA Unimom Forte  (có mátxa silicon, made in Korea)                          ', 'chua ro', '2400000', '2000000', '#123', 'chưa rõ', NULL, '13', 2, '2018-04-01 00:00:00', NULL),
(3, 'Máy hút sữa đôi bằng điện Unimom Forte UM880038', 'may-hut-sua-doi-bang-unimom-forte-um880038', 'Máy hút sữa đôi bằng điện Unimom Forte  Máy hút sữa đôi bằng điện không có BPA Unimom Forte  (có mátxa silicon, made in Korea)                          ', 'chua ro', '2500000', '2000000', '#312', 'chưa rõ', '20', '13', 3, '2018-04-02 00:00:00', NULL),
(3, 'Máy hút sữa đôi bằng điện Unimom Forte UM880038', 'may-hut-sua-doi-bang-unimom-forte-um880038', 'Máy hút sữa đôi bằng điện Unimom Forte  Máy hút sữa đôi bằng điện không có BPA Unimom Forte  (có mátxa silicon, made in Korea)                          ', 'chua ro', '2600000', '2000000', '234', 'chưa rõ', '30', '13', 4, '2018-04-02 00:00:00', NULL),
(3, 'Máy hút sữa đôi bằng điện Unimom Forte UM880038', 'may-hut-sua-doi-bang-unimom-forte-um880038', 'Máy hút sữa đôi bằng điện Unimom Forte  Máy hút sữa đôi bằng điện không có BPA Unimom Forte  (có mátxa silicon, made in Korea)                          ', 'chua ro', '2700000', '2000000', NULL, 'chưa rõ', '50', '13', 5, '2018-04-06 00:00:00', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
