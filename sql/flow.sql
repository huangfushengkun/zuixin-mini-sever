/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:16:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for flow
-- ----------------------------
DROP TABLE IF EXISTS `flow`;
CREATE TABLE `flow` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of flow
-- ----------------------------
INSERT INTO `flow` VALUES ('2019-04-05 17:11:14', '1', '1', '1', '200', '3', null, null);
INSERT INTO `flow` VALUES ('2019-04-05 17:11:21', '1', '2', '2', '300', '2', null, null);
INSERT INTO `flow` VALUES ('2019-04-05 17:11:27', '1', '3', '3', '200', '2', null, null);
INSERT INTO `flow` VALUES ('2019-04-02 17:11:50', '1', '4', '4', '100', '2', null, null);
INSERT INTO `flow` VALUES ('2019-04-17 17:11:56', '1', '5', '6', '300', '1', null, null);
INSERT INTO `flow` VALUES ('2019-04-05 17:12:00', '1', '6', '7', '200', '1', null, null);
INSERT INTO `flow` VALUES ('2019-04-05 17:12:04', '1', '7', '9', '100', '1', null, null);
INSERT INTO `flow` VALUES ('2019-04-05 17:12:07', '1', '8', '5', '200', '4', null, null);
INSERT INTO `flow` VALUES ('2019-12-27 17:27:08', '1', '9', '8', '400', '1', null, null);
INSERT INTO `flow` VALUES ('2020-01-03 19:18:05', '1', '10', '10', '400', '2', null, null);
