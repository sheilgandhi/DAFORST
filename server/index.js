const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Assets");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Welcome to DAFORST" });
});

// app.get("/api/assets", db.getAssets);
// app.get("/api/coach/:coach_id", db.getCoachById);
// app.post("/api/coach", db.createCoach);
// app.put("/api/coach/update_description/:coach_id", db.updateCoachDescription);
// app.put("/api/coach/update_email/:coach_id", db.updateCoachEmail);
// app.delete("/api/coach/:coach_id", db.deleteCoach);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
