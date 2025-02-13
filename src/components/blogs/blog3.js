import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

function ReactStateAndPropsGuide() {
  return (
    <div>
      <motion.h1
        className="title_ws"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
      >
        Hướng dẫn quản lý <span>State</span> và <span>Props</span> trong React
      </motion.h1>

      <section>
        <h2>1. State và Props là gì?</h2>
        <h3>State</h3>
        <p>
          <strong>State</strong> là dữ liệu nội bộ của một component, có thể thay đổi trong quá trình thực thi. State
          thường được sử dụng để lưu trữ dữ liệu động, ví dụ: giá trị của input, trạng thái của một nút bấm, dữ liệu từ
          API, v.v.
        </p>
        <h3>Props</h3>
        <p>
          <strong>Props</strong> (viết tắt của "properties") là dữ liệu được truyền từ component cha sang component con.
          Props là <strong>read-only</strong>, nghĩa là component con không thể thay đổi giá trị của props.
        </p>
      </section>

      <section>
        <h2>2. Quản lý State</h2>
        <h3>Trong Functional Components (sử dụng Hooks)</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
          `}
          </SyntaxHighlighter>
        </pre>

        <h3>Trong Class Components</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
          `}
          </SyntaxHighlighter>
        </pre>
      </section>

      <section>
        <h2>3. Truyền Props giữa các Components</h2>
        <h3>Truyền Props từ Component Cha xuống Component Con</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
          `}
          </SyntaxHighlighter>
        </pre>

        <h3>Nhận Props trong Class Components</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
          `}
          </SyntaxHighlighter>
        </pre>
      </section>

      <section>
        <h2>4. Truyền dữ liệu từ Component Con lên Component Cha</h2>
        <p>
          Để truyền dữ liệu từ component con lên component cha, chúng ta sử dụng <strong>callback functions</strong>.
          Component cha sẽ truyền một hàm xuống component con thông qua props, và component con sẽ gọi hàm đó khi cần.
        </p>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { useState } from 'react';

function Button(props) {
  return (
    <button onClick={props.onClick}>
      Click me
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
          `}
          </SyntaxHighlighter>
        </pre>
      </section>

      <section>
        <h2>5. Quản lý State phức tạp với nhiều Components</h2>
        <p>
          Khi ứng dụng phát triển, bạn có thể cần quản lý state ở một nơi tập trung (ví dụ: component cha) và truyền
          state xuống các component con thông qua props.
        </p>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { useState } from 'react';

function Display(props) {
  return <p>Current value: {props.value}</p>;
}

function Controls(props) {
  return (
    <div>
      <button onClick={props.onIncrement}>Increment</button>
      <button onClick={props.onDecrement}>Decrement</button>
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <Display value={value} />
      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

export default App;
          `}
          </SyntaxHighlighter>
        </pre>
      </section>

      <section>
        <h2>6. So sánh State và Props</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Đặc điểm</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>State</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Props</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Định nghĩa</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dữ liệu nội bộ của component</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Dữ liệu được truyền từ component cha</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Khả năng thay đổi</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Có thể thay đổi bằng <code>setState</code> hoặc <code>useState</code>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Không thể thay đổi (read-only)</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Sử dụng</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lưu trữ dữ liệu động</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Truyền dữ liệu hoặc hàm callback</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>7. Kết luận</h2>
        <ul>
          <li>
            <strong>State</strong> dùng để quản lý dữ liệu nội bộ của component.
          </li>
          <li>
            <strong>Props</strong> dùng để truyền dữ liệu từ component cha xuống component con.
          </li>
          <li>
            Để truyền dữ liệu từ component con lên component cha, sử dụng <strong>callback functions</strong>.
          </li>
          <li>
            Khi ứng dụng phức tạp, hãy quản lý state ở component cha và truyền xuống các component con thông qua props.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ReactStateAndPropsGuide;
