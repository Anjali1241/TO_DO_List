/* eslint-disable react/prop-types */
import SingleTask from "./SingleTask";

function ShowTask({ tasks, setTask, showTable }) {
  const updateTask = function (updateId, updateTask) {
    setTask(
      tasks.map((task) => {
        if (task.id === updateId) {
          return { ...task, FirstName: updateTask };
        }
        return task;
      })
    );
  };
  const deleteTask = function (deleteId) {
    setTask(tasks.filter((task) => task.id !== deleteId));
  };

  return (
    <>
      {showTable && tasks.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>Edit/Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, id) => {
                return (
                  <SingleTask
                    updateTask={updateTask}
                    key={id}
                    id={task.id}
                    task={task.FirstName}
                    setTask={setTask}
                    deleteTask={deleteTask}
                  />
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <p>Tasks will be shown here</p>
      )}
    </>
  );
}

export default ShowTask;
