/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:16:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for movie
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
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
-- Records of movie
-- ----------------------------
INSERT INTO `movie` VALUES ('2019-11-01 14:19:01', '1', '1', 'images/movie.8.png', '人生不能像做菜，把所有的料准备好才下锅', '2018-06-22', '169', '李安《饮食男女 》', '100', '2020-01-06 14:39:57', null);
INSERT INTO `movie` VALUES ('2019-11-03 15:12:48', '1', '2', 'images/movie.4.png', '在变换的生命里，岁月原来是最大的小偷', '2018-06-22', '46', '罗启锐《岁月神偷》', '100', '2020-01-06 14:44:13', null);
