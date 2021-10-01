import React, { useState } from 'react'
import { Layout,Col,Form, Input, Button } from 'antd';
import emailjs from 'emailjs-com'
import 'antd/dist/antd.css'
import {
  PhoneOutlined,
  MailOutlined,
  CompassOutlined
} from '@ant-design/icons';



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
      const [name, setName] = useState('');
      const [email, setEmail] = useState(''); 
      const [message, setMessage] = useState('');
      const [emailSent, setEmailSent] = useState(false);

      const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_hvqdmkr';
            const templateId = 'template_1kqjets';
            const userId = 'user_fqndswXgIr9w1DLZhYIXT';
           
            // const serviceId = `${process.env.SERVICE_ID}`;
            // const templateId = `${process.env.TEMPLATE_ID}`;
            // console.log(serviceId)
            // const userId = `${process.env.USER_ID}`;
            
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } 
        
        
        else {
            alert('Please fill in all fields.');
        }
       
    }
    if(emailSent===true){
      alert("Thank you for your message, we will be in touch in no time!")
    }
    

   
    
      return (
            
          
        
        <Layout className="height-100" style={{backgroundColor:"#ECE7B4",flexDirection:"row"}}>
          <Content className="contact-image" style={{ backgroundImage: 'url(https://i.ibb.co/XFDcYnL/pawel-czerwinski-0x-CCPIbl3-M-unsplash.jpg,)',paddingTop:"5%",paddingLeft:"6%",justifyContent:"flex-start"}}>
         
            <Col
              span={8}
            >
          
     
            
          
          
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{paddingTop:"3%"}}  >
          
          <Form.Item
            name={[ 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
            value={name} onChange={e => setName(e.target.value)}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={[ 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
            value={email} onChange={e => setEmail(e.target.value)}
          >
            <Input />
          </Form.Item>
         
          <Form.Item name={[ 'introduction']} label="Message" value={message} onChange={e => setMessage(e.target.value)}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" onClick={submit}>
              Submit
            </Button>
            
          </Form.Item>
        </Form>
        
        </Col>
        <Col span={8}>
          <div className="contact-information" style={{paddingLeft:"55%"}}>
         
          <h2>{<PhoneOutlined />} Phone Number:</h2>
          <p>+1 (213) 292 27 07</p>
          <h2>{<MailOutlined />} E-mail:</h2>
          <p>zbatuhanbalta@gmail.com</p>
          <h2>{<CompassOutlined />} Address:</h2>
          <p>4338 Berryman Ave APT 6, Los Angeles, CA 90066</p>
         </div>
        </Col>
        </Content>
        </Layout>
       
        
      );
  }

  export default Contact;