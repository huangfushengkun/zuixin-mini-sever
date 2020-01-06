/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:17:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for types
-- ----------------------------
DROP TABLE IF EXISTS `types`;
CREATE TABLE `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `createdTime` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`type`),
  UNIQUE KEY `t_types_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of types
-- ----------------------------
INSERT INTO `types` VALUES ('6', 'Labs', '2018-08-10 17:25:13', null, null, null);
INSERT INTO `types` VALUES ('1', '悦读', '2018-08-10 17:25:13', null, null, null);
INSERT INTO `types` VALUES ('2', '情感', '2018-08-10 17:25:13', null, null, null);
INSERT INTO `types` VALUES ('4', '校园', '2018-08-10 17:25:13', null, null, null);
INSERT INTO `types` VALUES ('3', '连播', '2018-08-10 17:25:13', null, null, null);
INSERT INTO `types` VALUES ('5', '音乐', '2018-08-10 17:25:13', null, null, null);
