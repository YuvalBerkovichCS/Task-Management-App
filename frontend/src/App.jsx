import { useState, useEffect } from "react";
import Axios from "axios";
import GlobalStyles from "./GlobalStyles";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await Axios.get("/api/tasks");
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.error("Failed to retrieve tasks:", error);
      }
    };
    getAllTasks();
  }, []);

  const addTask = async (TaskName) => {
    try {
      const response = await Axios.post("/api/tasks", { TaskName });
      const newTask = response.data;
      setTasks((currentTasks) => [...currentTasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (TaskID) => {
    try {
      const response = await Axios.delete(`/api/tasks/${TaskID}`);
      setTasks((currentTasks) => {
        return currentTasks.filter((task) => task.TaskID !== TaskID);
      });
    } catch (error) {
      console.log("Failed to delete task:", error);
    }
  };

  const toggleTask = async (TaskID, Completed) => {
    try {
      const response = await Axios.put(`/api/tasks/${TaskID}`, { Completed });
      const data = response.data;
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.TaskID === TaskID ? { ...task, Completed } : task
        )
      );
    } catch (error) {
      console.log("Failed to update task:", error);
    }
  };

  return (
    <>
      <GlobalStyles />
      <h1>Task Management App</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </>
  );
};

export default App;
