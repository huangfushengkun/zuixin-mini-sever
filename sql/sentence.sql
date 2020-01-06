/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:17:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sentence
-- ----------------------------
DROP TABLE IF EXISTS `sentence`;
CREATE TABLE `sentence` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(64) DEFAULT '',
  `content` varchar(300) DEFAULT NULL,
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of sentence
-- ----------------------------
INSERT INTO `sentence` VALUES ('2019-11-03 14:19:34', '1', '1', 'images/sentence.6.png', '心上无垢，林间有风', '2018-06-22', '72', '未名', '300', '2020-01-06 15:39:18', null);
INSERT INTO `sentence` VALUES ('2019-11-03 15:15:29', '1', '2', 'images/sentence.2.png', '这个夏天又是一个毕业季', '2018-06-22', '33', '未名', '300', '2020-01-06 19:11:51', null);
