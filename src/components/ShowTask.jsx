/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SingleTask from "./SingleTask";

function ShowTask({ tasks, modifyTaskList, showTable }) {

  // const deleteTask = function (deleteId) {
  //   setTask(tasks.filter((task) => task.id !== deleteId));
  // };
  const checkedTask = function (checkedId) {
    // setTask(
    //   tasks.map((task) => {
    //     if (task.id == checkedId) {
    //       console.log(task.isChecked);
    //       return { ...task, isChecked: !task.isChecked };
    //     }
    //     return task;
    //   })
    // );
  };

  return (
    <>
      {showTable && tasks?.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>FirstName</th>
                <th>Edit/Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <SingleTask
                  modifyTaskList={modifyTaskList}
                    key={task.id}
                    id={task.id}
                    task={task.name}
                    // setTask={setTask}
                    checkedTask={checkedTask}
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
