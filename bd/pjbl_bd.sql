-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: pjbl
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `produtos`
--

CREATE DATABASE IF NOT EXISTS `pjbl_davi_natume`;
USE `pjbl_davi_natume`;

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `idproduto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(145) DEFAULT NULL,
  `marca` varchar(145) DEFAULT NULL,
  `preco_custo` int DEFAULT NULL,
  `preco_venda` int DEFAULT NULL,
  `categoria` enum('Alimentos','Bebidas','Limpeza','Higiene','Hortifruti','Padaria') DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Arroz Integral 10kg','Tio João',500,850,'Hortifruti'),(5,'Sabonete em Barra','Dove',200,450,'Higiene'),(7,'Alface Crespa','Horta Local',200,350,'Hortifruti'),(8,'Maçã Gala 1kg','Frutas S.A.',500,900,'Hortifruti'),(9,'Pão de Forma 500g','Wickbold',450,800,'Padaria'),(12,'Arroz 5kg','Tio João',20,28,'Alimentos'),(13,'Feijão 1kg','Camil',6,9,'Alimentos'),(14,'Macarrão','Barilla',4,7,'Alimentos'),(15,'Leite Integral','Itambé',3,5,'Bebidas'),(16,'Refrigerante Cola 2L','Coca-Cola',6,10,'Bebidas'),(17,'Suco de Laranja','Del Valle',4,7,'Bebidas'),(18,'Detergente','Ypê',2,4,'Limpeza'),(19,'Sabão em Pó','OMO',10,16,'Limpeza'),(20,'Água Sanitária','Qboa',3,6,'Limpeza'),(21,'Desinfetante','Pinho Sol',5,9,'Limpeza'),(22,'Shampoo','Pantene',12,20,'Higiene'),(23,'Condicionador','Pantene',12,20,'Higiene'),(24,'Sabonete','Dove',2,4,'Higiene'),(25,'Creme Dental','Colgate',3,6,'Higiene'),(26,'Escova de Dente','Oral-B',5,9,'Higiene'),(27,'Maçã','Natural',4,7,'Hortifruti'),(28,'Banana','Natural',3,6,'Hortifruti'),(29,'Alface','Natural',2,5,'Hortifruti'),(30,'Tomate','Natural',5,9,'Hortifruti'),(31,'Batata','Natural',4,8,'Hortifruti'),(32,'Pão Francês','Padaria Central',1,2,'Padaria'),(33,'Pão de Forma','Pullman',6,10,'Padaria'),(34,'Bolo de Chocolate','Padaria Central',15,25,'Padaria'),(35,'Croissant','Padaria Central',4,7,'Padaria'),(36,'Sonho','Padaria Central',3,6,'Padaria'),(37,'Café 500g','Pilão',8,14,'Alimentos'),(38,'Açúcar 1kg','União',4,7,'Alimentos'),(39,'Óleo de Soja','Liza',7,11,'Alimentos'),(40,'Água Mineral','Crystal',2,4,'Bebidas'),(41,'Energético','Red Bull',8,14,'Bebidas');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-08 16:54:20
