import React from "react";

export default function Calculater({ a, b, op }) {
  //export defult function Calculater(props){
  //let a = Props.a
  //let b = props.b
  //let op = props.op
  //let result = 0;
  //return(
  //<div>result:{result}</div>
  //)
  //}
  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
       
        return b !== 0 ? a / b : "Cannot divide by zero";
      default:
        return "Invalid operator";
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p>
        {a} {op} {b} = {calculate(a, b, op)}
      </p>
    </div>
  );
}