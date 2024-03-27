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
      }).items.slice(0, 10) // Slice the generated questions to match total

      return {
        code: 20000,
        total,
        items,
      }
    },
  },
  {
    url: '/api/question/:id',
    method: 'put',
    response() {
      return {
        code: 20000,
        data: 'success',
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
          title: Mock.Random.ctitle(5),
          description: Mock.Random.cparagraph(10, 20),
          jsCode: '',
          cssCode: '',
          isPubliced: true,
          isStar: Mock.Random.boolean(),
          answerCount: Mock.Random.integer(1, 3),
          createTime: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
          components: [
            {
              fe_id: Mock.Random.guid(),
              type: 'title',
              title: Mock.Random.ctitle(10, 20),
              isHidden: false,
              props: {
                level: Mock.Random.integer(1, 3),
                title: Mock.Random.ctitle(10, 20),
                isCenter: Mock.Random.boolean()
              }
            },
            {
              fe_id: Mock.Random.guid(),
              type: 'input',
              title: Mock.Random.ctitle(10, 20),
              isHidden: false,
              isLocked: false,
              props: {
                title: '这是一个输入框',
                placeholder: '请输入',
              }
            },
            {
              fe_id: Mock.Random.guid(),
              type: 'radio',
              title: Mock.Random.ctitle(10, 20),
              isHidden: false,
              isLocked: false,
              props: {
                title: '这是一个radio',
                placeholder: '请输入',
                options: [
                  {
                    text: '选项1',
                    value: '1',
                  },
                  {
                    text: '选项2',
                    value: '2',
                  },
                ],
              },
            },
            {
              fe_id: Mock.Random.guid(),
              type: 'checkBox',
              title: Mock.Random.ctitle(10, 20),
              isHidden: false,
              isLocked: false,
              props: {
                title: '这是一个checkbox',
                placeholder: '请输入',
                list: [
                  {
                    text: '选项1',
                    value: '1',
                    checked: false,
                  },
                  {
                    text: '选项2',
                    value: '2',
                    checked: false,
                  },
                ],
              },
            },
          ]
        },
      }
    },
  }
]