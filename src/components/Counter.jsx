import { useState } from 'preact/hooks';

export default function Coutner() {
  const addCoutner = () => {
setCount(count + 1)
  }

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => addCoutner()}>
        {count}
      </button>
    </div>
  );
}