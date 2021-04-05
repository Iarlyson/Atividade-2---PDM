const express = require("express");
const {json} = require("express");
const MongoDB = require("./database/Mongo");
const Router = require("./routes");

class App {
    main;

    constructor({uri_mongo}) {
        this.main = express();
        // Connect MongoDB
        MongoDB.connect(uri_mongo).then(() => {
            console.log(`MongoDB runnig!`);
        });

        this.routes();
    }

    async routes() {
        this.main.use(json());
        this.main.get("/api/v1", (req, res) => {
            return res.status(200).send({message: "Project PDM"});
        });
        this.main.use("/api/v1", Router);
    }

    async listen(port) {
        this.main.listen(port, () => {
            console.log(`Server is open in port ${port}`);
        });
    }
}

module.exports = App;
