import { useState } from "react";
import isEven from "../helpers/isEven";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <h2>{isEven(count) ? "Even Number" : "Odd Number"}</h2>
    </div>
  );
}

export default Counter;
