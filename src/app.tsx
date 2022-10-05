import React, { useReducer, useState } from "react";

interface stateType {
  past: number[];
  present: number[];
  future: number[];
}

const initialState: stateType = {
  past: [],
  present: [],
  future: [],
};

function App() {
  const [num, setNum] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: any, action: string) {
    switch (action) {
      case "increment":
        setNum((prev) => prev + 1);
        state.present.push(num);
        if (state.present.length > 1) {
          const pr = state.present.shift();
          state.past.push(pr);
        }
        return state;
      case "undo":
        setNum((prev) => prev - 1);
        state.present.push(num - 2);
        if (state.present.length > 1) {
          const nums = state.present.shift();
          state.future.push(nums);
          state.past.pop(nums);
        }
        return state;
      case "redo":
        setNum((prev) => prev + 1);
        state.present.push(num + 2);
        if (state.present.length > 1) {
          const nums = state.present.shift();
          state.future.pop(nums);
          state.past.push(nums);
        }

        return state;
      case "reset":
        return state;
    }
  }

  return (
    <div className="App">
      <pre>{JSON.stringify(state)}</pre>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button
        onClick={() => dispatch("undo")}
        disabled={state.past.length <= 0}
      >
        Undo
      </button>
      <button
        onClick={() => dispatch("redo")}
        disabled={state.future.length <= 0}
      >
        Redo
      </button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default App;
