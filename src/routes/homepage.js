const homepage = app => {
    app.get("/", (req, res) => {
        res.render("homepage");
    });
};

module.exports = homepage;
