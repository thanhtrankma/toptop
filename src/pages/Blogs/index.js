import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Blog1 from '~/components/blogs/blog1.js';
import Blog2 from '~/components/blogs/blog2.js';
import Blog3 from '~/components/blogs/blog3.js';
import Blog4 from '~/components/blogs/blog4.js';
import Blog5 from '~/components/blogs/blog5.js';
import Blog6 from '~/components/blogs/blog6.js';
import Blog7 from '~/components/blogs/blog7.js';
import Blog8 from '~/components/blogs/blog8.js';
import Blog9 from '~/components/blogs/blog9.js';

const BlogPost = () => {
  const [activePlug, setActivePlug] = useState(null);

  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const plug = searchParams.get('plug');
    setActivePlug(plug);
    scroolToTop();
  }, [location.search]);

  const navigate = useNavigate(); // Dùng để thay đổi URL

  const changeSearchParams = (plug) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('plug', plug);
    navigate({
      pathname: location.pathname, // Giữ nguyên path hiện tại
      search: searchParams.toString(), // Cập nhật search string
    });
  };

  const handleClickedBlog = (plug) => {
    changeSearchParams(plug);
  };

  const checkBlog = (plug) => {
    switch (activePlug) {
      case 'jsx':
        return <Blog1 />;
      case 'functional-components-and-class-components':
        return <Blog2 />;
      case 'state-and-props':
        return <Blog3 />;
      case 'hooks':
        return <Blog4 />;
      case 'routing':
        return <Blog5 />;
      case 'lifecycle-methods':
        return <Blog6 />;
      case 'es6':
        return <Blog7 />;
      case 'async-await':
        return <Blog8 />;
      case 'closure-and-scope':
        return <Blog9 />;
      default:
        return <Blog1 />;
    }
  };
  const scroolToTop = () => {
    window.scrollTo(0, 0);
  };
  const blogs = [
    {
      id: 1,
      title: 'Hiểu cách JSX hoạt động và cách nó được biên dịch thành JavaScript',
      description:
        'JSX (JavaScript XML) là một cú pháp mở rộng trong React cho phép bạn viết các phần tử UI tương tự như HTML trong JavaScript. Tuy nhiên, trình duyệt không hiểu trực tiếp JSX, vì vậy trước khi mã được thực thi, JSX sẽ được biên dịch thành JavaScript thuần thông qua công cụ như Babel.',
      date: '2025-02-01',
      plug: 'jsx',
    },
    {
      id: 2,
      title: 'Biết cách tạo và sử dụng functional components và class components.',
      description:
        'Trong React, có hai loại component chính: Functional Components và Class Components. Mỗi loại có cách sử dụng và tính năng riêng, nhưng mục đích chung của chúng là tạo ra các phần tử giao diện người dùng (UI) và xử lý logic trong ứng dụng.',
      date: '2025-01-15',
      plug: 'functional-components-and-class-components',
    },
    {
      id: 3,
      title: 'Hiểu rõ cách quản lý state và props, cách truyền dữ liệu giữa các components.',
      description:
        'Trong React, state dùng để quản lý dữ liệu thay đổi trong component, còn props giúp truyền dữ liệu từ component cha xuống con. Khi cần truyền dữ liệu ngược lại, component con có thể sử dụng callback functions để gửi dữ liệu lên component cha. Quá trình lifting state up giúp đưa state lên component cha để chia sẻ dữ liệu giữa các component không trực tiếp liên kết với nhau.',
      date: '2024-12-30',
      plug: 'state-and-props',
    },
    {
      id: 4,
      title: 'Nắm vững các hooks như useState, useEffect, useContext, useReducer, v.v.',
      description:
        'Các React hooks như useState, useEffect, useContext, và useReducer giúp quản lý state, xử lý side effects, và chia sẻ dữ liệu giữa các component. useState quản lý state trong functional component, useEffect xử lý các side effects như gọi API, useContext giúp truyền dữ liệu giữa các component mà không cần props, và useReducer dùng để quản lý state phức tạp hơn. Những hooks này giúp code gọn gàng và dễ duy trì hơn so với class components.',
      date: '2024-12-30',
      plug: 'hooks',
    },
    {
      id: 5,
      title: 'Hướng dẫn React Router',
      description:
        'Trong ứng dụng React, định tuyến (routing) giúp điều hướng giữa các trang hoặc thành phần khác nhau mà không cần tải lại trang. Để làm điều này, React thường sử dụng thư viện React Router.',
      date: '2024-12-30',
      plug: 'routing',
    },
    {
      id: 6,
      title: 'Lifecycle Methods trong React',
      description:
        'Trong React class components, Lifecycle Methods là các phương thức đặc biệt được gọi tại các giai đoạn khác nhau trong vòng đời của một component. Dưới đây là ba phương thức quan trọng:',
      date: '2024-12-30',
      plug: 'lifecycle-methods',
    },
    {
      id: 7,
      title:
        'Nắm vững các tính năng mới của ES6+ như arrow functions, destructuring, template literals, spread/rest operators, v.v.',
      description: 'Dưới đây là các tính năng quan trọng của ES6+ mà bạn cần nắm vững khi làm việc với React:',
      date: '2024-12-30',
      plug: 'es6',
    },
    {
      id: 8,
      title: 'Hiểu cách làm việc với Promises, async/await.',
      description:
        'Promises giúp xử lý các tác vụ bất đồng bộ, tránh callback hell. Async/Await giúp viết mã bất đồng bộ dễ đọc hơn.',
      date: '2024-12-30',
      plug: 'async-await',
    },
    {
      id: 9,
      title: 'Closures, Scope, và Hoisting: Hiểu rõ các khái niệm này để tránh các lỗi phổ biến.',
      description: 'Scope xác định nơi có thể truy cập một biến trong mã.',
      date: '2024-12-30',
      plug: 'closure-and-scope',
    },
  ];

  return (
    <div className="Blogs_Page">
      <div className="blogs_2s">
        {activePlug ? (
          checkBlog()
        ) : (
          <ul style={{ alignItems: 'center' }}>
            {blogs.map((blog, index) => (
              <li key={index} style={{ marginBottom: '20px' }} onClick={() => handleClickedBlog(blog.plug)}>
                <motion.div
                  className="blogCard"
                  initial={{
                    boxShadow: '0 4px 8px #f39d4d',
                  }}
                  whileHover={{ scale: 1.01, boxShadow: '0 8px 10px #f39d4d' }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="blog_title">{blog.title} </h4>
                  <p className="blog_descr">{blog.description}</p>
                  <div className="blog_date">
                    <strong style={{ paddingRight: '10px' }}>Ngày đăng: </strong>{' '}
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
