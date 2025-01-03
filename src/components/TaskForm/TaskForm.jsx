import { useState } from "react";
import * as S from "./style";

const TaskForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  };

  return (
    <>
      <S.Form onSubmit={handleSumbit}>
        <S.FormRow>
          <S.MUITextField
            label="New Task"
            variant="filled"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
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
