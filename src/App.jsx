/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import "./App.css";
import ShowTask from "./components/ShowTask";
import InputBox from "./components/InputBox";
// import 'bootstrap/dist/css/bootstrap.min.css';
const reducer = function (state, action) {
  if (action.type === "ADD TASK") {
    return [...state, action.payload]
  }
  if (action.type === "UPDATE TASK") {
    return state?.map((task) => {
      if (task.id === action.payload.id) {
        return action.payload;
      }
      return task;
    })
  }
  if (action.type === "DELETE TASK") {
    return state.filter((task) => task.id !== action.payload)
  }
  if (action.type === "DELETEALL TASK") {
    // return state.filter((task) => task.id !== action.payload)
    state=[]
  }
  return state
}

export default function App() {
  const [tasks, setTask] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [task, dispatchTask] = useReducer(reducer, [])
  console.error(task);
  const deleteAllTasks = () => {
    console.log("dlete clear")
    setTask(task.filter((task) => !task.isChecked));
    dispatchTask({
      type:'DELETEALL TASK',payload:[]
    })
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
