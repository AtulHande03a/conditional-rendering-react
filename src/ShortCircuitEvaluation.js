import { useState } from "react";

const ShortCircuitEvaluation = () => {
  const [text, setText] = useState("");
  //when using or operator
  //if the default value is false,
  //then text is false and thus returns 'john'
  //if default value is true then
  //text is shown
  const firstValue = text || "John";

  //when using && operator
  //when default value is false ie empty string
  //then first value ie text is displayed as
  // we need both text and second value ie Peter
  //to be true to show us 'Peter'
  const secondValue = text && "Peter";

  //when we use ! operator
  // we will get the second value as
  //we explitely tell to bypass the check for both condition to be true
  //hence second value is shown ie 'peter'

  return (
    <>
      <h1>{text || "John"}</h1>
      {text && <h1>Peter</h1>}
      {!text && <h1>Peter</h1>}
    </>
  );
};

export default ShortCircuitEvaluation;
