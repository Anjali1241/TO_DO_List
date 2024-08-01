/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import "./App.css";
import ShowTask from "./components/ShowTask";
import InputBox from "./components/InputBox";
// import 'bootstrap/dist/css/bootstrap.min.css';
const reducer=function(state,action){
if(action.type==="ADD TASK"){
  return [...state,action.payload]
}
}

export default function App() {
  // const [task, setTask] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [task,dispatchTask]=useReducer(reducer,[])
  console.error(task);
  const deleteAllTasks = () => {
    // setTask(task.filter((task) => !task.isChecked));
  };
  return (
    <div className="App">
      <h1>TO-DO List</h1>
      <InputBox
        id="firstName"
        // setTask={setTask}
        // task={task}
        setShowTable={setShowTable}
        addTask={dispatchTask}
      ></InputBox>
      <ShowTask tasks={task} modifyTaskList={dispatchTask} showTable={showTable} />
      {task.length > 1 && <button onClick={deleteAllTasks}>Delete All</button>}
    </div>
  );
}
