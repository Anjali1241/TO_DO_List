/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';

function InputBox({ setTask, task, setShowTable }) {
  const [input, setInput] = useState('');

  const handleOnChange = (e) => {
    setInput(e.target.value);
    // setTask(e.target.value)
  };

  const addTask = (e) => {
    setShowTable(true);
    setTask([...task, { id: Date.now(), FirstName: input }]);
    setInput('');
  };
  return (
    <div className="inputBox">
      <input type="text" value={input} onChange={handleOnChange} />
      <button onClick={addTask}>Create Task</button>
    </div>
  );
}

export default InputBox;
