import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Assets from "./assets_schema.js";
//MongoDB: root

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:root@cluster0.8bwif.mongodb.net/daforstDB?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.post("/", (req, res) => {
  const asset = req.body;
  Assets.create(asset, (err, data) => {
    if (err) {
      //Error
      res.status(500).send(err);
    } else {
      //Success send back data
      res.status(201).send(data);
    }
  });
});

app.get("/api/assets", (req, res) => {
  Assets.find((err, data) => {
    if (err) {
      //Error
      res.status(500).send(err);
    } else {
      //Sucess send back data
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
