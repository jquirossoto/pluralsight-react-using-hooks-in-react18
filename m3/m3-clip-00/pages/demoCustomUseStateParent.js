import React, { useEffect, useState } from "react";
import DemoApp from "./demoCustomUseStateChild";

const localStateValues = [];
let localStateValueIndex = 0;

export default function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("...Rerendering");
  }, [count]);

  function rerender() {
    setCount(count + 1);
  }

  function useStateCustom(value) {
    const localStateValueIndexLocal = localStateValueIndex;
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = value;
    }

    const setState = (value) => {
      localStateValues[localStateValueIndexLocal] = value;
      rerender();
    };

    localStateValueIndex++;
    return [localStateValues[localStateValueIndexLocal], setState];
  }

  localStateValueIndex = 0;
  return <DemoApp useState={useStateCustom} />;
}
