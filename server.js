const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    UseFindAndModify: false
});

//routes to use
app.use(require("./routes/html"));
app.use(require("./routes/api"));


app.use(PORT, () => {
    console.log(`App running on PORT ${PORT}!`);
});