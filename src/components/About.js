import { Layout } from "antd";

const {Content} = Layout;

function About() {
    return (
      <Layout className="height-100" >
      
      
      
      <Content className="content" style={{ backgroundImage: 'url(https://i.postimg.cc/8Pyk06yX/pexels-sebastian-s-rensen-731082.jpg,)'}}>
        <div className="about-us">
       <h2>About Us</h2>
       <div className="about-text">
       <p>Operating across Los Angeles and Dallas we undertake all aspects of construction projects, from house refurbishments to interior designing. We have over 20 years of experience in the construction industry serving predominantly the residential market. 

It’s our mission to offer complete client satisfaction, delivering all projects within budget, time scale, and to the highest of standards. We have a team of highly skilled professionals, ready to help our clients to the best of their ability.

Here at Zaza Construction, each contract is managed with high standards through to completion.</p>
        </div>
        </div>
      </Content>
      
 
        
      </Layout>
    );
  }
  
  export default About;