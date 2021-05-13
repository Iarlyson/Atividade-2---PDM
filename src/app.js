const express = require("express");
const {json} = require("express");
const MongoDB = require("./database/Mongo");
const Router = require("./routes");
const cors = require("cors");

class App {
    main;

    constructor({uri_mongo}) {
        this.main = express();
        // Connect MongoDB


        this.config({uri_mongo});

    }

    config({uri_mongo}) {
        this.main.use(cors());
        this.main.use(json());

        MongoDB.connect(uri_mongo).then(() => {
            console.log(`MongoDB runnig!`);
        });

        this.routes();
    }

    routes() {
        this.main.get("/api/v1", (req, res) => {
            return res.status(200).send({message: "Project PDM"});
        });
        this.main.use("/api/v1", Router);
    }

    listen(port) {
        this.main.listen(port, () => {
            console.log(`Server is open in port ${port}`);
        });
    }
}

module.exports = App;
