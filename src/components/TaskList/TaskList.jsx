import TaskItem from "../TaskItem/TaskItem";
import * as S from "./style";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <S.MUIList>
      <h1>Task List</h1>
      {tasks.length === 0 && "No Tasks"}
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            {...task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </S.MUIList>
  );
};

export default TaskList;
