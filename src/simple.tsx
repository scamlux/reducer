import React, { useReducer } from "react";

function reducer(prevState: any, action: any) {
  let array: number[] = [];

  switch (action) {
    case "+first":
      array = [...prevState];
      array.unshift(Math.ceil(Math.random() * 100));
      return array;
    case "+last":
      array = [...prevState];
      array.push(Math.ceil(Math.random() * 100));
      return array;
    case "-last":
      array = [...prevState];
      array.pop();
      return array;
    case "-first":
      array = [...prevState];
      array.shift();
      return array;
    case "sort":
      array = [...prevState];
      array.sort();
      return array;
    case "x":
      return (prevState = []);
    default:
      break;
  }
}

const initialState = [0];
const Simple: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <hr />
      <h2>UseReducer Case</h2>
      <h3>MultiState ni Change qilish</h3>
      <hr />
      <button style={{ margin: "1rem " }} onClick={() => dispatch("+last")}>
        [+last] + array[length-1]
      </button>
      <button style={{ margin: "1rem " }} onClick={() => dispatch("+first")}>
        [+first] + array[0]
      </button>
      <button style={{ margin: "1rem " }} onClick={() => dispatch("-last")}>
        [-last] - array[length-1]
      </button>
      <button style={{ margin: "1rem " }} onClick={() => dispatch("-first")}>
        [-first] - array[0]
      </button>
      <button style={{ margin: "1rem " }} onClick={() => dispatch("sort")}>
        [sort] SORT array
      </button>
      <button onClick={() => dispatch("x")}>[x] CLEAR</button>
      <p>ArrayCha:</p>
      <p>
        <b>
          {state?.length === 0 && "(PUSTOY)"}
          {state?.join(" - ")}
        </b>
      </p>
    </>
  );
};

export default Simple;
