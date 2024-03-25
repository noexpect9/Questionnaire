import { FC } from "react";
import { CheckBoxProps, OptionsType } from "./type";
import { Button, Checkbox, Form, Input, Space } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const PropComponent: FC<CheckBoxProps> = (props: CheckBoxProps) => {
  const { title, isVertical, list = [], disabled, onChange } = props

  const [form] = Form.useForm()

  const handleChange = () => {
    if (onChange == null) return
    const newOptions = form.getFieldsValue()
    const { list } = newOptions
    if (list) {
      newOptions.list = list.filter((item: OptionsType) => !(item.text == null))
    }
    list.forEach((item: OptionsType) => {
      if (item.value) return
      // 生成随机value
      item.value = Math.random().toString(36).slice(-8)
    })
    onChange(newOptions)
  }

  return <>
    <Form layout="vertical" form={form} initialValues={{ title, isVertical, list }} disabled={disabled} onValuesChange={handleChange}>
      <Form.Item label={title} name="title">
        <Input />
      </Form.Item>
      <Form.Item label='选项'>
        <Form.List name='list'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }, index) => {
                return <Space key={key} align="baseline" style={{ width: '100%' }}>
                  <Form.Item name={[name, 'checked']} valuePropName="checked">
                    <Checkbox />
                  </Form.Item>
                  <Form.Item name={[name, 'text']} rules={[{ required: true }, {
                    validator: (_, value) => {
                      const { list = [] } = form.getFieldsValue()
                      let num = 0
                      list.forEach((item: OptionsType) => {
                        if (item.text === value) {
                          num++
                        }
                      })
                      if (num === 1) return Promise.resolve()
                      return Promise.reject(new Error('选项不能重复'))
                    }
                  }]}>
                    <Input style={{ width: '320px' }} />
                  </Form.Item>
                  {index > 0 && <MinusOutlined onClick={() => remove(name)} />}
                </Space>
              })}
              <Form.Item>
                <Button type="link" icon={<PlusOutlined />} onClick={() => add({ text: '', value: '', checked: false })} block>添加选项</Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item valuePropName="checked" name="isVertical">
        <Checkbox>横向排列</Checkbox>
      </Form.Item>
    </Form>
  </>
}

export default PropComponent