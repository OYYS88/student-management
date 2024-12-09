import mockjs from "mockjs";

let subjects = ['计算机网络原理', 'Java Web 应用开发技术', 'Web前端开发', '软件工程', '编译原理', '数据采集与网络爬虫', '商务礼仪', '地球科学', '财务管理'];
let introductions = ["热爱教学，擅长激发学生兴趣。", "拥有多年教学经验，课程内容生动有趣。", "注重基础知识的巩固与拓展。", "致力于培养学生的思维能力。", "坚持因材施教，帮助学生实现全面发展。",];
let shift = ['计科1班', '计科2班', '计科（远景）'];
let semester = ['2024春', '2024秋', '2025春', '2025秋'];
let xData = ["月考1", "期中考试", "月考2", "月考3", "期末考试"];

const Mock = {
// 配合首页ScoresPage.vue使用
    getOrder() {
        let array = [];
        for (let i = 0; i < 9; i++) {
            let score1 = mockjs.Random.integer(60, 95);  // 平时成绩
            let score2 = mockjs.Random.integer(40, 80);// 考试成绩
            const score = Math.round(score1 * 0.3 + score2 * 0.7);

            array.push(mockjs.mock({
                'studentName': mockjs.Random.cname(),
                'courseName': mockjs.Random.pick(subjects),
                'score1': score1,
                'score2': score2,
                'score': score,
                'className': mockjs.Random.pick(shift),
                'role': mockjs.Random.boolean(),
                'state': score >= 60,
                'phone': mockjs.mock(/^1[3-9]\d{9}$/)
            }));
        }
        return array;
    },
// 配合成绩修改页面RevisePage.vue使用
    getStudentInfo() {
        return mockjs.mock({
            studentId: mockjs.Random.string("number", 8),
            studentName: mockjs.Random.cname(),
            courseCode: `C${mockjs.Random.string("number", 4)}`,
            courseName: mockjs.Random.pick(subjects),
            courseGrade: mockjs.Random.integer(0, 100),
            courseCredits: mockjs.Random.float(1, 4, 1, 1),
            semester: mockjs.Random.pick(semester),
        });
    },
// 配合成绩分析页面AnalyzePage.vue使用
    getChartsData() {
        return {
            xData: xData,
            scores: Array.from({ length: 5 }, () => mockjs.Random.integer(50, 95))
        };
    },
    getTradeData() {
        return mockjs.mock({
            'className': mockjs.Random.pick(shift),
            'subject': mockjs.Random.pick(subjects),
            'participantCount': mockjs.Random.integer(30, 55),
            'time': function() {
                const now = new Date();
                const year = now.getFullYear();
                const month = (now.getMonth() + 1).toString().padStart(2, '0');
                const day = now.getDate().toString().padStart(2, '0');
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const seconds = now.getSeconds().toString().padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            }
        });
    },
// 配合课程信息展示页面CoursePage.vue使用
    getCourses() {
        let array = [];

        for (let i = 0; i < 9; i++) {
            const randomId = mockjs.Random.integer(1, 1000);
            array.push(mockjs.mock({
                'name': mockjs.Random.cname(),
                'gender': mockjs.Random.pick(["男", "女"]),
                'subject': mockjs.Random.pick(subjects),
                'failRate': mockjs.Random.integer(3, 10),
                'introduction': mockjs.Random.pick(introductions),
                'avatar': `https://api.multiavatar.com/${randomId}.png`,
                'phone': mockjs.mock(/^1[3-9]\d{9}$/)
            }));
        }
        return array;
    },
}

export default Mock;
