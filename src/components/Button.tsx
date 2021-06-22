import { useState } from "react";

export function Button() {
  const [number, setNumber] = useState(0);
  function handleClickButton() {
    setNumber(number + 1);
  }

  return <button onClick={handleClickButton}>{number}</button>;
}
