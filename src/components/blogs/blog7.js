import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ES6Features = () => {
  return (
    <section>
      <h1>Các Tính Năng Quan Trọng của ES6+</h1>

      <h2>1. Arrow Functions 🚀</h2>
      <p>
        Giúp viết hàm ngắn gọn hơn và tự động bind <code>this</code>.
      </p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const sayHello = (name) => console.log(\`Xin chào, \${name}!\`);
sayHello("Alice"); // Output: Xin chào, Alice!`}
      </SyntaxHighlighter>

      <h2>2. Destructuring 🎯</h2>
      <p>Trích xuất giá trị từ objects và arrays một cách dễ dàng.</p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const person = { name: "Bob", age: 25 };
const { name, age } = person;
console.log(name, age); // Output: Bob 25`}
      </SyntaxHighlighter>

      <h2>3. Template Literals 📝</h2>
      <p>Cho phép chèn biến vào chuỗi một cách dễ dàng.</p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const username = "Charlie";
console.log(\`Xin chào, \${username}!\`); // Output: Xin chào, Charlie!`}
      </SyntaxHighlighter>

      <h2>4. Spread & Rest Operators 🌟</h2>
      <h3>Spread (`...`)</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]`}
      </SyntaxHighlighter>

      <h3>Rest (`...`)</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10`}
      </SyntaxHighlighter>

      <h2>5. Default Parameters 🎯</h2>
      <p>Giúp định nghĩa giá trị mặc định cho tham số.</p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const greet = (name = "Guest") => console.log(\`Hello, \${name}!\`);
greet(); // Output: Hello, Guest!`}
      </SyntaxHighlighter>

      <h2>6. Promises & Async/Await ⏳</h2>
      <h3>Promises</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const fetchData = () => {
  return new Promise((resolve) => setTimeout(() => resolve("Dữ liệu"), 1000));
};

fetchData().then((data) => console.log(data)); // Output: Dữ liệu (sau 1s)`}
      </SyntaxHighlighter>

      <h3>Async/Await</h3>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const getData = async () => {
  const data = await fetchData();
  console.log(data);
};

getData(); // Output: Dữ liệu (sau 1s)`}
      </SyntaxHighlighter>

      <h2>📌 Tóm tắt nhanh</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Tính năng</th>
            <th>Công dụng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>Arrow Functions</code>
            </td>
            <td>
              Viết hàm gọn hơn, tự động bind <code>this</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>Destructuring</code>
            </td>
            <td>Trích xuất giá trị từ object/array dễ dàng</td>
          </tr>
          <tr>
            <td>
              <code>Template Literals</code>
            </td>
            <td>Chèn biến vào chuỗi dễ đọc hơn</td>
          </tr>
          <tr>
            <td>
              <code>Spread Operator (`...`)</code>
            </td>
            <td>Sao chép & gộp mảng, object</td>
          </tr>
          <tr>
            <td>
              <code>Rest Operator (`...`)</code>
            </td>
            <td>Gom nhiều tham số vào mảng</td>
          </tr>
          <tr>
            <td>
              <code>Default Parameters</code>
            </td>
            <td>Định nghĩa giá trị mặc định cho tham số</td>
          </tr>
          <tr>
            <td>
              <code>Promises & Async/Await</code>
            </td>
            <td>Giúp xử lý bất đồng bộ dễ dàng</td>
          </tr>
        </tbody>
      </table>

      <p>
        💡{' '}
        <strong>
          Các tính năng này rất quan trọng khi làm việc với React, đặc biệt là trong hooks và props handling.
        </strong>{' '}
        🚀
      </p>
    </section>
  );
};

export default ES6Features;
