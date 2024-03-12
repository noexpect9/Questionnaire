const Mock = require('mockjs')

module.exports = [
  {
    url: "/api/question/list",
    method: 'get',
    response(config) {
      const total = 20 // Adjust the total number of questions as needed
      const items = Mock.mock({
        'items|100': [ // Generate up to 100 questions, capped at total
          {
            'id': '@increment',
            'title': '@ctitle(10, 20)', // Generate titles between 10 and 20 characters
            'content': '@cparagraph(2, 5)', // Generate content paragraphs between 2 and 5 sentences
            'answer': '@cparagraph(1, 3)', // Generate answer paragraphs between 1 and 3 sentences
          },
        ],
      }).items.slice(0, total) // Slice the generated questions to match total

      return {
        code: 20000,
        data: {
          total,
          items,
        },
      }
    },
  }
]