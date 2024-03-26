import { FC, useEffect } from "react";
import usePageInfo from "../../../hooks/usePageInfo";
import { Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { resetPageInfo } from "../../../store/pageInfoReducer";

const { TextArea } = Input
const PageSetting: FC = () => {
  const pageInfo = usePageInfo()
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  useEffect(() => {
    form.setFieldsValue(pageInfo)
  }, [form, pageInfo])

  const handleChange = () => {
    dispatch(resetPageInfo(form.getFieldsValue()))
  }

  return <>
    <Form layout="vertical" initialValues={pageInfo} onValuesChange={handleChange} form={form}>
      <Form.Item label="页面标题" name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="页面描述" name="description">
        <TextArea />
      </Form.Item>
      <Form.Item label="页面样式" name="cssCode">
        <TextArea />
      </Form.Item>
      <Form.Item label="脚本" name="jsCode">
        <TextArea />
      </Form.Item>
    </Form>
  </>
}
export default PageSetting