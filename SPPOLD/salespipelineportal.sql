-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 12, 2016 at 07:37 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+05:30";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `salespipelineportal`
--
CREATE DATABASE IF NOT EXISTS `salespipelineportal` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `salespipelineportal`;

-- --------------------------------------------------------

--
-- Table structure for table `salespipelineportal`
--

CREATE TABLE IF NOT EXISTS `salespipelineportal` (
  `proj_id` int(255) NOT NULL AUTO_INCREMENT,
  `proj_ru` varchar(255) NOT NULL,
  `proj_solu` varchar(255) NOT NULL,
  `proj_comp` varchar(255) NOT NULL,
  `proj_status` varchar(255) NOT NULL,
  `proj_q2fy16` int(255) DEFAULT '0',
  `proj_statusq2fy16` varchar(255) DEFAULT '0%',
  `proj_contributionq2fy16` int(255) DEFAULT '0',
  `proj_q3fy16` int(255) DEFAULT '0',
  `proj_statusq3fy16` varchar(255) DEFAULT '0%',
  `proj_contributionq3fy16` int(255) DEFAULT '0',
  `proj_q4fy16` int(255) DEFAULT '0',
  `proj_statusq4fy16` varchar(255) DEFAULT '0%',
  `proj_contributionq4fy16` int(255) DEFAULT '0',
  `proj_q1fy17` int(255) DEFAULT '0',
  `proj_statusq1fy17` varchar(255) DEFAULT '0%',
  `proj_contributionq1fy17` int(255) DEFAULT '0',
  `proj_deal` int(255) NOT NULL,
  `proj_comm` varchar(255) NOT NULL,
  `user_info` varchar(255) NOT NULL,
  `curr_date` TIMESTAMP not null,

  PRIMARY KEY (`proj_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `salespipelineportal`
--

INSERT INTO `salespipelineportal` (`proj_id`,`proj_ru`,`proj_solu`, `proj_comp`, `proj_status`, `proj_q2fy16`,`proj_statusq2fy16`, `proj_contributionq2fy16`,`proj_q3fy16`,`proj_statusq3fy16`,`proj_contributionq3fy16`,`proj_q4fy16`,`proj_statusq4fy16`,`proj_contributionq4fy16`,`proj_q1fy17`,`proj_statusq1fy17`,`proj_contributionq1fy17`,`proj_deal`,`proj_comm`) VALUES
(1, 'US', 'Data Integration', 'Sobeys data management & visualization','Active Discussion', '100','100%','50%', '100','100%','50%','100','100%','50%', '100','100%','50%', '150', 'First round Finalised','Harsvardhan Tripathy');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
