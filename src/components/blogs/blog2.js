import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

function ReactComponentsGuide() {
  return (
    <div>
      <motion.h1
        className="title_ws"
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
      >
        Hướng dẫn tạo và sử dụng <span>Functional Components</span> và <spann>Class Components</spann> trong React
      </motion.h1>

      <section>
        <h2>1. Functional Components</h2>
        <p>
          Functional Components là các component được định nghĩa dưới dạng hàm JavaScript. Chúng thường đơn giản hơn và
          được khuyến khích sử dụng trong các phiên bản React mới (từ React 16.8 trở đi) với sự hỗ trợ của{' '}
          <strong>Hooks</strong>.
        </p>

        <h3>Cách tạo Functional Component</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React from 'react';

function MyFunctionalComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

export default MyFunctionalComponent;
          `}
          </SyntaxHighlighter>
        </pre>

        <h3>Sử dụng Functional Component</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React from 'react';
import MyFunctionalComponent from './MyFunctionalComponent';

function App() {
  return (
    <div>
      <MyFunctionalComponent name="John" />
    </div>
  );
}

export default App;
          `}
          </SyntaxHighlighter>
        </pre>

        <h3>Sử dụng Hooks trong Functional Component</h3>
        <p>Với React Hooks, bạn có thể sử dụng state và các tính năng khác của React trong functional components.</p>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
          `}
          </SyntaxHighlighter>
        </pre>
      </section>

      <section>
        <h2>2. Class Components</h2>
        <p>
          Class Components là các component được định nghĩa dưới dạng lớp ES6. Chúng có thể quản lý state và sử dụng các
          lifecycle methods.
        </p>

        <h3>Cách tạo Class Component</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!'
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This is a class component.</p>
      </div>
    );
  }
}

export default MyClassComponent;
          `}
          </SyntaxHighlighter>
        </pre>

        <h3>Sử dụng Class Component</h3>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React from 'react';
import MyClassComponent from './MyClassComponent';

function App() {
  return (
    <div>
      <MyClassComponent />
    </div>
  );
}

export default App;
          `}
          </SyntaxHighlighter>
        </pre>

        <h3>Quản lý State và Lifecycle Methods trong Class Component</h3>
        <p>
          Class Components có thể quản lý state và sử dụng các lifecycle methods như <code>componentDidMount</code>,{' '}
          <code>componentDidUpdate</code>, và <code>componentWillUnmount</code>.
        </p>
        <pre>
          <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
            {`
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;
          `}
          </SyntaxHighlighter>
        </pre>
      </section>

      <section>
        <h2>So sánh Functional Components và Class Components</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Feature</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Functional Components</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Class Components</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Định nghĩa</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Hàm JavaScript</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lớp ES6</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>State</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Sử dụng <code>useState</code> Hook
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Sử dụng <code>this.state</code>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Lifecycle Methods</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                Sử dụng <code>useEffect</code> Hook
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Có sẵn các lifecycle methods</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Performance</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nhẹ hơn, tối ưu hơn</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Nặng hơn một chút</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Khuyến nghị</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Được khuyến khích sử dụng từ React 16.8</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Có thể sử dụng nhưng ít phổ biến hơn</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Kết luận</h2>
        <ul>
          <li>
            <strong>Functional Components</strong> là cách hiện đại và được khuyến khích sử dụng trong React, đặc biệt
            khi bạn sử dụng Hooks để quản lý state và lifecycle.
          </li>
          <li>
            <strong>Class Components</strong> vẫn có thể sử dụng, đặc biệt trong các dự án cũ hoặc khi bạn cần sử dụng
            các lifecycle methods phức tạp.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ReactComponentsGuide;
