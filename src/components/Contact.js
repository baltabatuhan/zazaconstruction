import { Layout,Col,Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
    

const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',

    },
};

const Contact = () => {
    const onFinish = (values) => {
        console.log(values);
      };
    
      return (
        
        <Layout className="height-100" style={{paddingTop:"7%",paddingLeft:"35%",backgroundColor:"#ECE7B4"}}>
            <Col
                xs={2}
                sm={18}
                md={16}
                lg={8}
            >
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{labelAlign:"left"}}  >
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
         
          <Form.Item name={['user', 'introduction']} label="Message">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </Col>
        </Layout>
       
        
      );
  }

  export default Contact;