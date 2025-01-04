const express = require("express");
const router = express.Router();
const { sql } = require("../../db");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const result = await sql.query(`
      SELECT Tasks.TaskID,Tasks.TaskName,Tasks.Completed FROM Tasks
      `);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
});

router.post("/", async (req, res) => {
  const { TaskName } = req.body;

  if (!TaskName) {
    return res.status(400).json({ error: "TaskName is required" });
  }

  try {
    const request = new sql.Request();

    // Insert TaskName into the database, let the database handle TaskID and Completed
    const result = await request.input("TaskName", sql.NVarChar, TaskName)
      .query(`
        INSERT INTO Tasks (TaskName)
        OUTPUT inserted.TaskID, inserted.TaskName, inserted.Completed
        VALUES (@TaskName)
      `);

    const newTask = result.recordset[0]; // Get the inserted task from the OUTPUT clause
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error.message);
    res.status(500).json({ error: "Failed to create task" });
  }
});

router.delete("/:TaskID", async (req, res) => {
  const { TaskID } = req.params;

  try {
    const request = new sql.Request();
    await request.input("TaskID", sql.Int, TaskID).query(`
      DELETE FROM Tasks WHERE TaskID = @TaskID
    `);

    res.status(200).json({ message: "Task deleted successfully", TaskID });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;
