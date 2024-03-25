import { FC, useEffect } from "react";
import { OptionsType, RadioProps } from "./type";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const PropComponent: FC<RadioProps> = (props: RadioProps) => {
  const { title, isVertical, value, options = [], onChange, disabled } = props
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({ title, isVertical, value, options })
  })

  const handleChange = () => {
    console.log('form', form.getFieldsValue());
    
    if (onChange == null) return
    const newOptions = form.getFieldsValue()
    const { options } = newOptions
    if (options) {
      newOptions.options = options.filter((item: OptionsType) => !(item.text == null))
    }
    options.forEach((item: OptionsType) => {
      if (item.value) return
      // 生成随机value
      item.value = Math.random().toString(36).slice(-8)
    })
    onChange(newOptions)
  }

  return <Form layout="vertical" initialValues={{ title, isVertical, value }} onValuesChange={handleChange} disabled={disabled} form={form}>
    <Form.Item label={title} name="title" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item label='选项'>
      <Form.List name="options">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name }, index) => {
              return <Space key={key} align="baseline">
                <Form.Item name={[name, 'text']} rules={[{ required: true }, {
                  validator: (_, value) => {
                    const { options = [] } = form.getFieldsValue()
                    let num = 0
                    options.forEach((item: OptionsType) => {
                      if (item.text === value) {
                        num++
                      }
                    })
                    if (num === 1) return Promise.resolve()
                    return Promise.reject(new Error('选项不能重复'))
                  }
                }]}>
                  <Input style={{ width: '300px' }} />
                </Form.Item>
                {index > 1 && <MinusOutlined onClick={() => remove(name)} />}
              </Space>
            })}
            <Form.Item>
              <Button type="link" icon={<PlusOutlined />} onClick={() => add({ text: '', value: '' })} block>添加选项</Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>
    <Form.Item label='默认选中' name="value">
      <Select options={options.map((item) => ({ value: item.value, text: item.text }))}>
      </Select>
    </Form.Item>
    <Form.Item valuePropName="checked" name="isVertical">
      <Checkbox>横向排列</Checkbox>
    </Form.Item>
  </Form >
};

export default PropComponent