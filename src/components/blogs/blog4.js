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
        <span>React Hooks:</span> Mục đích, Cách Dùng và Giải Thích
      </motion.h1>

      <section>
        <h2>1. useState</h2>
        <p>
          <strong>Mục đích:</strong> <code>useState</code> là hook giúp bạn khai báo và quản lý state trong component.
        </p>
        <p>
          <strong>Cách dùng:</strong> Bạn có thể sử dụng <code>useState</code> để khai báo các giá trị và gán cho chúng
          một hàm cập nhật.
        </p>
        <p>
          <strong>Giải thích:</strong> Hook này trả về một mảng gồm hai giá trị: giá trị hiện tại của state và một hàm
          để cập nhật giá trị đó.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const [count, setCount] = useState(0);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>2. useEffect</h2>
        <p>
          <strong>Mục đích:</strong> <code>useEffect</code> giúp bạn thực hiện các tác vụ phụ (side effects) sau khi
          render.
        </p>
        <p>
          <strong>Cách dùng:</strong> Có thể sử dụng <code>useEffect</code> để gọi API, cập nhật DOM, hoặc theo dõi sự
          thay đổi của state.
        </p>
        <p>
          <strong>Giải thích:</strong> Hook này thực thi một hàm sau khi component render, và có thể điều chỉnh hành vi
          khi có sự thay đổi ở các dependencies.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`useEffect(() => {
  // Tác vụ phụ (gọi API, cập nhật DOM, v.v.)
}, [dependency]);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>3. useContext</h2>
        <p>
          <strong>Mục đích:</strong> <code>useContext</code> giúp bạn truy cập vào context và lấy giá trị từ nó mà không
          cần phải truyền props.
        </p>
        <p>
          <strong>Cách dùng:</strong> Tạo một Context và sử dụng <code>useContext</code> để lấy giá trị từ Context đó
          trong component.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useContext</code> giúp bạn tránh việc truyền props qua nhiều lớp component,
          thay vào đó sử dụng Context để chia sẻ giá trị toàn cục.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const MyContext = createContext();
const value = useContext(MyContext);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>4. useReducer</h2>
        <p>
          <strong>Mục đích:</strong> <code>useReducer</code> giúp bạn quản lý state phức tạp hơn, thay vì dùng{' '}
          <code>useState</code>, bạn có thể dùng <code>useReducer</code> với reducer function.
        </p>
        <p>
          <strong>Cách dùng:</strong> Thay vì trực tiếp cập nhật state, <code>useReducer</code> dùng một hàm reducer để
          xử lý các hành động.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useReducer</code> là sự thay thế mạnh mẽ cho <code>useState</code> khi bạn
          cần xử lý state phức tạp hoặc các state có nhiều tác động khác nhau.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>5. useCallback</h2>
        <p>
          <strong>Mục đích:</strong> <code>useCallback</code> giúp tối ưu hiệu suất bằng cách tránh tái tạo lại các hàm
          khi không cần thiết.
        </p>
        <p>
          <strong>Cách dùng:</strong> Dùng <code>useCallback</code> để memo hóa hàm và chỉ tạo lại khi các dependencies
          thay đổi.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useCallback</code> giúp tối ưu hóa các hàm callback tránh việc tạo mới hàm
          mỗi lần render lại.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const memoizedCallback = useCallback(() => {
  console.log(count);
}, [count]);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>6. useMemo</h2>
        <p>
          <strong>Mục đích:</strong> <code>useMemo</code> giúp tối ưu hiệu suất bằng cách tính toán lại giá trị chỉ khi
          nào các dependencies thay đổi.
        </p>
        <p>
          <strong>Cách dùng:</strong> Dùng <code>useMemo</code> để memo hóa kết quả của một phép toán nặng và chỉ tính
          toán lại khi các dependencies thay đổi.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useMemo</code> sẽ giữ lại giá trị đã tính toán và chỉ tính lại nếu
          dependencies thay đổi, giúp giảm tải các phép tính nặng.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>7. useRef</h2>
        <p>
          <strong>Mục đích:</strong> <code>useRef</code> giúp bạn giữ một tham chiếu đến một element trong DOM hoặc một
          giá trị mà không làm component re-render.
        </p>
        <p>
          <strong>Cách dùng:</strong> Dùng <code>useRef</code> để lấy tham chiếu đến các element hoặc giá trị và sử dụng
          chúng trong các hàm khác mà không làm component re-render.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useRef</code> giúp bạn truy cập và thao tác trực tiếp với các DOM elements,
          hoặc lưu trữ các giá trị qua các lần render mà không làm render lại component.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`const inputRef = useRef();
