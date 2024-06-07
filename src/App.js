import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("0");

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === "=") {
        setValue(String(eval(value)));
    } else if (buttonValue === "AC") {
      setValue("0");
    } else if (buttonValue === "DE") {
      setValue(value.length > 1 ? value.slice(0, -1) : "0");
    } else {
      if (value === "0" && !isNaN(buttonValue)) {
        setValue(buttonValue); 
      } else {
        setValue(value + buttonValue); 
      }
    }
  };

  return (
    <div className='card'>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={value} readOnly />
          </div>
          <div>
            <input type='button' value="AC" onClick={handleButtonClick} />
            <input type='button' value="DE" onClick={handleButtonClick} />
            <input type='button' value="/" onClick={handleButtonClick} />
            <input type='button' value="%" onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="7" onClick={handleButtonClick} />
            <input type='button' value="8" onClick={handleButtonClick} />
            <input type='button' value="9" onClick={handleButtonClick} />
            <input type='button' value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="4" onClick={handleButtonClick} />
            <input type='button' value="5" onClick={handleButtonClick} />
            <input type='button' value="6" onClick={handleButtonClick} />
            <input type='button' value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="1" onClick={handleButtonClick} />
            <input type='button' value="2" onClick={handleButtonClick} />
            <input type='button' value="3" onClick={handleButtonClick} />
            <input type='button' value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type='button' value="." onClick={handleButtonClick} />
            <input type='button' value="0" onClick={handleButtonClick} />
            <input type='button' value="=" className='equal' onClick={handleButtonClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
