const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose.connect(
  "mongodb+srv://root:root@cluster0-z7qhr.mongodb.net/test",
  { useNewUrlParser: true },
  (err, res) => {
    // if (!err) {
    //   console.log(res);
    // }
  }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});
// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    // pass in a schema property
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
