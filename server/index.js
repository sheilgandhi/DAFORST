const express = require("express");
const bodyParser = require("body-parser");
const db = require("./IPFS/IPFS");
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

// -- OLD Table
// app.get("/api/assets", db.getAssets);
// app.get("/api/assets/:asset_id", db.getAssetById);
// app.post("/api/assets", db.createAsset);
// app.delete("/api/assets/deleteAsset/:asset_id", db.deleteAsset);

// --- NEW Table
app.get("/api/ipfs", db.getIPFS);
app.get("/api/ipfs/:ipfs_cid", db.getIPFSById);
app.post("/api/ipfs", db.createIPFS);
app.delete("/api/ipfs/deleteIPFS/:ipfs_cid", db.deleteIPFS);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
