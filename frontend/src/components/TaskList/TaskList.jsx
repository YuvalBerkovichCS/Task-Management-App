import TaskItem from "../TaskItem/TaskItem";
import * as S from "./style";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <S.MUIList>
      {tasks.length === 0 && "No Tasks"}
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.TaskID}
            TaskID={task.TaskID}
            TaskName={task.TaskName}
            Completed={task.Completed}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </S.MUIList>
  );
};

export default TaskList;
