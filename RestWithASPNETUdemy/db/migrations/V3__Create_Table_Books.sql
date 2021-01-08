CREATE TABLE IF NOT EXISTS `book` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `author` varchar(80) NOT NULL,
  `pages` int NOT NULL,
  PRIMARY KEY (`id`)
) 