inputRef.current.focus();`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>8. useLayoutEffect</h2>
        <p>
          <strong>Mục đích:</strong> <code>useLayoutEffect</code> hoạt động giống như <code>useEffect</code> nhưng nó sẽ
          chạy ngay sau khi DOM đã được cập nhật, trước khi trình duyệt vẽ lại.
        </p>
        <p>
          <strong>Cách dùng:</strong> <code>useLayoutEffect</code> được dùng khi bạn cần thực hiện các thay đổi layout
          hoặc đo đạc các phần tử DOM ngay sau khi chúng được cập nhật.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useLayoutEffect</code> sẽ chạy đồng bộ, khác với <code>useEffect</code>{' '}
          chạy bất đồng bộ, giúp bạn có thể thay đổi layout trước khi trình duyệt render lại.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`useLayoutEffect(() => {
  // Thực hiện các thay đổi layout ở đây
}, []);`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>9. useImperativeHandle</h2>
        <p>
          <strong>Mục đích:</strong> <code>useImperativeHandle</code> cho phép bạn tùy chỉnh giá trị mà bạn muốn expose
          ra ngoài khi sử dụng ref.
        </p>
        <p>
          <strong>Cách dùng:</strong> Dùng <code>useImperativeHandle</code> để expose các phương thức mà bạn muốn sử
          dụng bên ngoài component.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useImperativeHandle</code> giúp bạn kiểm soát những gì mà ref có thể truy
          cập và expose các phương thức cho các component cha.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`useImperativeHandle(ref, () => ({
  focusInput: () => {
    inputRef.current.focus();
  }
}));`}
        </SyntaxHighlighter>
      </section>

      <section>
        <h2>10. useDebugValue</h2>
        <p>
          <strong>Mục đích:</strong> <code>useDebugValue</code> giúp hiển thị thông tin debug về custom hook trong React
          DevTools.
        </p>
        <p>
          <strong>Cách dùng:</strong> Sử dụng <code>useDebugValue</code> để truyền giá trị cho React DevTools trong quá
          trình phát triển.
        </p>
        <p>
          <strong>Giải thích:</strong> <code>useDebugValue</code> giúp bạn dễ dàng debug các custom hooks khi phát triển
          ứng dụng.
        </p>
        <SyntaxHighlighter language="javascript" style={darcula} wrapLines showInlineLineNumbers>
          {`useDebugValue(value);`}
        </SyntaxHighlighter>
      </section>
      <section>
        <h2>7. Kết luận</h2>
        <ul>
          <li>
            <span>useState:</span> Quản lý trạng thái.
          </li>
          <li>
            <span>useEffect:</span> Quản lý side effects.
          </li>
          <li>
            <span>useContext:</span> Truy cập giá trị của context.
          </li>
          <li>
            <span>useReducer:</span> Quản lý trạng thái phức tạp.
          </li>
          <li>
            <span>useCallback:</span> useCallback: Ghi nhớ hàm.
          </li>
          <li>
            <span>useRef:</span> Lưu trữ tham chiếu và tránh render lại.
          </li>
          <li>
            <span>useLayoutEffect:</span> Chạy trước khi DOM được vẽ.
          </li>
          <li>
            <span>useImperativeHandle:</span> Tùy chỉnh ref exposed cho component cha.
          </li>
          <li>
            <span>useDebugValue:</span> Hỗ trợ debug giá trị trong DevTools.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ReactStateAndPropsGuide;
