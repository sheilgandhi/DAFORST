const express = require("express");
const bodyParser = require("body-parser");
const db = require("./Assets/Assets");
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

app.get("/api/assets", db.getAssets);
app.get("/api/assets/:asset_id", db.getAssetById);
app.post("/api/assets", db.createAsset);
app.delete("/api/assets/deleteAsset/:asset_id", db.deleteAsset);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
