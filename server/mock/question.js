const Mock = require('mockjs')

module.exports = [
  {
    url: '/api/question/create',
    method: 'post',
    response() {
      const id = Mock.Random.guid()
      return {
        code: 20000,
        data: {
          id
        },
      }
    },
  },
  {
    url: "/api/question/list",
    method: 'post',
    response(config) {
      const total = 20 // Adjust the total number of questions as needed
      const items = Mock.mock({
        'items|100': [ // Generate up to 100 questions, capped at total
          {
            '_id': '@guid',
            'title': '@ctitle(10, 20)', // Generate titles between 10 and 20 characters
            'isPubliced': '@boolean',
            'isStar': '@boolean',
            'createTime': '@date("yyyy-MM-dd HH:mm:ss")',
            'answerCount': '@integer(1, 3)', // Generate answer paragraphs between 1 and 3 sentences
          },
        ],
      }).items.slice(0, 80) // Slice the generated questions to match total

      return {
        code: 20000,
        total,
        items,
      }
    },
  },
  {
    // 问卷详情
    url: '/api/question/detail/:id',
    method: 'get',
    response() {
      return {
        code: 20000,
        data: {
          _id: Mock.Random.guid(),
          title: Mock.Random.ctitle(10, 20),
          isPubliced: Mock.Random.boolean(),
          isStar: Mock.Random.boolean(),
          answerCount: Mock.Random.integer(1, 3),
          createTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
        },
      }
    },
  }
]