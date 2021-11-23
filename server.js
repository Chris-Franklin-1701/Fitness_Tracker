const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const htmlRoutes = require("./routes/html")

const PORT = process.env.Port || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout", 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//routes to use
app.use(require("./routes/html"));
app.use(require("./routes/api"));


app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`);
});