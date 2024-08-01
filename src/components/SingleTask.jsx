/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function SingleTask({ task, modifyTaskList, id, deleteTask,checkedTask }) {
  const [isEditableMode, setIsEditableMode] = useState(false);
  const [editedValue, setEditedValue] = useState(task);

  const update=() => {
    modifyTaskList({type:"UPDATE TASK",payload:{ id,name: editedValue }});
    setIsEditableMode(false);
  }
  return (
    <>
      {isEditableMode ? (
        <>
          <tr>
            <td>
              <input type="checkbox" onChange={checkedTask.bind(null,id)}/>
            </td>
            <td>
              <input
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
            </td>
            <td>
              <button
                onClick={update}
              >
                update
              </button>
            </td>
          </tr>
        </>
      ) : (
        <tr>
          <td>
            <input type="checkbox" onChange={checkedTask.bind(null,id)}/>
          </td>
          <td>{task}</td>
          <td>
            <button onClick={() => setIsEditableMode(true)}>Edit</button>
          </td>
          <td>
            {/* <button onClick={deleteTask.bind(null, id)}>Delete</button> */}
          </td>
        </tr>
      )}
    </>
  );
}

export default SingleTask;
