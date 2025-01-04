import { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (TaskName) => {
    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ TaskName }),
      });

      if (!response.ok) throw new Error("Failed to add task");

      const newTask = await response.json(); // Response from the backend
      setTasks((currentTasks) => [...currentTasks, newTask]); // Add the new task to state
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const toggleTask = (TaskID, Completed) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.TaskID === TaskID) {
          return { ...task, Completed };
        }
        return task;
      });
    });
  };

  const deleteTask = async (TaskID) => {
    try {
      const response = await fetch(`/api/tasks/${TaskID}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");

      setTasks((currentTasks) =>
        currentTasks.filter((task) => task.TaskID !== TaskID)
      );
    } catch (error) {
      console.error("Error deleting task:", error);
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
