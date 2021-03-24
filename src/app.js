const express = require("express");
const MongoDB = require("./database/Mongo");

class App {
  main = express();

  constructor({ uri_mongo }) {
    // Connect MongoDB
    MongoDB.connect(uri_mongo).then(() => {
      console.log(`MongoDB runnig!`);
    });

    this.routes();
  }

  async routes() {
    this.main.get("/api/v1", (req, res) => {
      return res.status(200).send({ message: "Project PDM" });
    });
  }

  async listen(port) {
    this.main.listen(port, () => {
      console.log(`Server is open in port ${port}`);
    });
  }
}

module.exports = App;
