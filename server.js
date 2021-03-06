const express = require("express");
const mongoose = require ("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/api-routes");

// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// heroku code
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.use("/api", apiRoutes);

// MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://cedd:ironmaiden78@ds229078.mlab.com:29078/heroku_klm3vcvd";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Send requests
// Define API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://cedd:ironmaiden78@ds229078.mlab.com:29078/heroku_klm3vcvd");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
