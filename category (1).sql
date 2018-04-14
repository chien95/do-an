-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2018 at 07:26 AM
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
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `level` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `parent` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `action` tinyint(1) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=25 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`name`, `slug`, `level`, `parent`, `action`, `image`, `id`, `createdAt`, `updatedAt`) VALUES
('Thời trang & Phụ kiện', 'thoi-trang-va-lam-dep', '1', '0', 1, NULL, 1, NULL, NULL),
('Làm đẹp & Sức khỏe', 'lam-dep-va-suc-khoe', '1', '0', 0, NULL, 2, NULL, NULL),
('Gia dụng & Điện lạnh', 'gia-dung-dien-lanh', '1', '0', 0, NULL, 3, NULL, NULL),
('Điện thoại & Tablet', 'dien-thoai-va-tablet', '1', '0', 0, NULL, 4, NULL, NULL),
('Phụ kiện công nghệ', 'phu-kien-cong-nghe', '1', '0', 1, NULL, 5, NULL, NULL),
('Laptop & Thiết bị IT', 'laptop-thiet-bi-it', '1', '0', 0, NULL, 6, NULL, NULL),
('Sách & VPP', 'sach-vpp', '1', '0', 0, NULL, 7, NULL, NULL),
('Mẹ & Bé', 'me-va-be', '1', '0', 0, NULL, 8, NULL, NULL),
('Áo khoát nam/nữ', 'ao-khoat', '2', '1', 0, NULL, 9, NULL, NULL),
('Áo thun nam/nữ', 'ao-thun', '2', '1', 0, NULL, 10, NULL, NULL),
('Áo sơ mi nam/nữ', 'ao-so-mi', '2', '1', 0, NULL, 11, NULL, NULL),
('Giày thể thao', 'giay-the-thao', '2', '1', 0, NULL, 12, NULL, NULL),
('Balo nam/nữ', 'balo', '2', '1', 0, NULL, 13, NULL, NULL),
('Túi xách nam/nữ', 'tui-xach', '2', '1', 0, NULL, 14, NULL, NULL),
('Phụ kiện', 'phu-kien', '2', '1', 0, NULL, 15, NULL, NULL),
('Tai nghe laptop', 'tai-nghe-laptop', '2', '5', 0, NULL, 19, NULL, NULL),
('USB', 'usb', '2', '5', 0, NULL, 20, NULL, NULL),
('Sạc dự phòng', 'sac-du-phong', '2', '5', 0, NULL, 21, NULL, NULL),
('Gậy tự sướng', 'gay-tu-xuong', '2', '5', 0, NULL, 22, NULL, NULL),
('Chuột máy tính', 'chuot-may-tinh', '2', '5', 0, NULL, 23, NULL, NULL),
('Phụ kiện khác', 'phu-kien-khac', '2', '5', 0, NULL, 24, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
