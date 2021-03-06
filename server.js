const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting the port
const PORT = process.env.PORT || 3000;

const db = require("./models");

// Creating express app
const app = express();

// Logger
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use( require("./routes") );

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});