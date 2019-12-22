const express = require("express");
const bodyParser = require("body-parser");
const lessMiddleware = require("less-middleware");
const path = require("path");
const homepage = require("./routes/homepage");
const docs = require("./routes/docs");
const video = require("./routes/video");

const PORT = process.env.PORT || 3000;

const app = express();

app.locals.appName = "Supertools";
app.locals.NODE_ENV = process.env.NODE_ENV;
app.locals.TEAMS_HOST_DOMAIN = process.env.TEAMS_HOST_DOMAIN;

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

app.set("views", "src/views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    "/public/styles",
    lessMiddleware(path.join(__dirname, "styles"), {
        dest: path.join(__dirname, "public/styles")
    })
);

app.use("/public", express.static("src/public"));

homepage(app);
docs(app);
video(app);

app.listen(PORT, err => {
    if (err) {
        throw err;
    }

    console.log(`server is listening on ${PORT}`);
});
