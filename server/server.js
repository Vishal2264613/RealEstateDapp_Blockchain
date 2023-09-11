const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(express.json());

const dbURI =
  "mongodb+srv://pawarvishal28797:2264613Ishu@nodecluster.g7ommaa.mongodb.net/PropertyDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDb Connection successful");
    return server.listen({ port: 5001 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
// mongoose
// .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// .then((result) => app.listen(3000))
// .catch((err) => console.log(err));

// app.get("/properties", (req, res) => {
//   Properties.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.post("/uploadData", async function (req, res) {
//   // res.send("POST Request Called");
//   const properties = new Properties(req.body);

//   try {
//     await properties.save();
//     res.send(properties);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(error);
//   }
// });

// app.listen(3001, () => {
//   console.log("Server is Running");
// });
