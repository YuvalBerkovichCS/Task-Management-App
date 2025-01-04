const express = require("express");
const routes = require("./src/routes");
const { connect } = require("./db");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

connect()
  .then(() => console.log("Connected to the database."))
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  });

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
