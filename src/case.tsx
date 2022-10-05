import { useReducer } from "react";

const myReducer = (prevState: any, action: any) => {
  let array;
  switch (action.type) {
    case "ADD":
      array = [...prevState];
      array.push(action.payload);
      return array;
    case "REMOVE":
      array = [...prevState];
      array.pop();
      return array;
    case "CLEAR":
      return (prevState = []);
    default:
      break;
  }
};
type stateType = any;

const initialValue: stateType = [0];

const Case = () => {
  const [state, dispatcher] = useReducer(myReducer, initialValue);
  console.log(state);

  // Three different state triggers
  const addHandler = () => {
    dispatcher({ type: "ADD", payload: Math.round(Math.random() * 100 + 100) });
  };
  const removeHandler = () => {
    dispatcher({ type: "REMOVE" });
  };
  const clearHandler = () => {
    dispatcher({ type: "CLEAR" });
  };

  return (
    <>
      <hr />
      <h2>UseReducer Case</h2>
      <h3>MultiState ni Change qilish</h3>
      <button onClick={addHandler}>[+] ADD RANDOM</button>
      <button style={{ margin: "0 2rem" }} onClick={removeHandler}>
        [-] REMOVE array[length-1]
      </button>
      <button onClick={clearHandler}>[x] CLEAR</button>
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

export default Case;
