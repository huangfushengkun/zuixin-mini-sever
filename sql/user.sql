/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:17:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `openid` varchar(64) DEFAULT NULL,
  `authority` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `openid` (`openid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2', '美艳如诗', 'sunhuiyan2000@163.com', '$2a$10$wgw8AqGM9zo8N7kJvc17fOTCOPq9VPjuX1nM4gZjHdmkkReBpyoSi', null, '8', '2019-12-24 10:17:12', '2019-12-24 10:17:12', null);
INSERT INTO `user` VALUES ('3', '胡说八道', 'denghao@163.com', '$2a$10$c2IkwVZhwNWMZ/y9JjMTq.q.Cw6ct3lFjrLws9iK2yZ3zxqpXa9ly', null, '8', '2019-12-25 09:31:01', '2019-12-25 09:31:01', null);
INSERT INTO `user` VALUES ('6', null, null, null, 'onrCp5TQPthlRRJTmFjvfjQJmU7g', '8', '2019-12-25 14:25:44', '2019-12-25 14:25:44', null);
INSERT INTO `user` VALUES ('7', '一本正经', 'dongfan@163.com', '$2a$10$evucpW0bAuTZ5Q2uh/MpW.t1ubwKMkU91ZTipcUaXgIE8HgLMSwPO', null, '8', '2019-12-25 14:44:20', '2019-12-25 14:44:20', null);
INSERT INTO `user` VALUES ('8', '一本正经', 'huangfushengkun@163.com', '$2a$10$qXHuNcuI4BbVps5K78nGxeFeJUXvg7my.SJbRw7yR0.jCnKoFafAG', null, '8', '2019-12-27 10:04:29', '2019-12-27 10:04:29', null);
