import { Layout } from "antd";

const { Content} = Layout;

function Home() {
    return (
      <Layout className="height-100" >
      
        <Content className="content" style={{ backgroundImage: 'url(https://i.postimg.cc/8Pyk06yX/pexels-sebastian-s-rensen-731082.jpg,)'}}>
          <h1>The new way to design your home.</h1>
          
          
        </Content>
        
      </Layout>
    );
  }
  
  export default Home;