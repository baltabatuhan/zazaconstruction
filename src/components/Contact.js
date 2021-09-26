import { Layout,Col,Form, Input, Button,Card } from 'antd';
import 'antd/dist/antd.css'
import FontAwesome from 'react-fontawesome'


const {Content} = Layout;

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
        
        <Layout className="height-100" style={{backgroundColor:"#ECE7B4",flexDirection:"row"}}>
          <Content className="contact-image" style={{ backgroundImage: 'url(https://i.ibb.co/XFDcYnL/pawel-czerwinski-0x-CCPIbl3-M-unsplash.jpg,)',paddingTop:"5%",paddingLeft:"6%",justifyContent:"flex-start"}}>
         
            <Col
              span={8}
            >
          
     
            
          
          
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{paddingTop:"3%"}}  >
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
        <Col span={8}>
          <div className="contact-information" style={{paddingLeft:"55%"}}>
          <i class="fas fa-phone"></i>
          <h2>Phone Number:</h2>
          <p>+1 (213) 292 27 07</p>
          <h2>E-mail:</h2>
          <p>zbatuhanbalta@gmail.com</p>
          <h2>Address:</h2>
          <p>zbatuhanbalta@gmail.com</p>
         </div>
        </Col>
        </Content>
        </Layout>
       
        
      );
  }

  export default Contact;