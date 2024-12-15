import logo from './logo.svg';
import './App.css';

import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>ชื่อเว็บไซต์ของคุณ</title>
        <meta name="description" content="คำอธิบายเว็บไซต์" />
        <meta name="keywords" content="คำสำคัญ, SEO, React" />
      </Helmet>
      <h1>ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
    </div>
  );
}


export default App;
