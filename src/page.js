import { useState } from 'react';
import './index.css';

function Page() {

  const [calc , setCalc] = useState("");
  const [result , setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalc = value => {
    if(ops.includes(value) && calc === '' || 
    ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }

    setCalc(calc + value);

    if(!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const AC = () =>{
    setCalc("");
    setResult("");
  }

  const option1 = () =>{
    setCalc(calc * -1);
    setResult(calc * -1);
    setCalc(eval("-"+calc).toString());
  }
  const option2 = () =>{
    setCalc((calc / 100) +"");
    setResult((calc / 100) +"");
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  return (
    <div className="App">
      <div className="calulator">
        <div className="display">
            {result ? <span>({result})</span> : ''}&nbsp; 
            { calc || "0"}
        </div>

        <div className="operator">
            <button onClick={AC}>AC</button>
            <button onClick={option1}>+/-</button>
            <button onClick={option2}>%</button>
            <button onClick={() => updateCalc('/')}>/</button>
        </div>
        <div className="digits">
            <button onClick={() => updateCalc('7')}>7</button>
            <button onClick={() => updateCalc('8')}>8</button>
            <button onClick={() => updateCalc('9')}>9</button>
            <button onClick={() => updateCalc('*')}>X</button>
            <button onClick={() => updateCalc('4')}>4</button>
            <button onClick={() => updateCalc('5')}>5</button>
            <button onClick={() => updateCalc('6')}>6</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('1')}>1</button>
            <button onClick={() => updateCalc('2')}>2</button>
            <button onClick={() => updateCalc('3')}>3</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
