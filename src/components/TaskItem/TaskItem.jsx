import * as S from "./style";

const TaskItem = ({ id, completed, title, toggleTask, deleteTask }) => {
  return (
    <S.MUIListItem key={id}>
      <S.MUICheckBox
        edge="start"
        tabIndex={-1}
        checked={completed}
        onChange={(e) => toggleTask(id, e.target.checked)}
      />
      <S.TaskName primary={title} />
      <S.DeleteButton onClick={() => deleteTask(id)} variant="contained">
        Delete
      </S.DeleteButton>
    </S.MUIListItem>
  );
};

export default TaskItem;
