import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
import { CounterSection, CounterValue, CounterButton } from "./CounterStyles";
import { Button } from "primereact/button";

import { InputNumber } from "primereact/inputnumber";

import "primereact/resources/themes/lara-light-cyan/theme.css";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const counterDispatch = useDispatch();
  // State to store the input value
  const [inputValue, setInputValue] = useState(1);

  // Handler function to update the input value
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDecerement = () =>
    counterDispatch(decrement({ step: Number(inputValue) }));
  const handleIncrement = () =>
    counterDispatch(increment({ step: Number(inputValue) }));
  const handleReset = () => {
    counterDispatch(reset());
  };
  return (
    <div>
      <CounterValue>{count}</CounterValue>
      <CounterSection>
        <InputNumber
          size={2}
          style={{ marginRight: "5px" }}
          data-testId="input"
          value={inputValue}
          onValueChange={(e) => handleChange(e)}
        />

        <Button style={{ marginRight: "5px" }} onClick={handleIncrement}>
          +
        </Button>
        <Button onClick={handleDecerement}>-</Button>
        <Button style={{ marginLeft: "5px" }} onClick={handleReset}>
          Reset
        </Button>
      </CounterSection>
    </div>
  );
}

export default Counter;
