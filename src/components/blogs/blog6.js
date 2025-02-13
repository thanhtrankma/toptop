import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LifecycleMethodsGuide = () => {
  return (
    <section>
      <h1>Lifecycle Methods trong Class Components</h1>

      <h2>
        1. <code>componentDidMount()</code>
      </h2>
      <p>
        Được gọi <strong>ngay sau khi component được render lần đầu tiên</strong> vào DOM.
      </p>
      <p>
        Dùng để <strong>fetch dữ liệu từ API, thiết lập subscription, hoặc cập nhật trạng thái ban đầu</strong>.
      </p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`class Example extends React.Component {
  componentDidMount() {
    console.log("Component đã mount!");
  }

  render() {
    return <h1>Xin chào!</h1>;
  }
}`}
      </SyntaxHighlighter>

      <h2>
        2. <code>componentDidUpdate(prevProps, prevState)</code>
      </h2>
      <p>
        Được gọi <strong>mỗi khi component được cập nhật</strong> (tức là state hoặc props thay đổi).
      </p>
      <p>
        Dùng để <strong>xử lý các tác vụ khi dữ liệu thay đổi</strong>, chẳng hạn gọi API khi một prop mới đến.
      </p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`class Example extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      console.log("Props đã thay đổi!");
    }
  }

  render() {
    return <h1>Dữ liệu: {this.props.data}</h1>;
  }
}`}
      </SyntaxHighlighter>

      <h2>
        3. <code>componentWillUnmount()</code>
      </h2>
      <p>
        Được gọi <strong>trước khi component bị gỡ bỏ khỏi DOM</strong>.
      </p>
      <p>
        Dùng để <strong>hủy bỏ subscription, dọn dẹp sự kiện, hoặc giải phóng tài nguyên</strong>.
      </p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`class Example extends React.Component {
  componentWillUnmount() {
    console.log("Component sẽ bị unmount!");
  }

  render() {
    return <h1>Tôi sẽ biến mất sớm thôi!</h1>;
  }
}`}
      </SyntaxHighlighter>

      <h2>🚀 Tóm tắt</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Lifecycle Method</th>
            <th>Khi nào chạy?</th>
            <th>Công dụng chính</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>componentDidMount</code>
            </td>
            <td>Sau lần render đầu tiên</td>
            <td>Fetch API, thiết lập subscription</td>
          </tr>
          <tr>
            <td>
              <code>componentDidUpdate</code>
            </td>
            <td>Sau mỗi lần cập nhật state/props</td>
            <td>Cập nhật dữ liệu, gọi API khi props thay đổi</td>
          </tr>
          <tr>
            <td>
              <code>componentWillUnmount</code>
            </td>
            <td>Trước khi component bị xóa khỏi DOM</td>
            <td>Dọn dẹp tài nguyên, hủy bỏ event listeners</td>
          </tr>
        </tbody>
      </table>

      <p>
        Bạn có thể sử dụng những phương thức này để kiểm soát vòng đời component một cách hiệu quả. Nếu bạn dùng{' '}
        <strong>functional components</strong>, hãy thay thế bằng <code>useEffect</code> nhé! 🚀
      </p>
    </section>
  );
};

export default LifecycleMethodsGuide;
