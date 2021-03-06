const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const connectDB = require("./database/connection");
const bodyParser = require("body-parser");
const apiBooks = require("./routes/apiRoutes");



app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api", apiBooks);


connectDB();
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});