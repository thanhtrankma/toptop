import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

function Blog1() {
  return (
    <div>
      <motion.h1
        className="title_ws"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
      >
        Hiểu cách <span>JSX</span> hoạt động và cách nó được biên dịch thành <span>JavaScript</span>
      </motion.h1>

      <section>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 1.2 }}
        >
          JSX (JavaScript XML) là một cú pháp mở rộng của JavaScript, thường được sử dụng trong React để mô tả giao diện
          người dùng (UI) một cách dễ dàng và trực quan hơn. Dưới đây là cách JSX hoạt động và cách nó được biên dịch
          thành JavaScript:
        </motion.p>

        <h2>1. JSX là gì?</h2>
        <p>
          JSX cho phép bạn viết mã HTML-like trong JavaScript. Nó không phải là HTML thuần túy mà là một cách viết cú
          pháp mở rộng giúp bạn mô tả cấu trúc UI một cách rõ ràng hơn.
        </p>

        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          wrapLines
          showInlineLineNumbers
        >{`const element = <h1>Hello, world!</h1>;`}</SyntaxHighlighter>

        <h2>2. Cách JSX hoạt động</h2>
        <p>
          - JSX không phải là mã JavaScript hợp lệ trực tiếp. Nó cần được <strong>biên dịch</strong> thành JavaScript
          trước khi chạy trong trình duyệt.
          <br />- Công cụ biên dịch phổ biến nhất là <strong>Babel</strong>, một trình biên dịch JavaScript.
        </p>

        <h2>3. JSX được biên dịch thành JavaScript như thế nào?</h2>
        <p>
          Khi bạn viết JSX, nó sẽ được biên dịch thành các lệnh gọi hàm{' '}
          <SyntaxHighlighter language="javascript" style={darcula}>
            React.createElement()
          </SyntaxHighlighter>
          . Hàm này tạo ra các đối tượng (objects) mô tả các phần tử UI (còn gọi là React elements).
        </p>
        <h3>Ví dụ:</h3>

        <SyntaxHighlighter
          language="javascript"
          style={darcula}
          wrapLines
          showInlineLineNumbers
        >{`const element = <h1 className="greeting">Hello, world!</h1>;`}</SyntaxHighlighter>

        <p>Sau khi biên dịch, đoạn mã trên sẽ trở thành:</p>

        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const element = React.createElement('h1', // Loại phần tử (tag name)
  { className: 'greeting' }, // Props (thuộc tính)
  'Hello, world!' // Nội dung (children)
  );`}
        </SyntaxHighlighter>

        <p>
          Kết quả của{' '}
          <SyntaxHighlighter language="javascript" style={darcula}>
            React.createElement()
          </SyntaxHighlighter>{' '}
          là một đối tượng JavaScript mô tả phần tử:
        </p>

        <SyntaxHighlighter language="javascript" style={darcula}>
          {`{
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  }`}
        </SyntaxHighlighter>

        <h2>4. Tại sao sử dụng JSX?</h2>
        <p>
          - <strong>Dễ đọc và dễ viết</strong>: JSX giống HTML, giúp bạn dễ dàng hình dung cấu trúc UI.
          <br />- <strong>Tích hợp JavaScript</strong>: Bạn có thể nhúng các biểu thức JavaScript trong JSX bằng cách sử
          dụng{' '}
          <SyntaxHighlighter language="javascript" style={darcula}>
            {'{ }'}
          </SyntaxHighlighter>
          .
          <br />- <strong>Tối ưu hóa</strong>: React sử dụng các đối tượng được tạo ra từ JSX để tối ưu hóa việc cập
          nhật và hiển thị UI.
        </p>

        <h2>5. Ví dụ phức tạp hơn</h2>
        <h3>JSX:</h3>

        <SyntaxHighlighter language="javascript" style={darcula}>
          {`const user = {
    name: 'John',
    age: 30
  };
  
  const element = (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>You are {user.age} years old.</p>
    </div>
  );`}
        </SyntaxHighlighter>

        <h3>Sau khi biên dịch:</h3>

        <SyntaxHighlighter language="javascript" style={darcula}>
          {`const user = {
    name: 'John',
    age: 30
  };
  
  const element = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, ', user.name, '!'),
    React.createElement('p', null, 'You are ', user.age, ' years old.')
  );`}
        </SyntaxHighlighter>

        <h2>6. Lưu ý khi sử dụng JSX</h2>
        <p>
          - <strong>Class vs className</strong>: Trong JSX, bạn sử dụng <code>className</code> thay vì{' '}
          <code>class</code> (vì <code>class</code> là từ khóa trong JavaScript).
          <br />- <strong>Inline styles</strong>: Bạn phải truyền một đối tượng JavaScript cho thuộc tính{' '}
          <SyntaxHighlighter language="javascript" style={darcula}>
            style
          </SyntaxHighlighter>
          .
          <SyntaxHighlighter language="javascript" style={darcula}>
            {`const style = { color: 'red', fontSize: '20px' };
  <p style={style}>Hello</p>`}
          </SyntaxHighlighter>
          - <strong>Mọi thứ trong JSX đều là biểu thức</strong>: Bạn có thể sử dụng{' '}
          <SyntaxHighlighter language="javascript" style={darcula}>
            {'{ }'}
          </SyntaxHighlighter>{' '}
          để nhúng biểu thức JavaScript.
        </p>

        <h2>7. Công cụ biên dịch JSX</h2>
        <p>
          - <strong>Babel</strong>: Công cụ phổ biến nhất để biên dịch JSX thành JavaScript.
          <br />- <strong>Webpack, Vite, hoặc các bundler khác</strong>: Thường được sử dụng kết hợp với Babel để xử lý
          JSX trong các dự án React.
        </p>

        <h2>Tóm lại</h2>
        <p>
          JSX là một cú pháp mạnh mẽ giúp bạn viết UI một cách dễ dàng hơn trong React. Nó được biên dịch thành các lệnh
          gọi <code>React.createElement()</code>, tạo ra các đối tượng mô tả cấu trúc UI. Nhờ JSX, bạn có thể kết hợp
          sức mạnh của JavaScript với cú pháp quen thuộc như HTML. 🚀
        </p>
      </section>
    </div>
  );
}

export default Blog1;
