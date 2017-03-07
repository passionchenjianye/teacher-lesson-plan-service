const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  content: String, // 教学内容
  target: String, // 教学目标
  difficulty: String, // 教学难点
  details: [
    {
      category: String, // 运动分类id
      process: String, // 教学过程
      target: String, // 教学内容与目标
      method: String, // 教学组织与方法
      comment: String, // 备注
    },
  ], // 教学过程与内容
  grade: String, // 年级
  class: String, // 班级id
  studentNum: Number, // 学生人数
  school: String, // 学校id
  schoolyear: String, // 学年：2016-2017
  term: Number, // 学期：1
  week: Number, // 周次
  lesson: Number, // 课次
  teacher: String, // 上课老师
  lessonAt: Date, // 上课时间
  createAt: Date,
  updateAt: Date,
  createBy: String,
});

module.exports = mongoose.model('teacher_lesson_plan', schema);
