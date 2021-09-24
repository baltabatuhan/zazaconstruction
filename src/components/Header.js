import logo from "../media/logo.png";
import {Menu,Layout} from "antd";
import { Link} from "react-router-dom";


const {Header:AntHeader}= Layout;

function Header() {
    return (
        <Layout>
        <AntHeader className="header" style={{backgroundColor:"#444941"}}>
        <Link to="/">
        <img src={logo} alt="Zaza Logo" />
      </Link>
        <Menu theme="dark" mode="horizontal" className="header-menu" style={{backgroundColor:"#444941"}}>
          <Menu.Item key="1"><Link to="/about">About Us</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/portfolio">Portfolio</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/contact">Contact Us</Link></Menu.Item>
          
        </Menu>
        </AntHeader>
        </Layout>
    );
  }
  
  export default Header;