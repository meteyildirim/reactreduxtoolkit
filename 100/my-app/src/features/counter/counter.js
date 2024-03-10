import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { CounterSection, CounterValue, CounterButton } from "./CounterStyles";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const counterDispatch = useDispatch();

  return (
    <CounterSection>
      <CounterValue>{count}</CounterValue>
      <div>
        <CounterButton onClick={() => counterDispatch(increment())}>
          +
        </CounterButton>
        <CounterButton onClick={() => counterDispatch(decrement())}>
          -
        </CounterButton>
      </div>
    </CounterSection>
  );
}

export default Counter;
