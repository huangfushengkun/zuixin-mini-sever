/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:16:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for favor
-- ----------------------------
DROP TABLE IF EXISTS `favor`;
CREATE TABLE `favor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `art_id` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of favor
-- ----------------------------
INSERT INTO `favor` VALUES ('18', '6', '1', '200', '2020-01-05 13:26:06', '2020-01-05 13:26:06', null);
INSERT INTO `favor` VALUES ('32', '6', '2', '400', '2020-01-05 15:16:31', '2020-01-05 15:16:31', null);
INSERT INTO `favor` VALUES ('40', '6', '6', '400', '2020-01-05 15:22:16', '2020-01-05 15:22:16', null);
INSERT INTO `favor` VALUES ('57', '6', '2', '200', '2020-01-05 16:07:23', '2020-01-05 16:07:23', null);
INSERT INTO `favor` VALUES ('61', '6', '3', '400', '2020-01-05 18:21:10', '2020-01-05 18:21:10', null);
INSERT INTO `favor` VALUES ('63', '6', '541', '400', '2020-01-06 19:39:16', '2020-01-06 19:39:16', null);
INSERT INTO `favor` VALUES ('64', '6', '540', '400', '2020-01-06 19:59:26', '2020-01-06 19:59:26', null);
