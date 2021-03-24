const App = require("./app");
const dotEnv = require("dotenv");

dotEnv.config();

const app = new App({
  uri_mongo: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
});

app.listen(process.env.PORT);
