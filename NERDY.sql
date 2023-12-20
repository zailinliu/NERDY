-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: team
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `acc`
--

DROP TABLE IF EXISTS `acc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acc` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mainimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acc`
--

LOCK TABLES `acc` WRITE;
/*!40000 ALTER TABLE `acc` DISABLE KEYS */;
INSERT INTO `acc` VALUES (1,'https://whoisnerdy.com/web/product/big/202310/59496174040e1f07d261df69ca8ef78e.png','플리스 리버시블 트루퍼 햇',55200,'20%'),(2,'https://whoisnerdy.com/web/product/small/202310/26bab76f9e86bee30406ff8c7f3cb2c5.png','크라운 백팩',101400,'40%'),(3,'https://whoisnerdy.com/web/product/small/202310/3e8044104adc95d617e4ec4ab55911bc.png','블랭크 로고 워터 프루프 팩',9900,'34%'),(4,'https://whoisnerdy.com/web/product/small/202309/a28bc7f8b88688efb20c9173cbf096f2.png','그레이트 딜 볼 캡',31200,'20%'),(5,'https://whoisnerdy.com/web/product/small/202309/cd7cb170fb2dc7dcd7311eec5d104856.png','우먼스 컬리 퍼 호보백 세트',143880,'34%'),(6,'https://whoisnerdy.com/web/product/small/202309/35f7ed102cfe01f862197b61549300f2.png','빅 핀휠 볼 캡',27300,'30%'),(7,'https://whoisnerdy.com/web/product/big/202309/7989f7a1d2382f5fe678809a889a38fe.png','에센셜 핀휠 캠프 캡',31200,'20%'),(8,'https://whoisnerdy.com/web/product/big/202309/92b53ad42a21b745f55fd4f56a3f78de.png','핀휠 베레모',44100,'10%'),(9,'https://whoisnerdy.com/web/product/big/202309/cdcab803762125cd55c64e0cc75e584a.png','에센셜 핀휠 버킷햇',36000,'20%'),(10,'https://whoisnerdy.com/web/product/small/202308/0168945c210c417f9fc62c680079fa88.png','핀휠 슬링백',69300,'30%'),(11,'https://whoisnerdy.com/web/product/small/202308/3c58f0594659774d77a9d305eefd3ef8.png','오드 백팩',83300,'30%'),(12,'https://whoisnerdy.com/web/product/small/202308/dd7543e4ca36fe308d29b51d18126c6c.png','핀휠 더플백',71200,'20%'),(13,'https://whoisnerdy.com/web/product/small/202308/2ea095e85cc65541725f12294a20d5da.png','더플 호보 크로스백',55200,'20%'),(14,'https://whoisnerdy.com/web/product/small/202308/6ed81bdef2feb3861a7c2dd1a39bac9e.png','핀휠 미니 크로스백',47200,'20%'),(15,'https://whoisnerdy.com/web/product/small/202307/ded87aec2ddeafcfd835763bd3fc3c22.png','스웨이드 트루퍼 햇',62100,'10%'),(16,'https://whoisnerdy.com/web/product/small/202307/c47fb7b2c99e2da83edc66fd5a58963d.png','스웨이드 투웨이 호보백',63200,'20%'),(17,'https://whoisnerdy.com/web/product/small/202307/9e29e9552cfa3cc175a6dbf4cc86b80a.png','패디드 크로스백',63200,'20%'),(18,'https://whoisnerdy.com/web/product/small/202307/5406fbd9c7ed5f917f9130900d9fdde6.png','엠브로이더리 로고 레그 워머',15200,'20%'),(19,'https://whoisnerdy.com/web/product/small/202306/2838a7bea589402eebe408b0fbd79e96.png','블랭크 로고 비니',37800,'10%'),(20,'https://whoisnerdy.com/web/product/big/202306/8fbb83a4712f4ba9cd34b46550d9bcad.png','로고 자카드 비니',35100,'10%');
/*!40000 ALTER TABLE `acc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bestitem`
--

DROP TABLE IF EXISTS `bestitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bestitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mainimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bestitem`
--

LOCK TABLES `bestitem` WRITE;
/*!40000 ALTER TABLE `bestitem` DISABLE KEYS */;
INSERT INTO `bestitem` VALUES (1,'https://whoisnerdy.com/web/product/big/202310/20cde171027a6a842e3d3228181094ac.png','[2SET] 플러피 플리스 자켓',142500,'28%'),(2,'https://whoisnerdy.com/web/product/big/202307/8133f567f6daca77d0eb9e5c0ba5b1e3.png','플러피 플리스 자켓',79200,'20%'),(3,'https://whoisnerdy.com/web/product/tiny/202310/814a7ed6c6c25e8e0250848cf629a3fb.png','솔리드 롱 다운 자켓',174500,'50%'),(4,'https://whoisnerdy.com/web/product/tiny/202309/c241b3369b895956ff58d14c74cba891.png','벨루아 파이핑 트랙 세트',149760,'28%'),(5,'https://whoisnerdy.com/web/product/tiny/202309/f3ccb7bc2907381588a5028b4e37bb68.png','벨루아 파이핑 트랙 탑',87200,'20%'),(6,'https://whoisnerdy.com/web/product/tiny/202311/9b534f23d6c906e660e12fd58e80534e.webp','프라그먼트 디태처블 푸퍼 자켓',151200,'20%'),(7,'https://whoisnerdy.com/web/product/tiny/202308/4855e60ec4d9ed9cbc5a933d92925626.png','파이핑 에센셜 후디 세트',135360,'28%'),(8,'https://whoisnerdy.com/web/product/big/202308/4aee015ce61ffd92826931a35a607735.png','파이핑 에센셜 후디',79200,'20%'),(9,'https://whoisnerdy.com/web/product/big/202309/3dab34727c1487f9cccb09972aee2784.png','우먼스 래글런 크롭 후디 집업',71200,'20%'),(10,'https://whoisnerdy.com/web/product/big/202309/f5c0001166764257f75c7a45fd67617e.png','레이싱 트랙 탑',90300,'30%'),(11,'https://whoisnerdy.com/web/product/big/202308/499e24cc5fa6b8e3dc1459fe55ebaa03.png','부클 로고 풀오버 후디 세트',132480,'28%'),(12,'https://whoisnerdy.com/web/product/big/202307/e57c67457d36a0297eb5f4a467b51cc6.png','부클 로고 풀오버 후디',79200,'20%'),(13,'https://whoisnerdy.com/web/product/big/202310/b2e48c5130c27798c25b378ecc990af8.png','빅 로고 풀오버 후디',44500,'50%'),(14,'https://whoisnerdy.com/web/product/big/202306/c1e4921e4b3425eff62c3afd4b0ede28.png','에센셜 다운 자켓',159200,'20%'),(15,'https://whoisnerdy.com/web/product/big/202306/c2c48a81efcf4c0a1ff8e4fb8c3fb3c6.png','카라 플리스 자켓',5200,'60%'),(16,'https://whoisnerdy.com/web/product/big/202210/6f3cade653116adacc0a3d4d11fce37b.png','에센셜 기모 스웻셔츠',45750,'45%'),(17,'https://whoisnerdy.com/web/product/big/202306/dd5c040128565476c147d140d078fafd.png','우먼스 크롭 에코 후드집업',99000,'34%'),(18,'https://whoisnerdy.com/web/product/big/202309/9afb55d2dcd3abc56eff5f4fc878250b.png','우먼스 엔와이 사이드 블락 크롭 후디 세트',142560,'28%'),(19,'https://whoisnerdy.com/web/product/big/202309/33e383992b19a12639b611a01d5e1b47.png','우먼스 엔와이 사이드 블락 크롭 후디',79200,'20%'),(20,'https://whoisnerdy.com/web/product/big/202310/0bdd453e57e6855d6707f46f59dedc80.png','에코 레더 트랙 탑',159200,'20%');
/*!40000 ALTER TABLE `bestitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookbook`
--

DROP TABLE IF EXISTS `lookbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lookbook` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookbook`
--

