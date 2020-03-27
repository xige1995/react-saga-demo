import React from 'react'
import './index.less'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { connect } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16  ,
  },
};

class Login extends React.Component{
  render(){
    const onFinish = values => {
      console.log('Success:', values);
      if('admin' === values.username && 'admin' === values.password){

      }else {
        message.error('用户名或者密码错误!')
      }
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return(
      <div className='login'>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect()(Login)