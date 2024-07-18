import { useState } from "react";
import "./App.css";
import ShowTask from "./components/ShowTask";
import InputBox from "./components/InputBox";

export default function App() {
  const [task, setTask] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const deleteAllTasks = () => {
    console.log(task);
    setTask(task.filter((task) => !task.isChecked));
  };
  return (
    <div className="App">
      <h1>TO-DO List</h1>
      <InputBox
        id="firstName"
        setTask={setTask}
        task={task}
        setShowTable={setShowTable}
      ></InputBox>
      <ShowTask tasks={task} setTask={setTask} showTable={showTable} />
      {task.length > 1 && <button onClick={deleteAllTasks}>Delete All</button>}
    </div>
  );
}
