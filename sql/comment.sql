/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:15:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(12) DEFAULT NULL,
  `like_nums` int(11) DEFAULT 0,
  `dislike_nums` int(11) DEFAULT 0,
  `art_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '美好的人生', '4', '0', '1', '6', '400', null, '2020-01-05 17:46:17', '2020-01-05 17:52:55', null);
INSERT INTO `comment` VALUES ('2', '美好的', '0', '0', '1', '6', '400', '槜心', '2020-01-05 17:57:12', '2020-01-05 17:57:12', null);
INSERT INTO `comment` VALUES ('3', '你好世界！！', '0', '0', '1', '6', '200', null, '2020-01-06 19:24:03', '2020-01-06 19:24:03', null);
INSERT INTO `comment` VALUES ('4', '大家好！', '0', '0', '1', '6', '200', null, '2020-01-06 19:29:58', '2020-01-06 19:29:58', null);
INSERT INTO `comment` VALUES ('5', '皇甫', '1', '0', '1', '6', '200', null, '2020-01-06 19:33:48', '2020-01-06 19:39:33', null);
INSERT INTO `comment` VALUES ('6', '皇甫圣坤', '1', '0', '1', '6', '200', null, '2020-01-06 19:35:20', '2020-01-06 19:48:54', null);
INSERT INTO `comment` VALUES ('7', '孙烩艳', '0', '0', '1', '6', '200', null, '2020-01-06 19:49:32', '2020-01-06 19:49:32', null);
INSERT INTO `comment` VALUES ('8', '圣坤', '0', '0', '1', '6', '200', null, '2020-01-06 19:58:41', '2020-01-06 19:58:41', null);
INSERT INTO `comment` VALUES ('9', '测试1', '0', '0', '1', '6', '200', null, '2020-01-06 20:11:02', '2020-01-06 20:11:02', null);
