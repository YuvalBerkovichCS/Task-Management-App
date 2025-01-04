import { useState } from "react";
import * as S from "./style";

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (taskName === "") return;

    onSubmit(taskName);

    setTaskName("");
  };

  return (
    <>
      <S.Form onSubmit={handleSumbit}>
        <S.FormRow>
          <S.MUITextField
            label="New Task"
            variant="filled"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <S.MUIButton variant="contained" type="sumbit">
            Add Task
          </S.MUIButton>
        </S.FormRow>
      </S.Form>
    </>
  );
};

export default TaskForm;
