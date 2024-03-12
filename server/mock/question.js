const mock = require('mockjs')

const Random = mock.Random

module.exports = [
  {
    url: "/question/list",
    method: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          "total": 20,
          "items": [
            {
              "id": 1,
              "title": Random.ctitle(),
              "content": Random.cparagraph(),
              "answer": Random.cparagraph()
            }
          ]
        }
      }
    }
  }
]