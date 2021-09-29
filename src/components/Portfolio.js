import { Layout } from "antd";
import  { useState } from 'react';
import { Image } from 'antd';




const {Content} = Layout;

function Portfolio() {
   const [visible, setVisible] = useState(false);
    return (
      <Layout className="height-100" >
      
      
      
      <Content className="content" style={{ backgroundImage: 'url(https://i.postimg.cc/8Pyk06yX/pexels-sebastian-s-rensen-731082.jpg,)'}}>
      <div className="portfolio-images">
      <Image
        preview={{ visible: false }}
        width={300}
        src="https://lh3.googleusercontent.com/pw/AM-JKLUKJQQt8jlchYXCMxHvLc-DdBtB5he63n_AEyDhcTidyAL5efBW6wAn_Zw4H2RMhPZITbDY21L9riyD0aw82wX75IRc6jJv79Nx7VtJxGH55z_heBrTcgXf22gOwmw9HW-BO7iw8yaXdnNoY36oggM=w1176-h912-no?authuser=0"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLUKJQQt8jlchYXCMxHvLc-DdBtB5he63n_AEyDhcTidyAL5efBW6wAn_Zw4H2RMhPZITbDY21L9riyD0aw82wX75IRc6jJv79Nx7VtJxGH55z_heBrTcgXf22gOwmw9HW-BO7iw8yaXdnNoY36oggM=w1176-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLUvDaFkHSQcP8tJM_fZ_FFhTqMkXuyVpz__QPRqCB9p9EADauFHBDnBcH7PgSokE089jYWft2lpg8aqoWknY7aDNHTwJh9vHmuom9JRfvn11MFSAFFnDxMEP5EREShckwK0azL-SVTYW6YfLCiDNjI=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLUH39Jpsfsd1CyK6Erq0JWqD38MSCORgnsPUkOSVDzUFinW52vXu8K0Oaecg2Kml49c4K5YsrPeZQUHR9gxD_kxcZ2YLqbGvDzma8GvJAhVWTc04UV1i6BTiE213D9MX34A4KSUbKFPaddLnqc3Hh4=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLXeGqXd2PQkk1OrSHipnG0rMmgKJIX4ObHX2Kf5fNihiuzJCyGoMo7ergVo7aFpLlE2aJ3bram9Lg8lq5_f882NoCgBipGu_2ew-RkV0jYT3w_J54ZCmkaaJnaQXY0RNmN_YV3wr7YLod2JW3RzBwc=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLVbCaYBI0HyS53Hp2uZRdGfS22Lz1LvrGojh-0IuDGaJewZMzNWXXOCbjD-VLYIYqN-TpPpW4m4YhqVb7jJGYyINz9M2FLjyPkiTaJYRQmrXGnuFhsb-0AICujdKpRGImW1llW3UuwpKoyb4NmINec=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLWvuEwCjnDLDbZUAvmlk0lfxM2o5G1JWMvkPaCHvv6BX-Qi4OlYM_IggVU0wvXkiWsFlHEh4E4IcM_KPvvOUAfP8BUhhfl1cOhneVOnk8jNZ3_0JndoxMT6C_CHzBkz-LabNTXSB_1PQzkrj8_w8pw=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLWEvl4h0tXGwkTa4a8UbZS8An3M0RCLSq28fWuoOPlxMiqzZHkMOxjeruHrKwS-O0F7zk8Aju0-z1m0VBy2H33nJlt_JzHE0WWIdEaVN9L5FLb6WBOwkdiT4HNiRfjgtbQHqUcZL57yi8YdTCUX93A=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLXbUEGd4a9S1CzVaxTsxcPChisOjw4jGmuh5FZMWSOAIja6ljdTlXTySOVIYRoTVXsYV9-xjEORsQ8cVQjss1A25M9Jb-3CqtTPOaHxK07M48W_wselHIDEbLXFdfQnBuVHNnYIA2V4kAnqxjjNW4A=w1216-h912-no?authuser=0" />
          <Image src="https://lh3.googleusercontent.com/pw/AM-JKLXG5JithzIURViL0mLcDwnuEB5DixDXua7Hbf6F46P48VXN3Mr_75v_7Gstyaq4Xi4bn5VNi8r1mjOcWapguUdiUAXg1dZTD2Cp0jpvR80EBo72TwisdQ4ZHEN_tWteHnbCZhOfimL_3Sga4S1ihCk=w1216-h912-no?authuser=0" />
        </Image.PreviewGroup>
      </div>
    </div>


        
        
      </Content>
      
 
        
      </Layout>
    );
  }
  
  export default Portfolio;