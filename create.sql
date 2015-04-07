CREATE TABLE `mettwoch` (
  `mettwoch_id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `mettmeister` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`mettwoch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

CREATE TABLE `participants` (
  `participant_id` int(11) NOT NULL AUTO_INCREMENT,
  `mettwoch_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `halves` int(11) NOT NULL,
  PRIMARY KEY (`participant_id`),
  KEY `mettwoch_id` (`mettwoch_id`),
  CONSTRAINT `participants_ibfk_1` FOREIGN KEY (`mettwoch_id`) REFERENCES `mettwoch` (`mettwoch_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;