import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const ReactRouterGuide = () => {
  return (
    <section>
      <motion.h1
        className="title_ws"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
      >
        Hướng dẫn React Router
      </motion.h1>
      <h2>1. Cài đặt React Router</h2>
      <SyntaxHighlighter language="bash" style={darcula} wrapLines showInlineLineNumbers>
        {`npm install react-router-dom`}
      </SyntaxHighlighter>

      <h2>2. Cấu trúc cơ bản của React Router</h2>
      <h3>a. Tạo bộ định tuyến</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;`}
      </SyntaxHighlighter>

      <h3>b. Tạo liên kết giữa các trang</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Trang chủ</Link>
      <Link to="/about">Giới thiệu</Link>
    </nav>
  );
};`}
      </SyntaxHighlighter>

      <h3>c. Nhận tham số từ URL (URL Parameters)</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`import { useParams } from "react-router-dom";

const User = () => {
  let { id } = useParams();
  return <h1>Thông tin người dùng: {id}</h1>;
};`}
      </SyntaxHighlighter>

      <h3>d. Điều hướng bằng code (`useNavigate`)</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return <button onClick={goToAbout}>Đi đến Giới thiệu</button>;
};`}
      </SyntaxHighlighter>

      <h3>e. Định tuyến lồng nhau (Nested Routes)</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Bảng điều khiển</h1>
      <Outlet />
    </div>
  );
};`}
      </SyntaxHighlighter>

      <h2>3. Tổng kết</h2>
      <ul>
        <li>React Router giúp tạo SPA mà không cần tải lại trang.</li>
        <li>Dùng &lt;Routes&gt; và &lt;Route&gt; để định nghĩa các tuyến.</li>
        <li>Dùng &lt;Link&gt; và &lt;NavLink&gt; để điều hướng giữa các trang.</li>
        <li>Dùng `useParams()` để lấy tham số từ URL.</li>
        <li>Dùng `useNavigate()` để điều hướng bằng code.</li>
        <li>Có thể sử dụng nested routes để tạo định tuyến lồng nhau.</li>
      </ul>
    </section>
  );
};

export default ReactRouterGuide;
