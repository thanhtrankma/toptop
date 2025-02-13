import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ClosuresScopeHoisting = () => {
  return (
    <section>
      <h1>Closures, Scope, và Hoisting trong JavaScript</h1>
      <p>Hiểu rõ các khái niệm này để tránh các lỗi phổ biến và cải thiện hiệu suất code.</p>

      <h2>1. Scope (Phạm vi biến)</h2>
      <p>Scope xác định nơi có thể truy cập một biến trong mã. Có ba loại scope chính:</p>
      <ul>
        <li>
          <strong>Global Scope</strong>: Biến có thể truy cập từ bất kỳ đâu.
        </li>
        <li>
          <strong>Function Scope</strong>: Biến chỉ có thể truy cập trong một hàm.
        </li>
        <li>
          <strong>Block Scope</strong>: Với <code>let</code> và <code>const</code>, biến chỉ có thể truy cập trong khối{' '}
          {} chứa nó.
        </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`function testScope() {
  let localVar = "Tôi chỉ tồn tại trong hàm này";
  console.log(localVar);
}

testScope();
console.log(localVar); // Lỗi: localVar không được định nghĩa`}
      </SyntaxHighlighter>

      <h2>2. Closures</h2>
      <p>
        Closure xảy ra khi một hàm bên trong có thể truy cập các biến từ phạm vi bên ngoài của nó ngay cả sau khi phạm
        vi đó đã kết thúc.
      </p>
      <ul>
        <li>Closure rất hữu ích trong việc tạo ra các hàm có trạng thái riêng.</li>
        <li>Có thể dùng trong các hàm callback hoặc khi cần giữ trạng thái mà không làm lộ biến ra toàn cục.</li>
      </ul>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`}
      </SyntaxHighlighter>

      <h2>3. Hoisting</h2>
      <p>Hoisting là cơ chế giúp các khai báo biến và hàm được đẩy lên đầu phạm vi trước khi thực thi mã.</p>
      <ul>
        <li>
          Chỉ có <code>var</code> và <code>function</code> được hoisted đầy đủ.
        </li>
        <li>
          <code>let</code> và <code>const</code> vẫn được hoisted nhưng không thể truy cập trước khi khai báo.
        </li>
      </ul>
      <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
        {`console.log(hoistedVar); // undefined
var hoistedVar = "Tôi đã được hoisted!";

hoistedFunction(); // "Tôi được hoisted!"
function hoistedFunction() {
  console.log("Tôi được hoisted!");
}

console.log(letVar); // Lỗi: Cannot access 'letVar' before initialization
let letVar = "Không được hoisted giống var";`}
      </SyntaxHighlighter>

      <h2>📌 Tổng kết</h2>
      <ul>
        <li>
          <strong>Scope</strong>: Xác định phạm vi tồn tại của biến, có Global, Function và Block Scope.
        </li>
        <li>
          <strong>Closures</strong>: Cho phép hàm con ghi nhớ phạm vi của nó ngay cả khi hàm cha đã kết thúc.
        </li>
        <li>
          <strong>Hoisting</strong>: Biến <code>var</code> và hàm được đưa lên đầu phạm vi trước khi chạy, nhưng{' '}
          <code>let</code> và <code>const</code> không thể truy cập trước khi khai báo.
        </li>
      </ul>
    </section>
  );
};

export default ClosuresScopeHoisting;
