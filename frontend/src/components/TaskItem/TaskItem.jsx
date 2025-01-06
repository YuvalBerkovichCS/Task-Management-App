import * as S from "./style";

const TaskItem = ({ TaskID, Completed, TaskName, toggleTask, deleteTask }) => {
  //console.log("÷//TaskItem Props:", { TaskID, TaskName, Completed });

  return (
    <S.MUIListItem key={TaskID}>
      <S.MUICheckBox
        edge="start"
        tabIndex={-1}
        checked={Completed}
        onChange={(e) => toggleTask(TaskID, e.target.checked)}
      />
      <S.TaskName>{TaskName}</S.TaskName>
      <S.DeleteButton onClick={() => deleteTask(TaskID)} variant="contained">
        Delete
      </S.DeleteButton>
    </S.MUIListItem>
  );
};

export default TaskItem;
