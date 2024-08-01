/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';

function InputBox({ addTask }) {
  const [input, setInput] = useState('');

  const ref = useRef(null)

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const submitTask = (e) => {
    addTask({ type: "ADD TASK", payload: { name: input, id: Date.now() } })
    ref.current.focus()
    if (input == "") {
      return true
    }
    // setShowTable(true);
    // setTask([...task, { id: Date.now(), FirstName: input,isChecked:false }]);
    setInput('');
  };
  return (
    <div className="inputBox">
      <input type="text" value={input} onChange={handleOnChange} ref={ref} />
      <button onClick={submitTask}>Create Task</button>
    </div>
  );
}

export default InputBox;
