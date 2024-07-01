/* eslint-disable react/prop-types */
import  { useState } from 'react';

function SingleTask({ task, updateTask, id, deleteTask }) {
  const [isEditableMode, setIsEditableMode] = useState(false);
  const [editedValue, setEditedValue] = useState(task);

  return (
    <>
      {isEditableMode ? (
        <>
          <tr>
            <td>
              <input
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
            </td>
            <td>
              <button
                onClick={() => {
                  updateTask(id, editedValue);
                  setIsEditableMode(false);
                }}
              >
                update
              </button>
            </td>
          </tr>
        </>
      ) : (
        <tr>
          <td>{task}</td>
          <td>
            <button onClick={() => setIsEditableMode(true)}>Edit</button>
          </td>
          <td>
            <button onClick={deleteTask.bind(null, id)}>Delete</button>
          </td>
        </tr>
      )}
    </>
  );
}

export default SingleTask;
