import React from "react";
import useState from "react";

function ProductQuantity ({onChildClick}) {
  const [count, setCount] = React.useState(1);

  function incrementCount() {
    if (count === 9) {
      setCount(9);
    }else if(count === null){
      setCount(1)
    } else {
      setCount(count + 1);
    }
    console.log("INCREMENT COUNT: ", count);
    onChildClick(count); // pass any argument to the callback
  }

  function decrementCount() {
    if (count === 1) {
      setCount(1);
    }else if(count === null){
      setCount(1)
    } else {
      setCount(count - 1);
    }
    console.log("DECREMENT COUNT: ", count);
    onChildClick(count); // pass any argument to the callback
  }

  return (
    <div align="center">
      <div className="input-field">
        <button
          style={{ fontWeight: 700, fontSize: "45px" }}
          className="btn pink lighten-1 z-depth-1"
          onClick={decrementCount}
        >
          -
        </button>
        <span
          style={{
            fontSize: "24px",
            marginLeft: "12px",
            marginRight: "12px"
          }}
        >
          {count}
        </span>
        <button
          style={{ fontWeight: 700, fontSize: "30px" }}
          className="btn pink lighten-1 z-depth-1"
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ProductQuantity;
