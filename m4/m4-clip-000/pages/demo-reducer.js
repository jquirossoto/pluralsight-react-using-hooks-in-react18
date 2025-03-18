import { useReducer } from "react";

export default function demo() {
  const [count, dispatch] = useReducer((count, action) => {
    switch (action.type) {
      case "increment":
        return count + action.incrementValue;
      default:
        return count;
    }
  }, 10);

  return (
    <button onClick={() => dispatch({ type: "increment", incrementValue: 1 })}>
      {count}
    </button>
  );
}
