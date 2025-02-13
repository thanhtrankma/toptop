import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AsynchronousProgramming = () => {
  return (
    <section>
      <h1>Asynchronous Programming trong JavaScript</h1>
      <p>
        Hiểu cách làm việc với <strong>Promises</strong> và <strong>async/await</strong>.
      </p>

      <h2>1. Promises</h2>
      <p>Promises giúp xử lý các tác vụ bất đồng bộ, tránh callback hell.</p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dữ liệu đã tải"), 2000);
  });
};

fetchData().then((data) => console.log(data)); // Output: Dữ liệu đã tải (sau 2s)`}
      </SyntaxHighlighter>

      <h2>2. Async/Await</h2>
      <p>Async/Await giúp viết mã bất đồng bộ dễ đọc hơn.</p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const getData = async () => {
  const data = await fetchData();
  console.log(data);
};

getData(); // Output: Dữ liệu đã tải (sau 2s)`}
      </SyntaxHighlighter>

      <h2>3. Fetch API với Async/Await</h2>
      <p>Ví dụ về việc lấy dữ liệu từ API sử dụng async/await.</p>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`const fetchUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
  }
};

fetchUserData();`}
      </SyntaxHighlighter>

      <h2>📌 Tổng kết</h2>
      <ul>
        <li>
          <strong>Promises</strong>: Giúp xử lý bất đồng bộ một cách hiệu quả.
        </li>
        <li>
          <strong>Async/Await</strong>: Giúp code dễ đọc hơn khi làm việc với tác vụ bất đồng bộ.
        </li>
        <li>
          <strong>Fetch API</strong>: Kết hợp với async/await để lấy dữ liệu từ server.
        </li>
      </ul>
    </section>
  );
};

export default AsynchronousProgramming;