LOCK TABLES `lookbook` WRITE;
/*!40000 ALTER TABLE `lookbook` DISABLE KEYS */;
INSERT INTO `lookbook` VALUES (1,'2023.11.01~','https://whoisnerdy.com/file_data/multinex//2023/11/08/cd13caff572da93318bf9fd7cb844f99.jpg','NERDY with THE 8 LOOKBOOK','/lookbook/the8lb'),(2,'2023.09.01~','https://whoisnerdy.com/file_data/multinex//2023/09/25/e3abb77fa6f0bdd0269e043cd1d90ff9.jpg','23FW SEASON LOOKBOOK','/lookbook/seasonlb'),(3,'2023.08.29~','https://whoisnerdy.com/file_data/multinex//2023/09/12/3db4ecf25869c34233f368085cfe2250.jpg','23FW EARLY BIRD','/lookbook/earlylb'),(4,'2023.04.27~','https://whoisnerdy.com/file_data/multinex//2023/04/28/7984939c370cc326fff0adc7bcb2dc5b.jpg','BL\'E\'NK COLLECTION Vol.02','/lookbook/blenklb'),(5,'2023.03.30~','https://whoisnerdy.com/file_data/multinex//2023/03/30/4bf951ddeb61a1c1075be31cc8c2f066.jpg','NERDY TENNIS LOOK','/lookbook/tennislb'),(6,'2023.11.01~','https://whoisnerdy.com/file_data/multinex//2023/03/27/a4861a9c8031617022b2471c7c49f399.jpg','DISNEY 2ND COLLECTION','/lookbook/disneylb'),(7,'2022.11.28~2022.12.31','https://whoisnerdy.com/file_data/multinex//2022/11/29/9de960b12471f2c9f27a91cd6145ae95.jpg','CAMPING IN THE WINTER',''),(8,'2022.10.06~2022.12.31','https://whoisnerdy.com/file_data/multinex//2022/10/06/9540f0d073ca1e23f958cc2c2fcd6728.jpg','22FW TAEYEON 2ND COLLECTION',''),(9,'2022.09.23~2022.12.31','https://whoisnerdy.com/file_data/multinex//2022/10/06/2be073b16fa2a3f4549993b8d7269f03.jpg','NERDY x YONSEI UNIVERSITY',''),(10,'2022.08.31~2022.12.31','https://whoisnerdy.com/file_data/multinex//2022/08/31/e106a3fb33e0f30d72ce5e699ed8a6b1.jpg','HYNDAI DEPARTMENT STO...',''),(11,'2022.08.16~2022.12.31','https://whoisnerdy.com/file_data/multinex//2022/08/16/b2afd74acf2d9752818bb166bc789c2c.jpg','22FW TAEYEON 1ST COLLECTION',''),(12,'2022.06.02~2022.12.31','https://whoisnerdy.com/file_data/multinex//2022/06/02/6bb8d93c826c0339fcbfb24e6cf69be3.jpg','DERDIST ADORA','');
/*!40000 ALTER TABLE `lookbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mbslide`
--

DROP TABLE IF EXISTS `mbslide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mbslide` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `text1` varchar(255) NOT NULL,
  `text2` varchar(255) NOT NULL,
  `text3` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mbslide`
--

LOCK TABLES `mbslide` WRITE;
/*!40000 ALTER TABLE `mbslide` DISABLE KEYS */;
INSERT INTO `mbslide` VALUES (1,'11.10 - 11.26','PURPLE FRIDAY','1년에 단 한번! 역대급 할인 혜택','https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/04e7f7ca1797c81236959ab9395b1552.jpg'),(2,'23FW','RISE ANEW, NERDY','세븐틴 THE 8과 함께한 23F/W 컬렉션','https://whoisnerdy.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f85c783fe46b384389d73b0bb2e04784.jpg');
/*!40000 ALTER TABLE `mbslide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `birth_date` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` varchar(5) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_member_login_id` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'1997-12-11','djawlvns@naver.com','male','육성우','rhkd120125!!','test');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newitem`
--

DROP TABLE IF EXISTS `newitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mainimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newitem`
--

LOCK TABLES `newitem` WRITE;
/*!40000 ALTER TABLE `newitem` DISABLE KEYS */;
INSERT INTO `newitem` VALUES (1,'https://whoisnerdy.com/web/product/big/202310/20cde171027a6a842e3d3228181094ac.png','[2SET] 플러피 플리스 자켓',142500,'28%'),(2,'https://whoisnerdy.com/web/product/big/202307/8133f567f6daca77d0eb9e5c0ba5b1e3.png','플러피 플리스 자켓',79200,'20%'),(3,'https://whoisnerdy.com/web/product/big/202311/8d59224b342e49614743dda5982d22c1.png','[2SET]코듀로이 다운 자켓',372000,'28%'),(4,'https://whoisnerdy.com/web/product/big/202307/c47c6ed26f4cc642d8d6c0004ab67fb0.png','코듀로이 다운 자켓',207200,'20%'),(5,'https://whoisnerdy.com/web/product/big/202311/1c7de03cb4dc836d9121af7ab0455aae.webp','프라그먼트 디태처블 푸퍼 자켓',151200,'20%'),(6,'https://whoisnerdy.com/web/product/big/202310/a1814baafbafe8a5455d9a8e1e72ee76.png','솔리드 롱 다운 자켓',174500,'50%'),(7,'https://whoisnerdy.com/web/product/big/202309/192fa0cc253dadd2e508afce0f719e39.png','벨루아 파이핑 트랙 세트',149760,'28%'),(8,'https://whoisnerdy.com/web/product/big/202311/e5f1d3317525a43893b8fa69f773e06c.png','벨루아 파이핑 트랙 탑',87200,'20%'),(9,'https://whoisnerdy.com/web/product/big/202309/60dd09aa3636dae4325e3b7f7252a707.png','레이싱 트랙 세트',156240,'37%'),(10,'https://whoisnerdy.com/web/product/big/202309/f5c0001166764257f75c7a45fd67617e.png','레이싱 트랙 탑',90300,'30%'),(11,'https://whoisnerdy.com/web/product/big/202311/42119764d630adc57e15c1f6a8921bb8.png','[2SET]헤비 볼륨 다운 자켓',387000,'28%'),(12,'https://whoisnerdy.com/web/product/big/202308/ae50d13652214dcf46251cb8e5e53f48.png','파이핑 에센셜 후디 세트',135360,'28%'),(13,'https://whoisnerdy.com/web/product/big/202308/4aee015ce61ffd92826931a35a607735.png','파이핑 에센셜 후디',79200,'20%'),(14,'https://whoisnerdy.com/web/product/big/202310/932a800bdeee14f535f424fb60856b23.png','헤비 볼륨 다운 자켓',215200,'20%'),(15,'https://whoisnerdy.com/web/product/big/202309/d42f1b452fb65980342bd3eb8823da15.png','우먼스 NY 벨벳 크롭 후디 세트',122220,'37%'),(16,'https://whoisnerdy.com/web/product/big/202309/4ef6edd534d2e64bd22e4c3506a897b6.png','우먼스 NY 벨벳 크롭 후디 트랙 탑',69300,'30%'),(17,'https://whoisnerdy.com/web/product/small/202310/023e018bc5bb838a56e43affb83800a1.png','에코 레더 트랙 세트',257760,'28%'),(18,'https://whoisnerdy.com/web/product/big/202310/0bdd453e57e6855d6707f46f59dedc80.png','에코 레더 트랙 탑 브라운',159200,'20%'),(19,'https://whoisnerdy.com/web/product/big/202308/5c0f9fbb2c696362f2b9cc5851ac490a.png','핀휠 자수 트랙 세트',135360,'28%'),(20,'https://whoisnerdy.com/web/product/big/202308/a400187f0423c0138e9de7cfb9048c78.png','핀휠 자수 트랙 탑',79200,'20%');
/*!40000 ALTER TABLE `newitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mainimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale` varchar(255) NOT NULL,
  `searchproducts` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `form_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsxsvt80oroo9sxx0b7a994cle` (`form_id`),
  CONSTRAINT `FKoy9gxvlsib3t50e2qjq1gw5am` FOREIGN KEY (`form_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKsxsvt80oroo9sxx0b7a994cle` FOREIGN KEY (`form_id`) REFERENCES `newitem` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoes`
--

DROP TABLE IF EXISTS `shoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mainimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoes`
--

LOCK TABLES `shoes` WRITE;
/*!40000 ALTER TABLE `shoes` DISABLE KEYS */;
INSERT INTO `shoes` VALUES (1,'https://whoisnerdy.com/web/product/big/202310/d6e18df8fcb9a0cec0901c1c00f4b963.png','러너 하이',119200,'20%'),(2,'https://whoisnerdy.com/web/product/big/202303/6d070f42516ff6bd1caf7ea7aecc6be8.png','마카롱 플립플랍',22500,'50%'),(3,'https://whoisnerdy.com/web/product/small/202303/58bc2ee2b55a8b13e2659038d40370b7.png','마카롱 플립플랍',22500,'50%'),(4,'https://whoisnerdy.com/web/product/big/202303/9f7a92f721f1e9a51b67fe921d7388eb.png','마카롱 플립플랍',22500,'50%'),(5,'https://whoisnerdy.com/web/product/small/202303/ee18542e8a9dc0763e4c6a604f51d7d8.png','마카롱 플립플랍',22500,'50%'),(6,'https://whoisnerdy.com/web/product/small/202303/128c9f2895cd76f18b2d09a294c1c2ea.png','마카롱 플립플랍',22500,'50%'),(7,'https://whoisnerdy.com/web/product/big/202303/4ff8e16f4c35cb3973aa57c28de7af49.png','레인보우 슬라이드',35400,'40%'),(8,'https://whoisnerdy.com/web/product/big/202301/3306c6b3a42d0c04ef49da5c9394f61b.png','레인보우 슬라이드',35400,'40%'),(9,'https://whoisnerdy.com/web/product/big/202304/dfd811332d3fd7866d6053f4c9c6ed86.png','스토니 클로그',38350,'35%'),(10,'https://whoisnerdy.com/web/product/big/202304/6bab7f9f3227d4f2395bc7e6e6f8d326.png','스토니 클로그',38350,'35%'),(11,'https://whoisnerdy.com/web/product/big/202304/8189ae2c50ab3652bcc8f85b6d7b172d.png','스토니 클로그',38350,'35%'),(12,'https://whoisnerdy.com/web/product/big/202303/a0b8c82e4d519518cf4cb74d3e9f657f.png','플러피 플립플랍',35400,'40%'),(13,'https://whoisnerdy.com/web/product/big/202303/d89410d4ff8500d4911b95a7f92b878b.png','플러피 플립플랍',35400,'40%'),(14,'https://whoisnerdy.com/web/product/big/202303/c48b3fbb07f68b28bf89578051851e18.png','플러피 플립플랍',35400,'40%'),(15,'https://whoisnerdy.com/web/product/big/202303/70c10db5977aa40ce40f39f3a121539d.png','리치 브레드 벨크로 슬라이드',53100,'10%'),(16,'https://whoisnerdy.com/web/product/big/202303/20bb2e6bf8211911caa238a44ea70666.png','리치 브레드 벨크로 슬라이드',53100,'10%'),(17,'https://whoisnerdy.com/web/product/big/202303/ac0ed3fd3771b9b7f870fb659748a049.png','리치 브레드 벨크로 슬라이드',53100,'10%'),(18,'https://whoisnerdy.com/web/product/big/202303/d66dad3b05e316eb2292d32edd18ca0b.png','더블 스트랩 브레드솔 샌들',71200,'20%'),(19,'https://whoisnerdy.com/web/product/big/202303/52d043f263c79d5737ec1222e67530a0.png','더블 스트랩 브레드솔 샌들',71200,'20%'),(20,'https://whoisnerdy.com/web/product/big/202303/0c848c121d5c35c4547865819a96bcce.png','더블 스트랩 브레드솔 샌들',71200,'20%');
/*!40000 ALTER TABLE `shoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `the8`
--

DROP TABLE IF EXISTS `the8`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `the8` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mainimg` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `sale` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `the8`
--

LOCK TABLES `the8` WRITE;
/*!40000 ALTER TABLE `the8` DISABLE KEYS */;
INSERT INTO `the8` VALUES (1,'https://whoisnerdy.com/web/product/big/202309/c5ee5e3f0157fc2ca40b67645a9c2819.png','벨루아 파이핑 트랙 세트',149760,'28%'),(2,'https://whoisnerdy.com/web/product/big/202309/604caf5fdccbb1106e1e8129a9e39812.png','벨루아 파이핑 트랙 탑',87200,'20%'),(3,'https://whoisnerdy.com/web/product/big/202310/40588384795b25ee66780c138c27a7a3.png','에코 레더 트랙 세트',257760,'28%'),(4,'https://whoisnerdy.com/web/product/big/202310/0bdd453e57e6855d6707f46f59dedc80.png','에코 레더 트랙 탑',159200,'20%'),(5,'https://whoisnerdy.com/web/product/big/202309/f463dd4df692de48812bccfd232d40c5.png','레이싱 트랙 세트',178560,'28%'),(6,'https://whoisnerdy.com/web/product/big/202309/51d40e22a276ca4d05c83790b40890e8.png','레이싱 트랙 탑',103200,'20%'),(7,'https://whoisnerdy.com/web/product/big/202308/5aea389877b718efd81486cde5320139.png','라인 트랙 세트',156960,'28%'),(8,'https://whoisnerdy.com/web/product/big/202308/e213c7885c7b268b4acf0059d576f408.png','라인 트랙 탑',192960,'20%'),(9,'https://whoisnerdy.com/web/product/big/202310/1ea27405c333c8714c6529ed692da0ee.png','볼드 라인 윈드브레이커 세트',192960,'28%'),(10,'https://whoisnerdy.com/web/product/big/202310/34a033870b7ad5606a3273e5d39250cd.png','볼드 라인 윈드브레이커',127200,'20%'),(11,'https://whoisnerdy.com/web/product/big/202309/7f1447b3d512e70799a371c39e1ed99a.png','3-레이어 스트럭처 윈드브레이커 세트',221760,'28%'),(12,'https://whoisnerdy.com/web/product/big/202309/deb7672d18b53df0df87bdc4e9478a4b.png','3-레이어 스트럭처 윈드브레이커',151200,'20%'),(13,'https://whoisnerdy.com/web/product/big/202309/4190651627cf737d4bacdbc40f1eaf06.png','커브드 블락 윈드브레이커 세트',200160,'28%'),(14,'https://whoisnerdy.com/web/product/big/202309/47470131885bdeb4cdeb86169c1baf36.png','커브드 블락 윈드브레이커',127200,'20%'),(15,'https://whoisnerdy.com/web/product/big/202309/40c6646c26cec807a9b3ae209b59ba81.png','라인 윈드브레이커 세트',192960,'28%'),(16,'https://whoisnerdy.com/web/product/big/202309/31c35eea10be003049706e01df34426c.png','라인 윈드브레이커',119200,'20%'),(17,'https://whoisnerdy.com/web/product/big/202309/9afb55d2dcd3abc56eff5f4fc878250b.png','우먼스 엔와이 사이드 블락 크롭 후디 세트',142560,'28%'),(18,'https://whoisnerdy.com/web/product/big/202309/33e383992b19a12639b611a01d5e1b47.png','우먼스 엔와이 사이드 블락 크롭 후디',79200,'20%'),(19,'https://whoisnerdy.com/web/product/big/202310/932a800bdeee14f535f424fb60856b23.png','헤비 볼륨 다운 자켓',215200,'20%'),(20,'https://whoisnerdy.com/web/product/big/202310/c7aa563f9f5c6aaa8d33bee5635e6288.png','리얼 퍼 미드 다운 자켓',303200,'20%');
/*!40000 ALTER TABLE `the8` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-20 15:17:53
