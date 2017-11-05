CREATE DATABASE  IF NOT EXISTS `game` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `game`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: game
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `achievementtable`
--

DROP TABLE IF EXISTS `achievementtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `achievementtable` (
  `id` int(11) NOT NULL,
  `aid` int(11) NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `achievementtable_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usertable` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievementtable`
--

LOCK TABLES `achievementtable` WRITE;
/*!40000 ALTER TABLE `achievementtable` DISABLE KEYS */;
/*!40000 ALTER TABLE `achievementtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gametable`
--

DROP TABLE IF EXISTS `gametable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gametable` (
  `id` int(11) NOT NULL,
  `symbol` char(10) DEFAULT NULL,
  `buyPrice` decimal(12,4) NOT NULL,
  `stockAmount` int(11) NOT NULL,
  `purchaseDate` date NOT NULL,
  `purchaseTime` time NOT NULL,
  KEY `id` (`id`),
  KEY `tid` (`symbol`),
  CONSTRAINT `gametable_ibfk_1` FOREIGN KEY (`id`) REFERENCES `usertable` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gametable`
--

LOCK TABLES `gametable` WRITE;
/*!40000 ALTER TABLE `gametable` DISABLE KEYS */;
/*!40000 ALTER TABLE `gametable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickertable`
--

DROP TABLE IF EXISTS `tickertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tickertable` (
  `symbol` char(10) NOT NULL,
  `date` varchar(10) NOT NULL,
  `time` time NOT NULL,
  `open` decimal(12,4) NOT NULL,
  `high` decimal(12,4) NOT NULL,
  `low` decimal(12,4) NOT NULL,
  `close` decimal(12,4) NOT NULL,
  `current` decimal(12,4) NOT NULL,
  `volume` int(11) NOT NULL,
  PRIMARY KEY (`symbol`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickertable`
--

LOCK TABLES `tickertable` WRITE;
/*!40000 ALTER TABLE `tickertable` DISABLE KEYS */;
/*!40000 ALTER TABLE `tickertable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usertable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(20) NOT NULL,
  `FirstName` varchar(35) NOT NULL,
  `LastName` varchar(35) NOT NULL,
  `email` varchar(60) NOT NULL,
  `StartingMoney` decimal(12,4) NOT NULL,
  `AvailableMoney` decimal(12,4) NOT NULL,
  `InvestedMoney` decimal(12,4) NOT NULL,
  `NetProfit` decimal(12,4) NOT NULL,
  `UniqueStockAmount` int(11) NOT NULL,
  `TotalShares` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-04 22:19:44
