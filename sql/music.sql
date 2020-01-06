/*
Navicat MySQL Data Transfer

Source Server         : huangfushengkun
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : wolong

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-01-06 20:17:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music` (
  `created_at` datetime DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(64) DEFAULT '',
  `content` varchar(300) DEFAULT NULL,
  `mp3_url` varchar(100) DEFAULT '',
  `pubdate` date DEFAULT NULL,
  `fav_nums` smallint(6) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('2019-11-01 14:19:13', '1', '1', 'http://chuantu.xyz/t6/710/1578212086x1033347913.png', '无人问我粥可温 风雨不见江湖人', 'http://music.163.com/song/media/outer/url?id=393926.mp3', '2018-06-22', '96', '200', '月之门《枫华谷的枫林》', null, '2020-01-05 13:26:06');
INSERT INTO `music` VALUES ('2019-11-03 14:19:19', '1', '2', 'http://chuantu.xyz/t6/710/1578211898x1031866013.png', '你陪我步入蝉夏 越过城市喧嚣', 'http://music.163.com/song/media/outer/url?id=516076896.mp3', '2018-06-22', '48', '200', '花粥 《纸短情长》', null, '2020-01-05 16:07:23');
INSERT INTO `music` VALUES ('2019-11-03 14:19:23', '1', '3', 'http://chuantu.xyz/t6/710/1578212005x1031866013.png', '岁月长，衣裳薄', 'http://music.163.com/song/media/outer/url?id=317245.mp3', '2018-06-22', '44', '200', '杨千嬅《再见二丁目》', null, '2020-01-06 20:12:04');
INSERT INTO `music` VALUES ('2019-11-03 15:13:14', '1', '4', 'https://i.loli.net/2020/01/05/5lAMZjJh1qTUaOz.png', '许多人来来去去，相聚又别离', 'http://music.163.com/song/media/outer/url?id=26427662.mp3', '2018-06-22', '68', '200', '好妹妹 《一个人的北京》', null, '2020-01-06 15:32:39');
