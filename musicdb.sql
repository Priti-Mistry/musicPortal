-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 29, 2024 at 01:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `MusicCds`
--

CREATE TABLE `MusicCds` (
  `id` int(11) NOT NULL,
  `album_name` varchar(255) NOT NULL,
  `singer` varchar(255) NOT NULL,
  `composer_name` varchar(255) NOT NULL,
  `launch_date` datetime NOT NULL,
  `place` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `record_label` varchar(255) NOT NULL,
  `total_track` varchar(255) NOT NULL,
  `duration` time NOT NULL,
  `format` varchar(255) NOT NULL,
  `price` bigint(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `MusicCds`
--

INSERT INTO `MusicCds` (`id`, `album_name`, `singer`, `composer_name`, `launch_date`, `place`, `genre`, `record_label`, `total_track`, `duration`, `format`, `price`, `createdAt`, `updatedAt`, `UserId`) VALUES
(9, 'Dark Side of the Moon', 'Pink Floyd', 'Roger Waters, David Gilmour, Richard Wright, Nick Mason', '2024-01-02 00:00:00', 'London, United Kingdom', 'pop', 'Harvest Records', '10', '00:42:34', 'mp3', 19, '2024-01-29 12:47:46', '2024-01-29 12:47:46', 4),
(10, 'Euphoria', 'BTS', 'Pdogg, RM, and others', '2024-01-20 00:00:00', 'Seoul, South Korea', 'pop', 'Big Hit Music', '12', '00:45:32', 'wav', 25, '2024-01-29 12:48:55', '2024-01-29 12:48:55', 4),
(11, 'Back in Black', 'AC/DC', 'Angus Young, Malcolm Young, Brian Johnson', '2023-12-13 00:00:00', 'Bahamas', 'jazz', 'Atlantic Records', '10', '00:46:43', 'wma', 15, '2024-01-29 12:50:50', '2024-01-29 12:50:50', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'test1', 'test@gmail.com', '$2b$10$xZS/qAMgfwIJtmmdRLryrO.HLHCCQSiUo5cZ3aaPFIAivgIec1wyO', '2024-01-29 06:43:10', '2024-01-29 06:43:10'),
(2, 'rajvi', 'rajvi@gamil.com', '$2b$10$4bU/oo2Ogb/0.SrD80uNhOXKss4pfHcf9hD8EEX40ujvNTFsIgToi', '2024-01-29 08:07:13', '2024-01-29 08:07:13'),
(3, 'preeti', 'preeti@gmail.com', '$2b$10$YmgY/hSN0tN3Gi17AOoql.O3WJ.n2Aa69AQkPrnGPD4GufoL8p0GG', '2024-01-29 08:33:26', '2024-01-29 08:33:26'),
(4, 'rinku', 'rinku@gmail.com', '$2b$10$u2F2qLBDL3CkQCGaChlgWefbeir3YPIsdfi21s3MrwaYnW0yA6pKu', '2024-01-29 08:44:02', '2024-01-29 08:44:02'),
(5, 'user1', 'user1@gmail.com', '$2b$10$Cqrl9duNKroNVEetZorJJ.sBEoNkQIorOPKsvNjTxJvR4YCET2wzG', '2024-01-29 09:03:57', '2024-01-29 09:03:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `MusicCds`
--
ALTER TABLE `MusicCds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `MusicCds`
--
ALTER TABLE `MusicCds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `MusicCds`
--
ALTER TABLE `MusicCds`
  ADD CONSTRAINT `MusicCds_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
