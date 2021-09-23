import { Layout, Menu } from "antd";
import logo from "./media/logo.png";
import Landing from "./media/Landing.png"

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="height-100">
      <Header className="header">
        <img src={logo} />
        <Menu theme="dark" mode="horizontal" className="header-menu">
          <Menu.Item key="1">About Us</Menu.Item>
          <Menu.Item key="2">Portfolio</Menu.Item>
          <Menu.Item key="3">Contact Us</Menu.Item>
          
        </Menu>
      </Header>
      <Content className="content" style={{ display:"flex", alignItems:"center", justifyContent:"center",backgroundImage: 'url(https://i.postimg.cc/c12GQKGG/apartments-4358755-1920.jpg,)'}}>
   
        
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Batuhan Balta</Footer>
    </Layout>
  );
}

export default App;